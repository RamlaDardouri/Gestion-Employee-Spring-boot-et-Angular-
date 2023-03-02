package com.example.employe.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employe.model.Employee;

@Repository
public interface EmpoyeRepo extends JpaRepository<Employee,Long> {

}
