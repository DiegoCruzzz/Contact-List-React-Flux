import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
				{
					"name": "example1",
					"phone": "as",
					"email": "de",
					"address": "as",
				},
				{
					"name": "example2",
					"phone": "as",
					"email": "de",
					"address": "as",
				}
			],
			mod: [
				
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				fetch('https://playground.4geeks.com/contact/agendas/diegocruzzz/contacts')
        		.then(response => response.json())
        		.then(data => {
					console.log(data);
					const store = getStore();
					setStore({contacts:data.contacts})
					console.log(store.contacts)
				});
			},

			addContact: (newContact) => {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify( 
						newContact
					   )
				};
				fetch('https://playground.4geeks.com/contact/agendas/diegocruzzz/contacts', requestOptions)
					.then(response => response.json())
					.then(data => console.log("Contacto añadido"));
			},

			deleteContact: (index) => {
				const store = getStore();
				let idToDelete = store.contacts[index].id;
				console.log("Se borrara: " + idToDelete)
				setStore({contacts : store.contacts.filter( (contactos,indx)=>indx!=index) });
					
				fetch('https://playground.4geeks.com/contact/agendas/diegocruzzz/contacts/'+idToDelete, { method: 'DELETE' })
					.then(response => console.log("Se borro " + idToDelete));
					
			},

			modContact: (contactModif,id) => {
				
				console.log("id a modiifcar : " + id)
				const requestOptions = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify( 
						contactModif
					   )
				};
				fetch("https://playground.4geeks.com/contact/agendas/diegocruzzz/contacts/" + id, requestOptions)
					.then(response => response.json())
					.then(data => console.log("Contacto modificado"));
			},
			
		}
	};
};

export default getState;
