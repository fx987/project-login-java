package com.login.project.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.project.controllers.requestBodys.RequestBodyLogin;
import com.login.project.entities.User;
import com.login.project.repositories.UserRespository;
import com.login.project.services.exceptions.UserInformationExeception;

@Service
public class LoginService {

    @Autowired
    private UserRespository userRespository;

    public User createServicesUser(User userParams) throws RuntimeException {
        List<User> usersFilter = userRespository
                .findAll()
                .stream()
                .filter(user -> user.getName().equals(userParams.getName())
                        || user.getEmail().equals(userParams.getEmail()))
                .collect(Collectors.toList());

        if (usersFilter.size() > 0) {
            throw new UserInformationExeception("Falha de cadastro, campos de email e nome ja existem.");
        }

        return userRespository.save(userParams);
    }

    public Boolean findServiceUser(RequestBodyLogin body) throws RuntimeException {
        List<User> usersFilter = userRespository
                .findAll()
                .stream()
                .filter(user -> user.getEmail().equals(body.getEmail())
                        && user.getPassword().equals(body.getPassword()))
                .collect(Collectors.toList());

        if (usersFilter.size() <= 0) {
            throw new UserInformationExeception("Falha de login,campos de email e senha incorretos.");
        }
        return true;
    }

}
