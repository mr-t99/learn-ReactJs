import React, { Component, useState } from 'react';
import './from.css';
import classNames from 'classnames';

function Title(props) {
    const [value, setValue] =useState('');
    const getValue = (event)=>{
        setValue(event.target.value);
    }

    const [isFocus, setIsfocus] = useState(false);
    const clickInput = () => {
        setIsfocus(!isFocus)
    };
    const isBlur = ()=>{
        console.log(isFocus)
        if(value.trim===""){
            clickInput()
        }
    }
    return (
        <div className="input">
            <input type="text"
                className={classNames({ 'focus': isFocus })}
                onFocus={clickInput}
                onBlur={isBlur}
                onChange={getValue}
            ></input>
            <span data-placeholder2="Note title" data-placeholder1="Click here to add a title"></span>
        </div>
    )
}


class fromconten extends Component {

    render() {
        return (
            <div className="edit_item">
                <Title />
                <textarea placeholder="Write the conten here!"></textarea>
            </div>
        );
    }
}

export default fromconten;