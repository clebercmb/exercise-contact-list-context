import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import ContactCard from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Contacts = props => {
	console.log("Contacts.props.history", props.history);

	const { store, actions } = useContext(Context);

	const [state, setState] = useState({ showModal: false });
	const [contacts, setContacts] = useState([]);

	//const [storeState, setStoreSate] = useState(store);

	useEffect(() => {
		console.log("useEffect 1: Behavior before the component is added to the DOM");
		actions.fetchContacts("https://assets.breatheco.de/apis/fake/contact/agenda/clebermb");
		console.log("Contacts.useEffect.store.contacts", store.contacts);
	}, []);

	useEffect(() => {
		console.log("useEffect 2: Behavior before the component is added to the DOM");
		console.log("Contacts.useEffect.store.contacts", store.contacts);
		setContacts(store.contacts);
	}, [store.contacts]);

	console.log("*****Contacts**");
	console.log("Contacts.contacts", contacts);
	console.log("Contacts.store.contacts", store.contacts);

	const cards = contacts.map((content, i) => {
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
						{cards}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

Contacts.propTypes = {
	history: PropTypes.object
};
