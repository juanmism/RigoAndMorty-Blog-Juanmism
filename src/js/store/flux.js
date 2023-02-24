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
	  
			setStore({ characters: data.results, next: data.info.next });
			},
			
			setFavorites: (index) => {
				console.log(index);
				let xx = [...getStore().characters];
				setStore({ favorites: [...getStore().favorites, xx[index] ]});
			},
			
			deleteFavorites: (index) => {
				let xxx = [...getStore().favorites];
				xxx.splice(index, 1);
				setStore({favorites : xxx});
			},

			nextCharacters: (data) => {
			  	setStore({
				characters: data.results,
				next: data.info.next,
				prev: data.info.prev,
			  });
			},
			
		  },
		};
	  };
	  
	  export default getState;