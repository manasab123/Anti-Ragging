package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Admin;
import com.example.Antiragging.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")

public class AdminController {
    @Autowired
    AdminRepo adminRepo;

    //Login for Admin
    @GetMapping("/adminlogin/{emailid}/{password}")
    public ResponseEntity<?> adminlogin(@PathVariable String emailid, @PathVariable String password) {
        // Find the user by email ID
        Optional<Admin> adminOptional = adminRepo.findByEmailid(emailid);

        if (adminOptional.isEmpty()) {
            // Return a message if the email ID is not found
            return new ResponseEntity<>("Admin ID is incorrect", HttpStatus.NOT_FOUND);
        }

        Admin admininfo = adminOptional.get();

        // Check if the password matches
        if (!admininfo.getPassword().equals(password)) {
            return new ResponseEntity<>("Admin Password is incorrect", HttpStatus.UNAUTHORIZED);
        }

        // Return Admin info if login is successful
        return new ResponseEntity<>(admininfo, HttpStatus.OK);
    }

}

