package com.example.Antiragging.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class News
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer newsid;
    private String news;

    public News()
    {
    }

    public News(Integer newsid, String news) {
        this.newsid = newsid;
        this.news = news;
    }

    public Integer getNewsid() {
        return newsid;
    }

    public void setNewsid(Integer newsid) {
        this.newsid = newsid;
    }

    public String getNews() {
        return news;
    }

    public void setNews(String news) {
        this.news = news;
    }
}
