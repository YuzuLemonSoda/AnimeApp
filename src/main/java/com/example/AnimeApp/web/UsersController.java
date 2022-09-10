package com.example.AnimeApp.web;

import com.example.AnimeApp.model.user.User;
import com.example.AnimeApp.model.user.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UserRepository userRepository;

    public UsersController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    private List<User> getAll() {return userRepository.findAll();}

    @PostMapping("/create")
    public User create(@RequestBody User myUser) {
        return userRepository.save(myUser);
    }

    @PutMapping("{id}")
    private void update(@RequestBody User myUser, @PathVariable Long id) {
        userRepository.save(myUser);
    }

    @DeleteMapping("{id}")
    private void delete(@PathVariable Long id) {userRepository.deleteById(id);}


}
