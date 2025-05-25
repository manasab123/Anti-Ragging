package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student,Integer>
{
    List<Student> findByCollege2(College colinfo);

    Optional<Student> findByEmailid(String emailid);


}
