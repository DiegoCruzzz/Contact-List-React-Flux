import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Single = () => {
	const { store, actions } = useContext(Context);

	const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get("index"); 

	let id = store.contacts[index].id;

    const [formDataMod, setFormDataMod] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleSubmit = (i) => {
        i.preventDefault();
		actions.modContact(formDataMod,id);
        setFormDataMod({
            name: '',
            phone: '',
            email: '',
            address: ''
        });
    };


    return (
        <div className="p-3 m-auto w-75">
            <div>
				<h1 className="mx-auto">Modificacion de un contacto</h1>
				<Link to="/" className="">
					<button type="button" class="btn btn-info">Volver</button>
				</Link>
			</div>
			
			<div>
				<form onSubmit={handleSubmit}>
					
					<div className="form-group p-1">
						<label for="exampleInputEmail2">Nombre completo</label>
						<input
							type="text"
							name="name"
							placeholder="Nombre"
							value={formDataMod.name}
							onChange={(i) => setFormDataMod({ ...formDataMod, name: i.target.value })}
							required
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label for="exampleInputPassword2">Telefono</label>
						<input
							type="text"
							name="phone"
							placeholder="Teléfono"
							value={formDataMod.phone}
							onChange={(i) => setFormDataMod({ ...formDataMod, phone: i.target.value })}
							required
							className="form-control"
						/>
					</div>
					
					<div className="form-group">
						<label for="exampleInputPassword1">Correo Electronico</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formDataMod.email}
							onChange={(i) => setFormDataMod({ ...formDataMod, email: i.target.value })}
							required
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label for="exampleInputPassword1">Dirección</label>
						<input
							type="text"
							name="address"
							placeholder="Dirección"
							value={formDataMod.address}
							onChange={(i) => setFormDataMod({ ...formDataMod, address: i.target.value })}
							required
							className="form-control"
						/>
					</div>
					
					<button type="submit" className="btn btn-success m-3">Modificar Contacto</button>
				</form>

			</div>
			
        </div>
    );
};
