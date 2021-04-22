import React, { Component, useState } from 'react';
import './from.css';
import classNames from 'classnames';

function Title(props) {

    // const isBlur = ()=>{
    //     console.log(isFocus)
    //     if(value.trim===""){
    //         clickInput()
    //     }
    // }

    const [state, setState] = useState({
        value: '',
        isFocus: false
    })

    const getValue = (event) => {
        setState({
            ...state,
            value: event.target.value
        });
    }

    const clickInput = (event) => {
        if (event.type === 'focus') {
            setState({
                ...state,
                isFocus:true
            })
        }
        else {
            if (event.target.value.trim() === '') {
                setState({
                    isFocus: false,
                    value: ''
                })
                return;
            }
        }
    };

    return (
        <div className="input">
            <input type="text"
                className={classNames({ 'focus': state.isFocus })}
                onFocus={clickInput}
                onChange={getValue}
                onBlur={clickInput}
                value={state.value}
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