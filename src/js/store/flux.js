const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchData: (entity, id) => {
				fetch ("https://swapi.dev/api/people")
					.then((response) => {
						if (!response.ok) {
						throw Error(response.statusText);
					}
					// Read the response as json.
					return response.json();
					})
					.then((responseAsJson) => {
					// Do stuff with the JSONified response
						console.log(responseAsJson.results);
						setStore({ [entity]: responseAsJson.results });
					})
					.catch((error) => {
					console.log("Looks like there was a problem: \n", error);
					});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
