import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	//const [id, setId] = useState("");
	const { store, actions } = useContext(Context);

	const [agendaSlug, setAgendaSlug] = useState("clebermb");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		console.log("Behavior before the component is added to the DOM");

		//props.history.push("/");
	}, []);

	/*id: "900",
	agenda_slug: "mmayoragenda",
	full_name: "Antonio Custodio",
	email: "camila@gmail.com",
	phone: "7864445566",
	address: "47568 NW 34ST, 33434 FL, USA",
	created_at: "2019-08-15 23:33:42"
*/

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
							onChange={e => {
								setFullName(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => {
								setPhone(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => {
								setAddress(e.target.value);
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() =>
							actions.addContact({
								id: "777",
								agenda_slug: agendaSlug,
								full_name: fullName,
								email: email,
								phone: phone,
								address: address,
								created_at: "2019-08-15 23:33:42"
							})
						}>
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
