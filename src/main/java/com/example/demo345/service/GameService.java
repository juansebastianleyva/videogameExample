package com.example.demo345.service;

import com.example.demo345.entity.Game;
import com.example.demo345.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public List<Game> getAll(){
        return gameRepository.findAll();
    }

    public Game save(Game g){
        return gameRepository.save(g);
    }

    public Game get(Long id){
        Optional<Game> g=gameRepository.findById(id);
        if(g.isPresent()){
            return g.get();
        }else{
            Game rta=new Game();
            rta.setName("Paila!");
            return rta;
        }

    }



}
