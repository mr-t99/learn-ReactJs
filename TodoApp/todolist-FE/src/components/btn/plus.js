import React, { Component } from 'react';

import './plus.css';

class plus extends Component {
    constructor() {
        super();
        this.state = {
            click: false
        }
        this.onClickItem = this.onClickItem.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClickItem() {
        this.setState({
            click: !this.state.click
        })
        return this.state.click
    }
    
    onClick(){
        this.setState({
            click: !this.state.click
        })
        this.props.exitBtn(this.state.click);
    }

    render() {
        return (
            <div className='add-node'
                onClick={this.onClick}
            >
                <div className='plusImg'>
                    {!this.state.click && <img src='/asset/plus.svg' width='25' />}
                    {this.state.click && <img src='/asset/left-arrow.svg' width='25' />}
                </div>
            </div>
        );
    }
}

export default plus;