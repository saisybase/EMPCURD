package com.springbootandreact1.springbootreactdemo1.exception;

public class EmpNotFoundException extends RuntimeException{
    public EmpNotFoundException(Long id)
    {
        super("Employee not found "+id);
    }

}
