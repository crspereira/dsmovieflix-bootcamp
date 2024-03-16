package com.devsuperior.dsmovieflix.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovieflix.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	//Custom Query Method
	List<Review> findReviewByMovieId(Long movieId);

}
