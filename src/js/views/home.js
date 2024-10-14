//Imports
import React,{ useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.css";
	//Imporatar contexto
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return(
		<div className="text-center mt-5">
			<h1>Lista de Contactos! </h1>
			<div className="">
				<button type="button" onClick={() => actions.loadSomeData()} class="btn btn-primary m-2">Cargar Contactos</button>
				<Link to="/demo">
					<button className="btn btn-primary m-2">Nuevo Contacto</button>
				</Link>
			</div>
			 
			
			<div className="d-flex justify-content-center col flex-column">
				{store.contacts.map((contact, index) => (
					<div key={index} className="m-1 rounded w-75 p-3 border border-info row d-flex align-items-center col mx-auto">
						<div className="col p-auto">
							<img 
								src="https://static.wikia.nocookie.net/el_random/images/f/f3/CJ.png/revision/latest/smart/width/250/height/250?cb=20200406093008&path-prefix=es"
								alt={contact.name} 
								style={{
									width: '100px',
									height: '100px',
									borderRadius: '50%',
									marginRight: '10px'
									}}
							/>
						</div>

						<div className="col">
							<h3>{contact.name}</h3>
							<p>Teléfono: {contact.phone}</p>
							<p>Email: {contact.email}</p>
							<p>Dirección: {contact.address}</p>
						</div>

						<div className="col p-auto">
							<Link to={`/single?index=${index}`}>
								<button type="button" class="btn btn-warning mx-3">Modificar</button>
							</Link>
							<button type="button" class="btn btn-danger" onClick={()=>actions.deleteContact(index)}>Eliminar</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
