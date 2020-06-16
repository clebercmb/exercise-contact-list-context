import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
//import history from "../component/history";
import PropTypes from "prop-types";

export const AddContact = props => {
	//const [id, setId] = useState("");
	const { store, actions } = useContext(Context);
	console.log("props.history", props.history);

	const [state, setState] = useState({
		agendaSlug: "clebermb",
		fullName: "",
		email: "",
		phone: "",
		address: "",
		mode: "Add"
	});

	const saveValue = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	useEffect(() => {
		console.log("Behavior before the component is added to the DOM");
		console.log("props.match.params.id", props.match.params.id);

		if (props.match.params.id !== undefined) {
			console.log("setting up mode");
			const contacts = store.contacts;
			const contact = contacts.find(c => c.id == props.match.params.id);
			console.log("contact found", contact);
			setState({
				...state,
				id: contact.id,
				agendaSlug: contact.agenda_slug,
				fullName: contact.full_name,
				email: contact.email,
				phone: contact.phone,
				address: contact.address,
				mode: "Edit"
			});
		}

		//props.history.push("/");
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{state.mode} contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="fullName"
							value={state.fullName}
							onChange={e => {
								saveValue(e);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							value={state.email}
							onChange={e => {
								saveValue(e);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							value={state.phone}
							onChange={e => {
								saveValue(e);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							value={state.address}
							onChange={e => {
								saveValue(e);
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							let data;
							if (state.mode == "Add")
								data = actions.addContact({
									id: undefined,
									agenda_slug: state.agendaSlug,
									full_name: state.fullName,
									email: state.email,
									phone: state.phone,
									address: state.address,
									created_at: "2019-08-15 23:33:42"
								});
							else
								data = actions.editContact({
									id: state.id,
									agenda_slug: state.agendaSlug,
									full_name: state.fullName,
									email: state.email,
									phone: state.phone,
									address: state.address,
									created_at: "2019-08-15 23:33:42"
								});
							console.log("AddContact.data", data);
							props.history.push("/");
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
