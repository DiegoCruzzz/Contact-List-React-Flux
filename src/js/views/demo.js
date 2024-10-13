import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
		actions.addContact(formData)
        setFormData({
            name: '',
            phone: '',
            email: '',
            address: ''
        });
    };


    return (
        <div className="p-3 m-auto w-75">
            <div>
				<h1 className="mx-auto">Agregar un nuevo contacto</h1>
				<Link to="/" className="">
					<button type="button" class="btn btn-info">Volver</button>
				</Link>
			</div>
			
			<div>
				<form onSubmit={handleSubmit}>
					
					<div className="form-group p-1">
						<label for="exampleInputEmail1">Nombre completo</label>
						<input
							type="text"
							name="name"
							placeholder="Nombre"
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							required
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label for="exampleInputPassword1">Telefono</label>
						<input
							type="text"
							name="phone"
							placeholder="Teléfono"
							value={formData.phone}
							onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
							value={formData.email}
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
							value={formData.address}
							onChange={(e) => setFormData({ ...formData, address: e.target.value })}
							required
							className="form-control"
						/>
					</div>
					
					<button type="submit" className="btn btn-success ">Agregar Contacto</button>
				</form>

			</div>
			
        </div>
    );
};
