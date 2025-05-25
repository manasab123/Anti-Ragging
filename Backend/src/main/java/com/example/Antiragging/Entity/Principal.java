package com.example.Antiragging.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.security.SecureRandom;
import java.util.Random;

@Entity
@Getter
@Setter
public class Principal
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int principalid;
    private String principalname;
    private String qualification;
    private String mobileno;
    private String password;
    private String emailid;

    public Principal()
    {
        generateprincipalpaswd();
    }

    public void generateprincipalpaswd() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder passwordBuilder = new StringBuilder(8);

        for (int i = 0; i < 8; i++) { // Generate an 8-character password
            int index = random.nextInt(chars.length());
            passwordBuilder.append(chars.charAt(index));
        }
        this.password = passwordBuilder.toString();
    }

    public Principal(int principalid, String principalname, String qualification, String mobileno, String password, String emailid, College college1) {
        this.principalid = principalid;
        this.principalname = principalname;
        this.qualification = qualification;
        this.mobileno = mobileno;
        this.password = password;
        this.emailid = emailid;
        this.college1 = college1;
    }

    public int getPrincipalid() {
        return principalid;
    }

    public void setPrincipalid(int principalid) {
        this.principalid = principalid;
    }

    public String getPrincipalname() {
        return principalname;
    }

    public void setPrincipalname(String principalname) {
        this.principalname = principalname;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
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

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public College getCollege1() {
        return college1;
    }

    public void setCollege1(College college1) {
        this.college1 = college1;
    }

    @OneToOne
    @JoinColumn(name="collegeid")
    private College college1;

}
