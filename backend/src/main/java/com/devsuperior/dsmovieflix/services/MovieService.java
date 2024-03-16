package com.devsuperior.dsmovieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.MovieDTO;
import com.devsuperior.dsmovieflix.dto.MovieDTOByGenre;
import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.entities.Genre;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.entities.Review;
import com.devsuperior.dsmovieflix.repositories.GenreRepository;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;
import com.devsuperior.dsmovieflix.repositories.ReviewRepository;
import com.devsuperior.dsmovieflix.services.execeptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
		return new MovieDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public Page<MovieDTOByGenre> findAllMoviesByGenreId(Long genreId, Pageable pageable) {
		Genre genre = (genreId == 0) ? null : genreRepository.getReferenceById(genreId);
		Page<Movie> page = repository.findAllMoviesByGenreId(genre, pageable);
		return page.map(x -> new MovieDTOByGenre(x));
	}
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findReviewByMovieId(Long movieId) {
		List<Review> list = reviewRepository.findReviewByMovieId(movieId);
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

}
