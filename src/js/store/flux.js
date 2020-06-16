const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				/* 				{
					id: "281",
					agenda_slug: "mmayoragenda",
					full_name: "Miguel Mayor",
					email: "mmayor@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 22:48:46"
				},
				{
					id: "313",
					agenda_slug: "mmayoragenda",
					full_name: "Saili Mayor",
					email: "saili@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:33:42"
				},
				{
					id: "314",
					agenda_slug: "mmayoragenda",
					full_name: "Pepe Mayor",
					email: "Pepe@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:34:01"
				} */
			],
			error: undefined
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			fetchContacts: url => {
				console.log("flux.fetchContacts");
				console.log("flux.fetchContacts.url", url);

				const store = getStore();
				let contacts = []; //store.contacts;
				let ver;
				fetch(url)
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log("flux.fetchContacts.data", data);
						contacts = data;
						setStore({ contacts: contacts });
					})
					.catch(error => {
						console.log("flux.fetchContacts.error", error);
					});

				console.log("flux.fetchContacts.contacts", contacts);
				//if (ver == undefined) contacts = [];

				setStore({ contacts: contacts });
			},
			addContact: contact => {
				console.log("flux.addContact");
				const store = getStore();

				//contact.id = Math.floor(Math.random() * 9999999999);
				console.log("flux.addContact.contact", contact);
				console.log(store.contacts);
				let contacts = store.contacts;

				let data = {};
				fetch(" https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("flux.addContact.data 1:", data);
						contacts.push(data);
						contact = data;
						setStore({ contacts: contacts });
					})
					.catch(error => {
						console.log("flux.addContact.error", error);
					});

				console.log("flux.addContact.data 2:", data);
				//if (!contacts) contacts = [contact];
				//else contacts.push(data);

				console.log("addContact.contacts", contacts);
				console.log("addContact.contact", contact);

				return data;
			},

			deleteContact: contact => {
				console.log("flux.deleteContent");
				console.log(contact);
				const store = getStore();

				fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.status);

						let contacts = store.contacts;
						let newContacts = contacts.filter(c => c != contact);
						console.log("newContacts", newContacts);
						setStore({ contacts: newContacts });
						console.log("store.contacts", store.contacts);
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			editContact: contact => {
				console.log("flux.editContact");
				console.log("flux.editContact.contact", contact);

				const store = getStore();
				console.log("store.contacts", store.contacts);

				let data = {};
				fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("flux.editContact.data 1:", data);
						//contacts.push(data);
						//						contact = data;

						let newContacts = store.contacts.map(c => {
							if (c.id == contact.id) {
								return contact;
							}
							return c;
						});
						console.log("flux.editContact.newContacts", newContacts);
						setStore({ contacts: newContacts });

						//setStore({ contacts: contacts });
					})
					.catch(error => {
						console.log("flux.editContact.error", error);
					});

				console.log("flux.editContact.data 2:", data);
				//if (!contacts) contacts = [contact];
				//else contacts.push(data);
			}
		}
	};
};

export default getState;
