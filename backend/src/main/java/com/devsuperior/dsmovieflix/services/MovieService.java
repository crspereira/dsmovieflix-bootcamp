package com.devsuperior.dsmovieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.MovieDTO;
import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.entities.Review;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;
import com.devsuperior.dsmovieflix.repositories.ReviewRepository;
import com.devsuperior.dsmovieflix.services.execeptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
		return new MovieDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findReviewByMovieId(Long movieId) {
		List<Review> list = reviewRepository.findReviewByMovieId(movieId);
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

}
