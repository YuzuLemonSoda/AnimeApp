package com.example.AnimeApp.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class User {

    @Id
    private Long id;

    private String userName;

    private String email;

    private String password;

}
