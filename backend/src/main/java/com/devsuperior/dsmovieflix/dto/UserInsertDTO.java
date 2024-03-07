package com.devsuperior.dsmovieflix.dto;

import com.devsuperior.dsmovieflix.services.validations.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserDTO {
	private static final long serialVersionUID = 1L;

	//variaveis de instância
	private String password;
	
	//construtores
	public UserInsertDTO() {
		super();
	}
	
	//geters e setters
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
