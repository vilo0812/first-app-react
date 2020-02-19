import React from 'react';
const Pelicula = (props) => {

	const {titulo} = props;

	console.log(titulo);

	//debugger;



	return (<div>
		{titulo}
	</div>);
}
export default Pelicula;