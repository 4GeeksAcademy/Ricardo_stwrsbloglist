import React, { useContext, useEffect, useState} from "react"
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peoplecard";



 export const Home = () => {
	const [people, setPeople] = useState([])
	const {store, actions} = useContext(Context)




return (
 <div>
	<section>
		<h1>people</h1>
	<div>
	  {store.people.map((person,index) => {
		return <PeopleCard key={index}index={index} character={person}/>;
	  })}
	</div>
	</section>
  </div>
)};




