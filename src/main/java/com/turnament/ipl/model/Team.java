package com.turnament.ipl.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String teamName;
	private Long totalMatch;
	private Long totalWins;
	@Transient
	private List<Match> matches;

	public Team(String teamName, Long totalMatch) {
		super();
		this.teamName = teamName;
		this.totalMatch = totalMatch;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public Long getTotalMatch() {
		return totalMatch;
	}

	public void setTotalMatch(Long totalMatch) {
		this.totalMatch = totalMatch;
	}

	public Long getTotalWins() {
		return totalWins;
	}

	public void setTotalWins(Long totalWins) {
		this.totalWins = totalWins;
	}

	@Override
	public String toString() {
		return "Team [teamName=" + teamName + ", totalMatch=" + totalMatch + ", totalWins=" + totalWins + "]";
	}

	public List<Match> getMatches() {
		return matches;
	}

	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}

	public Team() {

	}
}
