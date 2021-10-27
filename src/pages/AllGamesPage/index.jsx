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
  const [search, setSearch] = useState("");

  return (
    <div className={s.mainTable}>
      <UserProfile />
      <div className={s.gamesTable}>
        <GamesList search={search} activeFilter={activeFilter} />
        <CategoriesSelect
          setSearch={setSearch}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </div>
  );
};
