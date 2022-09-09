package com.example.AnimeApp.model;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findAll();
    Optional<User> deleteById(Long id);
}
