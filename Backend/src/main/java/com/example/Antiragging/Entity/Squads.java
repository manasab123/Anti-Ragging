package com.example.Antiragging.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.security.SecureRandom;
import java.util.List;

@Entity
@Getter
@Setter
public class Squads
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int squadid;
    private String squadname;
    private String mobileno;
    private String password;
    private String qualification;
    private String emailid;

    public Squads()
    {
        generatesquadspaswd();
    }

    public void generatesquadspaswd() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder passwordBuilder = new StringBuilder(8);

        for (int i = 0; i < 8; i++) { // Generate an 8-character password
            int index = random.nextInt(chars.length());
            passwordBuilder.append(chars.charAt(index));
        }
        this.password = passwordBuilder.toString();
    }

    public Squads(int squadid, String squadname, String mobileno, String password, String qualification, String emailid, List<Complaints> complaintss) {
        this.squadid = squadid;
        this.squadname = squadname;
        this.mobileno = mobileno;
        this.password = password;
        this.qualification = qualification;
        this.emailid = emailid;
        this.complaintss = complaintss;
    }

    public int getSquadid() {
        return squadid;
    }

    public void setSquadid(int squadid) {
        this.squadid = squadid;
    }

    public String getSquadname() {
        return squadname;
    }

    public void setSquadname(String squadname) {
        this.squadname = squadname;
    }

    public String getMobileno() {
        return mobileno;
    }

    public void setMobileno(String mobileno) {
        this.mobileno = mobileno;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public List<Complaints> getComplaintss() {
        return complaintss;
    }

    public void setComplaintss(List<Complaints> complaintss) {
        this.complaintss = complaintss;
    }

    @OneToMany(mappedBy = "squadss")
    @JsonIgnore
    private List<Complaints> complaintss;

}
