package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepo extends JpaRepository<News,Integer>
{
}
