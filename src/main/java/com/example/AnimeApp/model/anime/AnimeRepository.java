package com.example.AnimeApp.model.anime;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface AnimeRepository extends MongoRepository<Anime, String> {
    List<Anime> findAll();
    Optional<Anime> deleteById(Long id);
}
