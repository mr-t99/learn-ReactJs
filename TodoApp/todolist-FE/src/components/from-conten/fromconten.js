import React, { Component, useState, useEffect } from 'react';
import './from.css';
import classNames from 'classnames';

function Title(props) {
    var isFocus = false;
    if (props.title != '') {
        isFocus = true
    }
    const [state, setState] = useState({
        value: props.title,
        isFocus: isFocus
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
                isFocus: true
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
    constructor(){
        super();
        this.state={
            value:''
        }
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        this.setState({
            value:this.props.conten.conten
        })
    }
    onChange(event){
        this.setState({
            value:event.target.value
        })
    }
    render() {
        return (
            <div className="edit_item">
                <Title title={this.props.conten.title} />
                <textarea placeholder="Write the conten here!"
                    value={this.state.value}
                    onChange={
                        this.onChange
                    }
                >
                    {/* {this.props.conten} */}
                </textarea>
            </div>
        );
    }
}

export default fromconten;