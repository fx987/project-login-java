package com.login.project.controllers.requestBodys;

public class RequestBodyLogin {

    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String toString() {
        return "RequestBody [email=" + email + ", password=" + password + "]";
    }

}
