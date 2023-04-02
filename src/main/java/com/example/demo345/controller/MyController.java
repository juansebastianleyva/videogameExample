package com.example.demo345.controller;


import com.example.demo345.entity.Game;
import com.example.demo345.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
public class MyController {

    @Autowired
    private GameService gameService;

    @GetMapping("/saludar")
    public String hola(){
        return "<h1>Hola mundo</h1>";
    }

    @GetMapping("/all")
    public List<Game> getAll(){
        return gameService.getAll();
    }

    @PostMapping("/save")
    public Game save(@RequestBody Game g){
        return gameService.save(g);
    }
}
