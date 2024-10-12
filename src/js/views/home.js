//Imports
import React,{ useContext, useEffect } from "react";

import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.css";
	//Imporatar contexto
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return(
		<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<button type="button" onClick={actions.loadSomeData()} class="btn btn-primary">Cargar Contactos</button>
		<button type="button" onClick={actions.addContact()} class="btn btn-primary">Agregar Contactos</button>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	);
};
