package com.example.Antiragging.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class College
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int collegeid;
    private String collegename;
    private String address;
    private String emailid;

    public College()
    {
    }

    public College(int collegeid, String collegename, String address, String emailid, List<Course> courses, List<Branch> branches, Principal principal, List<Student> student) {
        this.collegeid = collegeid;
        this.collegename = collegename;
        this.address = address;
        this.emailid = emailid;
        this.courses = courses;
        this.branches = branches;
        this.principal = principal;
        this.student = student;
    }

    public int getCollegeid() {
        return collegeid;
    }

    public void setCollegeid(int collegeid) {
        this.collegeid = collegeid;
    }

    public String getCollegename() {
        return collegename;
    }

    public void setCollegename(String collegename) {
        this.collegename = collegename;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public List<Branch> getBranches() {
        return branches;
    }

    public void setBranches(List<Branch> branches) {
        this.branches = branches;
    }

    public Principal getPrincipal() {
        return principal;
    }

    public void setPrincipal(Principal principal) {
        this.principal = principal;
    }

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    @OneToMany(mappedBy = "college")
    @JsonIgnore
    private List<Course> courses;

    @OneToMany(mappedBy = "college1")
    @JsonIgnore
    private List<Branch> branches;

    @OneToOne(mappedBy = "college1")
    @JsonIgnore
    private Principal principal;

    @OneToMany(mappedBy = "college2")
    @JsonIgnore
    private List<Student> student;

}
