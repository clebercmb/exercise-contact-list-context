const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				{
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
				},
				{
					id: "315",
					agenda_slug: "mmayoragenda",
					full_name: "Pepe Mayor",
					email: "Pepe@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:34:01"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			fetchContacts: () => {
				console.log("flux.fetchContacts");

				const store = getStore();

				let contacts = store.contacts;

				setStore({ contacts: contacts });
			},

			addContact: contact => {
				console.log("flux.addContact");
				const store = getStore();

				contact.id = Math.floor(Math.random() * 9999999999);
				console.log("contact", contact);
				console.log(store.contacts);
				let contacts = store.contacts;
				if (!contacts) contacts = [contact];
				else contacts.push(contact);

				setStore({ contacts: contacts });
			},

			deleteContact: contact => {
				console.log("flux.deleteContent");
				console.log(contact);
				const store = getStore();

				let contacts = store.contacts;
				let newContacts = contacts.filter(c => c != contact);

				console.log("newContacts", newContacts);
				setStore({ contacts: newContacts });
				console.log("store.contacts", store.contacts);
			},

			editContact: contact => {
				console.log("flux.editContact");
				console.log(contact);
				const store = getStore();
				console.log("store.contacts", store.contacts);
				let newContacts = store.contacts.map(c => {
					if (c.id == contact.id) {
						return contact;
					}
				});
				console.log("newContacts", newContacts);
				setStore({ contacts: newContacts });
			}
		}
	};
};

export default getState;
