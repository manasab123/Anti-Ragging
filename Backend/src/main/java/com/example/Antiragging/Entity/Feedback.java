package com.example.Antiragging.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Feedback
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer feedbackid;
    private String feedback;

    public Feedback()
    {
    }

    public Feedback(Integer feedbackid, String feedback, Student student) {
        this.feedbackid = feedbackid;
        this.feedback = feedback;
        this.student = student;
    }

    public Integer getFeedbackid() {
        return feedbackid;
    }

    public void setFeedbackid(Integer feedbackid) {
        this.feedbackid = feedbackid;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    @OneToOne
    @JoinColumn(name="studentid")
    private Student student;
}
