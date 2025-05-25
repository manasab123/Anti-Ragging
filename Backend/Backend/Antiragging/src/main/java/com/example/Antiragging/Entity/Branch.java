package com.example.Antiragging.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Branch
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int branchid;
    private String branchname;

    public Branch()
    {
    }

    public Branch(int branchid, String branchname, College college1, Course course, List<Student> student) {
        this.branchid = branchid;
        this.branchname = branchname;
        this.college1 = college1;
        this.course = course;
        this.student = student;
    }

    public int getBranchid() {
        return branchid;
    }

    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }

    public String getBranchname() {
        return branchname;
    }

    public void setBranchname(String branchname) {
        this.branchname = branchname;
    }

    public College getCollege1() {
        return college1;
    }

    public void setCollege1(College college1) {
        this.college1 = college1;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    @ManyToOne
    @JoinColumn(name="collegeid")
    private College college1;

    @ManyToOne
    @JoinColumn(name="courseid")
    private Course course;

    @OneToMany(mappedBy = "branch3")
    @JsonIgnore
    private List<Student> student;

}
