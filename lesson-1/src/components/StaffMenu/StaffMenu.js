import React from 'react';
import {Button} from '../ui/Button/Button'
import {Item} from '../ui/Item/Item'

export const StaffMenu = (props) => {
    console.log(`props`, props)
    return <div>
        <h2>{props.title}</h2>
        {props.content.map(city => <Item key={city.id} text={city.name}/>)}
        <Button name={props.buttonName}/>
        </div>
}