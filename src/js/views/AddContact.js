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
		fullName: "Cleber Miranda",
		email: "",
		phone: "",
		address: "",
		mode: "add"
	});

	const saveValue = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	useEffect(() => {
		console.log("Behavior before the component is added to the DOM");

		//props.history.push("/");
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="fullName"
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
							onChange={e => {
								saveValue(e);
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addContact({
								id: "777",
								agenda_slug: state.agendaSlug,
								full_name: state.fullName,
								email: state.email,
								phone: state.phone,
								address: state.address,
								created_at: "2019-08-15 23:33:42"
							});
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
	history: PropTypes.object
};
