package com.example.Antiragging.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Course
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseid;
    private String coursename;

    public Course()
    {
    }

    public Course(int courseid, String coursename, College college, List<Branch> branch, List<Student> student) {
        this.courseid = courseid;
        this.coursename = coursename;
        this.college = college;
        this.branch = branch;
        this.student = student;
    }

    public int getCourseid() {
        return courseid;
    }

    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public College getCollege() {
        return college;
    }

    public void setCollege(College college) {
        this.college = college;
    }

    public List<Branch> getBranch() {
        return branch;
    }

    public void setBranch(List<Branch> branch) {
        this.branch = branch;
    }

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    @ManyToOne
    @JoinColumn(name="collegeid")
    private College college;

    @OneToMany(mappedBy = "course")
    @JsonIgnore
    private List<Branch> branch;

    @OneToMany(mappedBy = "course3")
    @JsonIgnore
    private List<Student> student;
}
