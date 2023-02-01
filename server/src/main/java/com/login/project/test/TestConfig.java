package com.login.project.test;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.login.project.entities.User;
import com.login.project.repositories.UserRespository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private UserRespository userRepository;

    public void run(String... args) throws Exception {

        // create user repository
        User user = new User(null, "arthur", "arthurgosi@gmail.com", "22538842", "29/08/2004");
        userRepository.saveAll(Arrays.asList(user));
    }

}
