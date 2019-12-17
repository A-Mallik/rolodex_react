import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css';

export const CardList = (props) => (
    //children are what is passed inbetween the brackets of our component


<div className='card-list'> 
    {props.characters.map(character =>(
    <Card key={character.id} character={character} />
    // <div key={character.name}> {character.name} </div>
    ))}
</div>
)