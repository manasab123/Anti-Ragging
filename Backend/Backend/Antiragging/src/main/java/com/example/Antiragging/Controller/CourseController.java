package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Course;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.CourseRepo;
import com.example.Antiragging.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class CourseController
{
    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CollegeRepo collegeRepo;

    @Autowired
    StudentRepo studentRepo;

    /* post Course Details */
    @PostMapping("/AddCoursedetails/{collegeid}")
    public ResponseEntity<?> AddCoursedetails(@PathVariable Integer collegeid,@RequestBody Course obj)
    {
        College collinfo=collegeRepo.findById(collegeid).orElseThrow(()->new RuntimeException("College id not found"));

        // Check if the same course already exists for the same college
        Optional<Course> existingCourse = courseRepo.findByCollegeAndCoursename(collinfo, obj.getCoursename());

        if (existingCourse.isPresent()) {
            // If the course already exists for this college, return a conflict message
            return new ResponseEntity<>("This course already exists for the given college", HttpStatus.CONFLICT);
        }
        obj.setCollege(collinfo);
        courseRepo.save(obj);
        return new ResponseEntity<>("Course details added Successfully", HttpStatus.OK);
    }

    /* Get All Course Details */
    @GetMapping("/Getallcoursedetails")
    public ResponseEntity<?> Getallcoursedetails()
    {
        List<Course> courseList=courseRepo.findAll();
        return new ResponseEntity<>(courseList,HttpStatus.OK);
    }

    /* Get Course of Particular College */
    @GetMapping("/Getcourseofcollege/{collegeid}")
    public ResponseEntity<?> Getcourseofcollege(@PathVariable Integer collegeid)
    {
        College collegeinfo =collegeRepo.findById(collegeid).orElseThrow(()->new RuntimeException("College id not found"));
        List<Course> courses=courseRepo.findByCollege(collegeinfo);
        if (courses.isEmpty()) {
            return new ResponseEntity<>("No courses found for the given college", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(courses,HttpStatus.OK);
    }

    /* Update Particular Course details */
    @PutMapping("/updatecourse/{courseid}")
    public ResponseEntity<?> updatecourse(@PathVariable Integer courseid,@RequestBody Course obj)
    {
        var courseinfo=courseRepo.findById(courseid).orElseThrow(()->new RuntimeException("Courseid not found"));
        courseinfo.setCoursename(obj.getCoursename());
        courseinfo.setCollege(obj.getCollege());
        courseRepo.save(courseinfo);
        return new ResponseEntity<>("Course Details Updated Successfully",HttpStatus.OK);
    }

    /* Display Particular Course */
    @GetMapping("/getcourse/{courseid}")
    public ResponseEntity<?> getcourse(@PathVariable Integer courseid)
    {
        var courseinfo=courseRepo.findById(courseid).orElseThrow(()->new RuntimeException("Collegeid not found"));
        courseinfo.getCollege();
        courseinfo.getCoursename();
        return new ResponseEntity<>(courseinfo,HttpStatus.OK);
    }

}
