package com.example.demo345.repository;

import com.example.demo345.entity.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameCrudRepository extends CrudRepository<Game, Long> {
}