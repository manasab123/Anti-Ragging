package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Principal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PrincipalRepo extends JpaRepository<Principal,Integer>
{
    Optional<Principal> findByEmailid(String emailid);
}
