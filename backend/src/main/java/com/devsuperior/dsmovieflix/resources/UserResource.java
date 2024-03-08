package com.devsuperior.dsmovieflix.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovieflix.dto.UserDTO;
import com.devsuperior.dsmovieflix.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserResource {
	
	@Autowired
	private UserService service;
	
	@GetMapping(value = "/profile")
	public ResponseEntity<UserDTO> findLoggedInUserProfile() {
		UserDTO loggedInUserProfile = service.findLoggedInUserProfile();
		return ResponseEntity.status(HttpStatus.OK).body(loggedInUserProfile);
	}

}
