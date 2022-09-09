package com.example.AnimeApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class AnimeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnimeAppApplication.class, args);
	}

}
