package com.devsuperior.dsmovieflix.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.UserDTO;
import com.devsuperior.dsmovieflix.entities.User;
import com.devsuperior.dsmovieflix.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService { //UserDetailsService interface para SpringSecuitiry Autentication

	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	//dependecias
	@Autowired
	private UserRepository repository;
	@Autowired
	private AuthService authService;
	
	//endpoints
	@Transactional(readOnly = true)
	public UserDTO findLoggedInUserProfile() {
		User authenticatedUser = authService.authenticatedUser();
		return new UserDTO(authenticatedUser);
	}
	
	//metodo do UserDetailsService
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {
			logger.error("User Not Found: " + username);
			throw new UsernameNotFoundException("Email Not Found!");
		}
		logger.info("User Found: " + username);
		return user;
	}
}