import React from 'react';
import Card from './Card';

const CardList = ({People}) => {
	return (
		<div>
			{
				People.map((user, i) => {
					return (
						<Card
							key={i}
							name={People[i].name}
							height={People[i].height}
							mass={People[i].mass}
						/>
					);
				})
			}
		</div>
	)
};
export default CardList;