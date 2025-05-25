package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Complaints;
import com.example.Antiragging.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComplaintsRepo extends JpaRepository<Complaints,Integer>
{
    List<Complaints> findByStudent(Student studinfo);

    List<Complaints> findByStudent_College2_Collegeid(Integer collegeid);  //Tod display complaints based on collegeid in frontend (Prinicpal Dashboard)

    List<Complaints> findByStatus(String pending);    //View Complaints only pending status in front end (SQuad DAshborad)
}
