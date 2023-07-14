import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import propTypes from "prop-types";


 export const PeopleCard = () => {
	const {store,actions} = useContext(Context);
    const params = useParams();
    let character = store.people.find((item,index)=> index== params.theIndex)
    console.log (character);

    return(
        <div className="card">
         <img
            className="card-img-top"
            src=""
            alt=""
            ></img>
            <div className="card-body">
            <h5 classname="card-title">{character}</h5>
            <p className="card-text"></p>
            <p className="card-text"></p>
            </div>
         </div>
        )};

PeopleCard.propTypes ={
    match: propTypes.object,

};
    
    