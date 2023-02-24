const getState = ({ getStore, getActions, setStore }) => {
	return { 
		store: {
			characters: [],
			favorites: [],
			next: "",
			prev: "",
		  },
		  actions: {
			getCharacters: async () => {
			  const response = await fetch(
				`https://rickandmortyapi.com/api/character`,
				{
				  method: "GET",
				}
			  );
			 
			  const data = await response.json();
			  console.log(data);
	  
			  setStore({ characters: data.results, next: data.info.next });
			},
			
			setFavorites: (index) => {
				console.log(index);
				let xx = [...getStore().characters];
				console.log(xx[index]);

				setStore({ favorites: [...getStore().favorites, xx[index] ]})
			},
			
			deleteFavorites: (index) => {
				let xxx = [...getStore().favorites];
				xxx.splice(index, 1);
				setStore({favorites : xxx});

			}



			/**setCharacters: (data) => {
			  setStore({
				characters: data.results,
				next: data.info.next,
				prev: data.info.prev,
			  });
			},
			setFavorites: (data) => {
			  setStore({ favorites: getStore().favorites.concat(data) });
			  console.log(getStore);
			},
	  
			deleteFavorites: (name) => {
			  setStore({
				favorites: getStore().favorites.filter(
				  (favorites) => favorites.name !== name
				),
			  });
			},
			*/
		  },
		};
	  };
	  
	  export default getState;