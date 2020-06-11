import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({ showModal: false });
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		console.log("Behavior before the component is added to the DOM");
		actions.fetchContacts();
		setContacts(store.contacts);

		return () => {
			console.log("Behavior right before the component is removed from the DOM.");
		};
	}, []);

	console.log("*****Contacts**");
	console.log(contacts);

	const cards = contacts.map((content, i) => {
		//return <ContactCard key={i} data={content} onDelete={() => setState({ showModal: true })} />;
		return (
			<ContactCard
				key={i}
				data={content}
				onDelete={contact => {
					actions.deleteContact(contact);
					setContacts(store.contacts);
				}}
			/>
		);
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{/* <ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard />
						<ContactCard />
						<ContactCard /> */}
						{cards}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
