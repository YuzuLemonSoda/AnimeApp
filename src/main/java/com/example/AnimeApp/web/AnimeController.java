package com.example.AnimeApp.web;

import com.example.AnimeApp.model.anime.Anime;
import com.example.AnimeApp.model.anime.AnimeRepository;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping(value = "/api/anime", headers = "Accept=application/json")
public class AnimeController {

    private final AnimeRepository animeRepository;

    public AnimeController(AnimeRepository animeRepository) {
        this.animeRepository = animeRepository;
    }

    @GetMapping
    private List<Anime> getAll() {return animeRepository.findAll();}

    @PostMapping("/create")
    public Anime create(@RequestBody Anime myAnime) {
        return animeRepository.save(myAnime);
    }

    @PutMapping("{id}")
    private void update(@RequestBody Anime myAnime, @PathVariable Long id) {
        animeRepository.save(myAnime);
    }

    @DeleteMapping("{id}")
    private void delete(@PathVariable Long id) {animeRepository.deleteById(id);}
}
