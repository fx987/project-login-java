package com.login.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.project.entities.User;

public interface UserRespository extends JpaRepository<User,Long> {
    
}
