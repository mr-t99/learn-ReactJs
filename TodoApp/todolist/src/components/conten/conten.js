import React, { Component } from 'react';
import './conten.css';


const Item = (props)=>{
    const {title, conten} = props;
    return(
        <div className='item'>
            <h3>{title}</h3>
            <span>
                {conten}
            </span>
        </div>
    )
}

class conten extends Component {
    constructor(){
        super();
        this.state={
            conten:[
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                },
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                },
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                },
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                },
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                },
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                },
                {
                    title:"Title",
                    conten:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam dolor ad alias nostrum facilis assumenda molestias? Dolore nobis a placeat consequuntur voluptate voluptates illo sed. Quos quis voluptates necessitatibus!"
                }
            ]
        }
    }
    render() {
        const {conten} = this.state;
        return (
            <div className='conten'>
                {
                    !conten.length && <div>No conten</div>
                }
                {
                    conten.length && conten.map((item, index)=>{
                        return(<Item title={item.title} conten={item.conten} key={index} />)
                    })
                }
            </div>
        );
    }
}

export default conten;