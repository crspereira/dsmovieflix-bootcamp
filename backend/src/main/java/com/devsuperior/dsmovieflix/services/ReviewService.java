package com.devsuperior.dsmovieflix.services;

import java.io.Serializable;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.entities.Review;
import com.devsuperior.dsmovieflix.entities.User;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;
import com.devsuperior.dsmovieflix.repositories.ReviewRepository;
import com.devsuperior.dsmovieflix.services.execeptions.ResourceNotFoundException;

@Service
public class ReviewService implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private AuthService authService;
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional
	@PreAuthorize(value = "hasAnyRole('MEMBER')")
	public ReviewDTO insert(ReviewDTO dto) {
		//recupera usuario logado
		User user = authService.authenticatedUser();
		//recupera o objeto movie
		Optional<Movie> obj = movieRepository.findById(dto.getMovieId());
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Movie Not Found! id:" + dto.getMovieId()));
		//monta e salva o objeto review
		Review review = new Review();
		review.setText(dto.getText());
		review.setMovie(movie);
		review.setUser(user);
		Review entity = repository.save(review);
		
		return new ReviewDTO(entity);
	}

}
