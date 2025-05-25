package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Branch;
import com.example.Antiragging.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BranchRepo extends JpaRepository<Branch,Integer>
{
    boolean existsByBranchname(String branchname);

    List<Branch> findByCourse(Course courseinfo);
}
