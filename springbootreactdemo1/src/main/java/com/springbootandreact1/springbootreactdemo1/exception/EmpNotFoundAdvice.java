package com.springbootandreact1.springbootreactdemo1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class EmpNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(EmpNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionhandler(EmpNotFoundException s)
    {
        Map<String,String> errormap=new HashMap<>();
        errormap.put("errormessage",s.getMessage());
        return errormap;


    }
}
