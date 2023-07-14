import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { People } from "../component/people.js";

export const Home = () => {
  //const [people, setPeople] = useState([])
  const { store, actions } = useContext(Context);

  return (
    <div>
      <section>
        <h1>people</h1>
        <div>
          {store.people.map((character, index) => {
            return <People key={index} index={index} char={character} />;
          })}
        </div>
      </section>
    </div>
  );
};
