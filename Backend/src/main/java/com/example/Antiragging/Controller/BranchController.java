package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Branch;
import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Course;
import com.example.Antiragging.Repository.BranchRepo;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BranchController
{
    @Autowired
    BranchRepo branchRepo;

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CollegeRepo collegeRepo;


    /* post Branch Details */
    @PostMapping("/Addbranchdetails/{collegeid}/{courseid}")
    public ResponseEntity<?> Addbranchdetails(@PathVariable Integer collegeid,@PathVariable Integer courseid,@RequestBody Branch obj)
    {
        College colinfo=collegeRepo.findById(collegeid).orElseThrow(()->new RuntimeException("College id not found"));
        Course corinfo=courseRepo.findById(courseid).orElseThrow(()->new RuntimeException("Course id not found"));
        obj.setCollege1(colinfo);
        obj.setCourse(corinfo);
        if(branchRepo.existsByBranchname(obj.getBranchname()))
        {
            return new ResponseEntity<>("Branchname already exists",HttpStatus.CONFLICT);
        }
        branchRepo.save(obj);
        return new ResponseEntity<>("Branch details added Successfully", HttpStatus.OK);
    }

    /* Get All Branch Details */
    @GetMapping("/Getallbranchdetails")
    public ResponseEntity<?> Getallbranchdetails()
    {
        List<Branch> branchList=branchRepo.findAll();
        return new ResponseEntity<>(branchList,HttpStatus.OK);
    }

    /* Get Branch based on Course */
    @GetMapping("/getbranchoncourse/{courseid}")
    public ResponseEntity<?> getbranchoncourse(@PathVariable Integer courseid)
    {
        Course courseinfo=courseRepo.findById(courseid).orElseThrow(()->new RuntimeException("Courseid not found"));
        List<Branch>branches=branchRepo.findByCourse(courseinfo);
        if (branches.isEmpty()) {
            return new ResponseEntity<>("No branches found for the given course", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(branches,HttpStatus.OK);
    }

    /* Update Branches Details */
    @PutMapping("/updatebranch/{branchid}")
    public ResponseEntity<?> updatebranch(@PathVariable Integer branchid, @RequestBody Branch obj) {
        var branchinfo = branchRepo.findById(branchid).orElseThrow(() -> new RuntimeException("Branch ID not found"));

        branchinfo.setBranchname(obj.getBranchname());

        if (obj.getCollege1() != null) {  // Ensure college is not null before updating
            var college = collegeRepo.findById(obj.getCollege1().getCollegeid())
                    .orElseThrow(() -> new RuntimeException("College ID not found"));
            branchinfo.setCollege1(college);
        }

        if (obj.getCourse() != null) {  // Ensure course is not null before updating
            var course = courseRepo.findById(obj.getCourse().getCourseid())
                    .orElseThrow(() -> new RuntimeException("Course ID not found"));
            branchinfo.setCourse(course);
        }

        branchRepo.save(branchinfo);
        return new ResponseEntity<>("Branch Details Updated Successfully", HttpStatus.OK);
    }



    /* Display Particular BRanch details for Assigning */
    @GetMapping("/getbranch/{branchid}")
    public ResponseEntity<?> getbranch(@PathVariable Integer branchid)
    {
        var branchinfo=branchRepo.findById(branchid).orElseThrow(()->new RuntimeException("Branchid not found"));
        branchinfo.getBranchname();
        branchinfo.getCourse();
        branchinfo.getCollege1();
        return new ResponseEntity<>(branchinfo,HttpStatus.OK);
    }
}
