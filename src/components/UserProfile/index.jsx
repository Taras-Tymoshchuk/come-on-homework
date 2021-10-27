import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import instance from "../../utils/API";
import s from "./style.module.scss";

export const UserProfile = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const history = useHistory();

  const logOut = async () => {
    try {
      const res = await instance.post("http://localhost:3001/logout", {
        username: localStorage.getItem("username"),
      });
      if (res.data.status === "success") {
        localStorage.clear();
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user && (
        <div className={s.userProfile}>
          <div className={s.userInfo}>
            <div>
              <img src={user.avatar} alt={user.name} />
            </div>

            <div className={s.userText}>
              <h1>{user.name}</h1>
              <p>{user.event}</p>
            </div>
          </div>
          <button onClick={() => logOut()}>Log Out</button>
        </div>
      )}
    </>
  );
};
