package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CourseRepo extends JpaRepository<Course,Integer>
{
    boolean existsByCoursename(String coursename);

    Optional<Course> findByCollegeAndCoursename(College collinfo, String coursename);

    List<Course> findByCollege(College collegeinfo);
}
