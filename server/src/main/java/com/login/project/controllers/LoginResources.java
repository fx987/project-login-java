package com.login.project.controllers;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.project.controllers.errors.SendErrorToBody;
import com.login.project.controllers.requestBodys.RequestBodyLogin;
import com.login.project.entities.User;
import com.login.project.services.LoginService;
import com.login.project.services.exceptions.UserInformationExeception;

@RestController
@RequestMapping("/user")
public class LoginResources {

    @Autowired
    private LoginService service;

    @PostMapping(value = "/")
    public ResponseEntity<Object> findResourcesUser(@RequestBody RequestBodyLogin requestBody) throws ParseException {

        try {
            Boolean userList = service.findServiceUser(requestBody);
            return ResponseEntity.status(200).body(userList);
        } catch (UserInformationExeception e) {
            SendErrorToBody sendError = new SendErrorToBody(e.getMessage());
            return ResponseEntity.status(404).body(sendError);
        }

    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> createResourcesUser(@RequestBody User user) throws ParseException {
        try {
            User userCreate = service.createServicesUser(user);

            return ResponseEntity.status(201).body(userCreate);

        } catch (UserInformationExeception e) {
            SendErrorToBody sendError = new SendErrorToBody(e.getMessage());
            return ResponseEntity.status(404).body(sendError);
        }
    }

}
