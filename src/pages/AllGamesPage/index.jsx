import React, { useState } from "react";
import { UserProfile } from "../../components/UserProfile";
import CategoriesSelect from "../../components/CategoriesSelect";
import GamesList from "../../components/GamesList";
import s from "./style.module.scss";

export const AllGamesPage = () => {
  const [activeFilter, setActiveFilter] = useState({
    name: "ALL",
    id: 0,
  });
  const [searchingFilter, setSearchingFilter] = useState("");

  return (
    <div className={s.mainTable}>
      <UserProfile />
      <div className={s.gamesTable}>
        <GamesList search={searchingFilter} activeFilter={activeFilter} />
        <CategoriesSelect
          setSearch={setSearchingFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </div>
  );
};
