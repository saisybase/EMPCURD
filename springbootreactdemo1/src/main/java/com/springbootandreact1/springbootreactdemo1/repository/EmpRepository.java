package com.springbootandreact1.springbootreactdemo1.repository;

import com.springbootandreact1.springbootreactdemo1.model.emp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.logging.LogRecord;

public interface EmpRepository extends JpaRepository<emp, Long> {
}
