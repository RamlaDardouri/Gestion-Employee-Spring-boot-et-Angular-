package com.example.employe.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employe.exception.RessourceNotFoundException;
import com.example.employe.model.Employee;
import com.example.employe.repo.EmpoyeRepo;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class EmpoyeeController {
	
	@Autowired
	private EmpoyeRepo employeeRepo;
	
	//get all employee
	
	@GetMapping("/list_employees")
	public List<Employee>getAllEmployees()
	{
		return employeeRepo.findAll();
	}

	
	//create employee 
	@PostMapping("/create_employee")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepo.save(employee);
		
	}
	
	//get employee by id
	@GetMapping("/find_by_id/{id}")
	public ResponseEntity<Employee>	getById(@PathVariable Long id)
	{
		Employee employee = employeeRepo.findById(id).orElseThrow(()-> new RessourceNotFoundException("Employee not exist with id : "+ id));
		return ResponseEntity.ok(employee);
		
	}
	
	
	//update employee 
	
	@PutMapping("/update_employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id , @RequestBody Employee employeeUp){
		Employee employee = employeeRepo.findById(id).orElseThrow(()-> new RessourceNotFoundException("Employee not exist with id : "+ id));
		employee.setFirstName(employeeUp.getFirstName());	
		employee.setLastName(employeeUp.getLastName());
		employee.setEmailId(employeeUp.getEmailId());
	Employee update=employeeRepo.save(employee);
	return ResponseEntity.ok(update);
	}
	
	
	//delete employee
	@DeleteMapping("/delete_employee/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepo.findById(id).orElseThrow(()-> new RessourceNotFoundException("Employee not exist with id : "+ id));
		
		employeeRepo.delete(employee);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
