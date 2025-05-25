package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Complaints;
import com.example.Antiragging.Entity.Feedback;
import com.example.Antiragging.Entity.Student;
import com.example.Antiragging.Repository.FeedbackRepo;
import com.example.Antiragging.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class FeedbackController
{
    @Autowired
    FeedbackRepo feedbackRepo;

    @Autowired
    StudentRepo studentRepo;

    /* post Feedback Details */
    @PostMapping("/Addfeedback/{studentid}")
    public ResponseEntity<?> Addfeedback(@PathVariable Integer studentid,@RequestBody Feedback obj) {
        try {
            Student studinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Student id not found"));
            if (feedbackRepo.existsByStudent(studinfo)) {
                return new ResponseEntity<>("Student Already gave Feedback", HttpStatus.CONFLICT);
            }
            obj.setStudent(studinfo);
            feedbackRepo.save(obj);
            return new ResponseEntity<>("Student gave feedback Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    /* Get Feedback Details in front End (Principal Dashboard) */
    @GetMapping("/Getfeedback/{collegeid}")
    public ResponseEntity<?> Getfeedback(@PathVariable Integer collegeid)
    {
        List<Feedback> feedbackList=feedbackRepo.findByStudent_College2_Collegeid(collegeid);
        if (feedbackList.isEmpty()) {
            return new ResponseEntity<>("No Feedback found for the given College", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(feedbackList,HttpStatus.OK);
    }
}
