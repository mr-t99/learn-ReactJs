import React, { Component, useState } from 'react';
import './from.css';
import classNames from 'classnames';

function Title(props) {
    var isFocus = false;
    if (props.title !== '') {
        isFocus = true
    }
    const [state, setState] = useState({
        value: props.value,
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
            } else {
                setState({
                    value: event.target.value,
                    isFocus:true
                })
                props.getValueTitle(state.value);
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
    constructor() {
        super();
        this.state = {
            id:'',
            title: '',
            conten: ''
        }
        this.getValueTitle = this.getValueTitle.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        this.setState({
            id:this.props.conten.id,
            title: this.props.conten.title,
            conten: this.props.conten.conten
        })
    }
    onChange(event) {
        this.setState({
            conten: event.target.value
        })
        this.props.onChange()
    }

    getValueTitle(value) {
        this.setState({
            title: value
        })
    }
    getAllValueFrom(){
        return this.state;
    }
    render() {
        return (
            <div className="edit_item">
                <Title value={this.props.conten.title} getValueTitle={this.getValueTitle}/>
                <textarea placeholder="Write the conten here!"
                    value={this.state.conten}
                    onChange={
                        this.onChange
                    }
                >
                </textarea>
            </div>
        );
    }
}

export default fromconten;