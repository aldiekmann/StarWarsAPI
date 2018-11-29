import React from 'react';

const Card = ({name, height, mass}) => {
	return (
		<div className='bg-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2>{name}</h2>
			<p>{height}</p>
			<p>{mass}</p>
		</div>
	);
}

export default Card;