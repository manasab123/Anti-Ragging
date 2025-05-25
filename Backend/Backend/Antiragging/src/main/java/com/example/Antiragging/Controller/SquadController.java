package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Principal;
import com.example.Antiragging.Entity.Squads;
import com.example.Antiragging.Repository.SquadsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class SquadController
{
    @Autowired
    SquadsRepo squadsRepo;

    /* post Squads Details */
    @PostMapping("/Addsquadsdetails")
    public ResponseEntity<?> Addsquadsdetails(@RequestBody Squads obj)
    {
        squadsRepo.save(obj);
        return new ResponseEntity<>("Squads details added Successfully", HttpStatus.OK);
    }


    /* Get All Squads Details */
    @GetMapping("/Getallsquadsdetails")
    public ResponseEntity<?> Getallsquadsdetails()
    {
        List<Squads> squadsList=squadsRepo.findAll();
        return new ResponseEntity<>(squadsList,HttpStatus.OK);
    }

    //Login for Squad
    @GetMapping("/squadlogin/{emailid}/{password}")
    public ResponseEntity<?> squadlogin(@PathVariable String emailid, @PathVariable String password) {
        // Find the Squad by email ID
        Optional<Squads> squadOptional = squadsRepo.findByEmailid(emailid);

        if (squadOptional.isEmpty()) {
            // Return a message if the email ID is incorrect
            return new ResponseEntity<>("Squad ID is incorrect", HttpStatus.NOT_FOUND);
        }

        Squads squadinfo = squadOptional.get();

        // Check if the password matches
        if (!squadinfo.getPassword().equals(password)) {
            return new ResponseEntity<>("Squad Password is incorrect", HttpStatus.UNAUTHORIZED);
        }

        // Return Squad info if login is successful
        return new ResponseEntity<>(squadinfo, HttpStatus.OK);
    }




    /* Put or Update Profile */
    @PutMapping("/editprofsquad/{squadid}")
    public ResponseEntity<?> editprofsquad(@PathVariable Integer squadid, @RequestBody Squads obj) {
        try {
            var squadinfo = squadsRepo.findById(squadid).orElseThrow(() -> new RuntimeException("Squad id not found"));
            squadinfo.setSquadname(obj.getSquadname());
            squadinfo.setMobileno(obj.getMobileno());
            squadinfo.setQualification(obj.getQualification());
            squadsRepo.save(squadinfo);
            return new ResponseEntity<>("Squad details Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Squad ID is incorrect",HttpStatus.NOT_FOUND);
        }
    }

    /* Put or Update Password */
    @PutMapping("/editpswdsquad/{principalid}")
    public ResponseEntity<?> editpswdsquad(@PathVariable Integer principalid, @RequestBody Squads obj) {
        try {
            var squadinfo = squadsRepo.findById(principalid).orElseThrow(() -> new RuntimeException("Squad id not found"));
            squadinfo.setPassword(obj.getPassword());
            squadsRepo.save(squadinfo);
            return new ResponseEntity<>("Squad password Updated Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Squad ID is incorrect",HttpStatus.NOT_FOUND);
        }
    }

    /* for updating SquadProfile we want details of squad - UpdateSquadProfile */
    @GetMapping("/getsquadprof/{squadid}")
    public ResponseEntity<?> getsquadprof(@PathVariable Integer squadid)
    {
        var squadinfo=squadsRepo.findById(squadid).orElseThrow(()->new RuntimeException("Squadid not found"));
        squadinfo.getMobileno();
        squadinfo.getQualification();
        squadinfo.getSquadname();
        return new ResponseEntity<>(squadinfo,HttpStatus.OK);
    }

    /* For updating SquadPassword we want password - UpdateSquadPaswd */
    @GetMapping("/getsquadpswd/{squadid}")
    public ResponseEntity<?> getsquadpswd(@PathVariable Integer squadid)
    {
        var squadinfo = squadsRepo.findById(squadid).orElseThrow(() -> new RuntimeException("Squadid not found"));
        squadinfo.getPassword();
        return new ResponseEntity<>(squadinfo,HttpStatus.OK);
    }
}
