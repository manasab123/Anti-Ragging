package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.*;
import com.example.Antiragging.Repository.BranchRepo;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.CourseRepo;
import com.example.Antiragging.Repository.StudentRepo;
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
public class StudentController {
    @Autowired
    StudentRepo studentRepo;

    @Autowired
    CollegeRepo collegeRepo;

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    BranchRepo branchRepo;

    /* post Student Details */
    @PostMapping("/Addstudentdetails/{collegeid}/{courseid}/{branchid}")
    public ResponseEntity<?> Addstudentdetails(@PathVariable Integer collegeid, @PathVariable Integer courseid, @PathVariable Integer branchid, @RequestBody Student obj) {
        College collinfo = collegeRepo.findById(collegeid).orElseThrow(() -> new RuntimeException("College id not found"));
        Course courseinfo = courseRepo.findById(courseid).orElseThrow(() -> new RuntimeException("Course id not found"));
        Branch branchinfo = branchRepo.findById(branchid).orElseThrow(() -> new RuntimeException("Branch id not found"));
        obj.setCollege2(collinfo);
        obj.setCourse3(courseinfo);
        obj.setBranch3(branchinfo);
        obj.setStatus("Active");
        studentRepo.save(obj);
        return new ResponseEntity<>("Student details added Successfully", HttpStatus.OK);
    }

    /* Get All Student Details */
    @GetMapping("/Getallstudentdetails")
    public ResponseEntity<?> Getallstudentdetails()
    {
        List<Student> studentList = studentRepo.findAll();
        return new ResponseEntity<>(studentList, HttpStatus.OK);
    }

    //Login for Student
    @GetMapping("/studentlogin/{emailid}/{password}")
    public ResponseEntity<?> studentlogin(@PathVariable String emailid, @PathVariable String password) {
        // Find the student by email ID
        Optional<Student> studentOptional = studentRepo.findByEmailid(emailid);

        if (studentOptional.isEmpty()) {
            // Return a message if the email ID is incorrect
            return new ResponseEntity<>("Student ID is incorrect", HttpStatus.NOT_FOUND);
        }

        Student studentinfo = studentOptional.get();

        // Check if the student is blocked
        if ("Blocked".equalsIgnoreCase(studentinfo.getStatus())) {
            return new ResponseEntity<>("The student is blocked", HttpStatus.FORBIDDEN);
        }

        // Check if the password matches
        if (!studentinfo.getPassword().equals(password)) {
            return new ResponseEntity<>("Student Password is incorrect", HttpStatus.UNAUTHORIZED);
        }

        // Return Student info if login is successful
        return new ResponseEntity<>(studentinfo, HttpStatus.OK);
    }


    /* Get Student Details  based on college id in Front End Principal dashboard*/
    @GetMapping("/Getstudentdetails/{collegeid}")
    public ResponseEntity<?> Getallstudentdetails(@PathVariable Integer collegeid) {
        try {
            var colinfo = collegeRepo.findById(collegeid).orElseThrow(() -> new RuntimeException("College id not Found"));
            List<Student> stulist = studentRepo.findByCollege2(colinfo);
            return new ResponseEntity<>(stulist, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("College not found", HttpStatus.NOT_FOUND);
        }
    }

    /* Put or Update Profile */
    @PutMapping("/editprofstudent/{studentid}")
    public ResponseEntity<?> editprofstudent(@PathVariable Integer studentid, @RequestBody Student obj) {
        try {
            var studinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Student id not found"));
            studinfo.setStudentname(obj.getStudentname());
            studinfo.setMobileno(obj.getMobileno());
            studinfo.setSemester(obj.getSemester());
            studentRepo.save(studinfo);
            return new ResponseEntity<>("Student details Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Student ID is incorrect", HttpStatus.NOT_FOUND);
        }
    }

    /* Put or Update Password */
    @PutMapping("/editpswdstudent/{studentid}")
    public ResponseEntity<?> editpswdstudent(@PathVariable Integer studentid, @RequestBody Student obj) {
        try {
            var studinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Student id not found"));
            studinfo.setPassword(obj.getPassword());
            studentRepo.save(studinfo);
            return new ResponseEntity<>("Student password Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Student ID is incorrect", HttpStatus.NOT_FOUND);
        }
    }


    /* Get All Student Details  to Manage in Front end (Principal Dashboard) */
    @GetMapping("/Getallstudents/{collegeid}")
    public ResponseEntity<?> Getallstudents(@PathVariable Integer collegeid) {
        try {
            var colinfo = collegeRepo.findById(collegeid).orElseThrow(() -> new RuntimeException("College id not Found"));
            List<Student> stulist = studentRepo.findByCollege2(colinfo);
            return new ResponseEntity<>(stulist, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("College not found", HttpStatus.NOT_FOUND);
        }
    }

    /* Block the Student in Front end (Principal Dashboard) */
    @PutMapping("/blockStudent/{studentid}")
    public ResponseEntity<?> blockStudent(@PathVariable Integer studentid) {
        var stuinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Studentid not found"));
        if ("Blocked".equals(stuinfo.getStatus())) {
            return new ResponseEntity<>("Student already Blocked", HttpStatus.BAD_REQUEST);
        } else {
            stuinfo.setStatus("Blocked");
            studentRepo.save(stuinfo);
            return new ResponseEntity<>(stuinfo, HttpStatus.OK);
        }
    }

    /* For updating student Profile  we want student profiledetails - Updatestudprofile */
    @GetMapping("/getstudprof/{studentid}")
    public ResponseEntity<?> getstudprof(@PathVariable Integer studentid)
    {
        var stuinfo=studentRepo.findById(studentid).orElseThrow(()->new RuntimeException("Studentid not found"));
        stuinfo.getStudentname();
        stuinfo.getSemester();
        stuinfo.getMobileno();
        return new ResponseEntity<>(stuinfo,HttpStatus.OK);
    }

    /* For updating student password we want student paswd details - Updatestudpaswd */
    @GetMapping("/getstudpaswd/{studentid}")
    public ResponseEntity<?> getstudpaswd(@PathVariable Integer studentid)
    {
        var stuinfo=studentRepo.findById(studentid).orElseThrow(()->new RuntimeException("Studentid not found"));
        stuinfo.getPassword();
        return new ResponseEntity<>(stuinfo,HttpStatus.OK);
    }
}

