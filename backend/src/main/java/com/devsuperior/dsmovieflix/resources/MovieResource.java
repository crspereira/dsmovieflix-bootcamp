package com.devsuperior.dsmovieflix.resources;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovieflix.dto.MovieDTO;
import com.devsuperior.dsmovieflix.dto.MovieDTOByGenre;
import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private MovieService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<MovieDTO> findById(@PathVariable Long id) {
		MovieDTO dto = service.findById(id);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
	}
	
	@GetMapping
	public ResponseEntity<Page<MovieDTOByGenre>> findAllMoviesByGenreId(
			@RequestParam(value = "genreId", defaultValue = "0") Long genreId,
			Pageable pageable) {
		Page<MovieDTOByGenre> list = service.findAllMoviesByGenreId(genreId, pageable);
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{movieId}/reviews")
	public ResponseEntity<List<ReviewDTO>> findReviewByMovieId(@PathVariable Long movieId){
		List<ReviewDTO> reviewsDto = service.findReviewByMovieId(movieId);
		return ResponseEntity.status(HttpStatus.OK).body(reviewsDto);
	}

}
