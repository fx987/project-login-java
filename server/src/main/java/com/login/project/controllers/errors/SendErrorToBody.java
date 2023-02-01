package com.login.project.controllers.errors;

public class SendErrorToBody {

    private String errorMessage;

    public SendErrorToBody(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

}
