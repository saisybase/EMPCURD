package com.springbootandreact1.springbootreactdemo1.controller;


import com.springbootandreact1.springbootreactdemo1.exception.EmpNotFoundException;
import com.springbootandreact1.springbootreactdemo1.model.emp;
import com.springbootandreact1.springbootreactdemo1.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.*;

@CrossOrigin("http://localhost:3000/")
@RestController
public class empcontroller {

@Autowired
private EmpRepository erep;

@PostMapping("/add")
public emp insertemp(@RequestBody emp e)
{

    return erep.save(e);

}

@GetMapping("/ListEmp")
public List<emp> reademp()
    {
        return erep.findAll();
    }

@GetMapping("/singleEmp/{id}")
emp oneemp(@PathVariable Long id)
 {
  return erep.findById(id).orElseThrow(()->new EmpNotFoundException(id));
 }

 @PutMapping("/updateEmp/{id}")
emp modifyemp(@RequestBody emp newemp,@PathVariable Long id)
 {
     return erep.findById(id).map(e->{
         e.setId(newemp.getId());
         e.setEmpno(newemp.getEmpno());
         e.setEname(newemp.getEname());
         e.setSal(newemp.getSal());
         return erep.save(e);
     }).orElseThrow(()->new EmpNotFoundException(id));

 }


 @DeleteMapping("/deleteEmp/{id}")
String deleteemp(@PathVariable Long id)
 {
     if (!erep.existsById(id))
     {
         throw new EmpNotFoundException(id);
     }
     erep.deleteById(id);
     return "Employee with the ID "+id+" successfully deleted ";


 }

}

