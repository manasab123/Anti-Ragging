package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Feedback;
import com.example.Antiragging.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer>
{
    List<Feedback> findByStudent_College2_Collegeid(Integer collegeid);   //Getting feedback of that particular college in front end (Principal Dashboard)

    boolean existsByStudent(Student studinfo);    //to check for already given feedback or not
}
