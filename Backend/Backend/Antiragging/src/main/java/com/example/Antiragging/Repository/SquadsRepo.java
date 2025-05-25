package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Squads;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SquadsRepo extends JpaRepository<Squads,Integer>
{
    Optional<Squads> findByEmailid(String emailid);
}
