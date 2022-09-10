package com.example.AnimeApp.model.anime;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Anime {

    @Id
    private Long id;

    private String[] altTitles;

    private String[] genres;

    private String thumbnail;

    private String myAnimeListLink;

    private String title;

    private String episodes;

    private String status;

    private String synopsis;

    private String ranking;

    private String mediaType;

    private Boolean hasRanking;

}
