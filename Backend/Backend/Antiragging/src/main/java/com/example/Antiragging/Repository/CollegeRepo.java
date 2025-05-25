package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.College;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollegeRepo extends JpaRepository<College,Integer>
{
    boolean existsByCollegename(String collegename);


}
