import React, { useEffect, useState } from "react";
import axios from "./api/axios";
import { TeamCard } from "../components/TeamCard";

export const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function getTeam() {
      const res = await axios.get(`/team`);
      setTeam(res.data);
    }
    getTeam();
  }, []);
  console.log(team);
  return (
    <div>
      {team.map((item) => (
        <TeamCard key={item.id} teamName={item.teamName} />
      ))}
    </div>
  );
};
