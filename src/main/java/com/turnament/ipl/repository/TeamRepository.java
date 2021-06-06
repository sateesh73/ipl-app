package com.turnament.ipl.repository;

import org.springframework.data.repository.CrudRepository;
import com.turnament.ipl.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
