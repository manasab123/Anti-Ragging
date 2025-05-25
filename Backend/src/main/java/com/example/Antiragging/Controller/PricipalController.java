package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Principal;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.PrincipalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")

public class PricipalController {
    @Autowired
    PrincipalRepo principalRepo;

    @Autowired
    CollegeRepo collegeRepo;

    /* post Principal Details */
    @PostMapping("/Addpricipaldetails/{collegeid}")
    public ResponseEntity<?> Addpricipaldetails(@PathVariable Integer collegeid, @RequestBody Principal obj) {
        College collegeinfo = collegeRepo.findById(collegeid).orElseThrow(() -> new RuntimeException("Collegeid not found"));
        obj.setCollege1(collegeinfo);
        principalRepo.save(obj);
        return new ResponseEntity<>("Principal details added Successfully", HttpStatus.OK);
    }

    /* Get All Pricipal Details */
    @GetMapping("/Getallprincipaldetails")
    public ResponseEntity<?> Getallprincipaldetails() {
        List<Principal> principalList = principalRepo.findAll();
        return new ResponseEntity<>(principalList, HttpStatus.OK);
    }

    //Login for Principal
    @GetMapping("/principallogin/{emailid}/{password}")
    public ResponseEntity<?> principallogin(@PathVariable String emailid, @PathVariable String password) {
        // Find the Principal by email ID
        Optional<Principal> principalOptional = principalRepo.findByEmailid(emailid);

        if (principalOptional.isEmpty()) {
            // Return a message if the email ID is incorrect
            return new ResponseEntity<>("Principal ID is incorrect", HttpStatus.NOT_FOUND);
        }

        Principal priciinfo = principalOptional.get();

        // Check if the password matches
        if (!priciinfo.getPassword().equals(password)) {
            return new ResponseEntity<>("Principal Password is incorrect", HttpStatus.UNAUTHORIZED);
        }

        // Return Principal info if login is successful
        return new ResponseEntity<>(priciinfo, HttpStatus.OK);
    }


    /* Put or Update Profile */
    @PutMapping("/editprofile/{principalid}")
    public ResponseEntity<?> editprofile(@PathVariable Integer principalid, @RequestBody Principal obj) {
        try {
            var prininfo = principalRepo.findById(principalid).orElseThrow(() -> new RuntimeException("Principal id not found"));
            prininfo.setPrincipalname(obj.getPrincipalname());
            prininfo.setMobileno(obj.getMobileno());
            prininfo.setQualification(obj.getQualification());
            principalRepo.save(prininfo);
            return new ResponseEntity<>("Principal details Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
                return new ResponseEntity<>("Principal ID is incorrect",HttpStatus.NOT_FOUND);
        }
    }

    /* Put or Update Password */
    @PutMapping("/editpassword/{principalid}")
    public ResponseEntity<?> editpassword(@PathVariable Integer principalid, @RequestBody Principal obj) {
        try {
            var prininfo = principalRepo.findById(principalid).orElseThrow(() -> new RuntimeException("Principal id not found"));
            prininfo.setPassword(obj.getPassword());
            principalRepo.save(prininfo);
            return new ResponseEntity<>("Principal password Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Principal ID is incorrect",HttpStatus.NOT_FOUND);
        }
    }

    /* For updating pricnicipal pswd we want pswd - UpdatePrinpswd */
    @GetMapping("/getprincipswd/{principalid}")
    public ResponseEntity<?> getprincipswd(@PathVariable Integer principalid)
    {
        var prinfo=principalRepo.findById(principalid).orElseThrow(()->new RuntimeException("Principal id not found"));
        prinfo.getPassword();
        return new ResponseEntity<>(prinfo,HttpStatus.OK);
    }

    /* Fr updating principal profile we want profile details - UpdatePrinProfile */
    @GetMapping("/getPrinciprofile/{principalid}")
    public ResponseEntity<?> getPrinciprofile(@PathVariable Integer principalid)
    {
        var prinfo=principalRepo.findById(principalid).orElseThrow(()->new RuntimeException("Principal id not found"));
        prinfo.getMobileno();
        prinfo.getPrincipalname();
        prinfo.getQualification();
        return new ResponseEntity<>(prinfo,HttpStatus.OK);
    }
}

