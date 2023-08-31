package com.springbootandreact1.springbootreactdemo1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class emp{

    @Id
    @GeneratedValue
    private Long id;
    private Integer empno;
    private String ename;
    private Float sal;

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmpno(Integer empno) {
        this.empno = empno;
    }

    public void setEname(String ename) {
        this.ename = ename;
    }

    public void setSal(Float sal) {
        this.sal = sal;
    }

    public Long getId() {
        return id;
    }

    public Integer getEmpno() {
        return empno;
    }

    public String getEname() {
        return ename;
    }

    public Float getSal() {
        return sal;
    }
}
