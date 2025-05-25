package com.example.Antiragging.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Random;

@Entity
@Getter
@Setter

public class Student
{
    @Id
    private int studentid;
    private String studentname;
    private int semester;
    private String gender;
    private String password;
    private String mobileno;
    private String status;
    private String emailid;


    public Student()
    {
        generatestudentid();
    }

    public void generatestudentid() {
        Random random = new Random();
        int randomValue = (random.nextInt(9000) + 1000); // Generate a random number between 1000 and 9999
        this.studentid = randomValue;
    }

    public Student(int studentid, String studentname, int semester, String gender, String password, String mobileno, String status, String emailid, College college2, Course course3, Branch branch3, List<Complaints> complaints, Feedback feedback) {
        this.studentid = studentid;
        this.studentname = studentname;
        this.semester = semester;
        this.gender = gender;
        this.password = password;
        this.mobileno = mobileno;
        this.status = status;
        this.emailid = emailid;
        this.college2 = college2;
        this.course3 = course3;
        this.branch3 = branch3;
        this.complaints = complaints;
        this.feedback = feedback;
    }

    public int getStudentid() {
        return studentid;
    }

    public void setStudentid(int studentid) {
        this.studentid = studentid;
    }

    public String getStudentname() {
        return studentname;
    }

    public void setStudentname(String studentname) {
        this.studentname = studentname;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileno() {
        return mobileno;
    }

    public void setMobileno(String mobileno) {
        this.mobileno = mobileno;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public College getCollege2() {
        return college2;
    }

    public void setCollege2(College college2) {
        this.college2 = college2;
    }

    public Course getCourse3() {
        return course3;
    }

    public void setCourse3(Course course3) {
        this.course3 = course3;
    }

    public Branch getBranch3() {
        return branch3;
    }

    public void setBranch3(Branch branch3) {
        this.branch3 = branch3;
    }

    public List<Complaints> getComplaints() {
        return complaints;
    }

    public void setComplaints(List<Complaints> complaints) {
        this.complaints = complaints;
    }

    public Feedback getFeedback() {
        return feedback;
    }

    public void setFeedback(Feedback feedback) {
        this.feedback = feedback;
    }

    @ManyToOne
    @JoinColumn(name="collegeid")
    private College college2;

    @ManyToOne
    @JoinColumn(name="courseid")
    private Course course3;

    @ManyToOne
    @JoinColumn(name="branchid")
    private Branch branch3;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Complaints> complaints;

    @OneToOne(mappedBy = "student")
    @JsonIgnore
    private Feedback feedback;
}
