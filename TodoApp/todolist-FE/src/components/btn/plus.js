import React, { Component } from 'react';

import './plus.css';

const statusBtn = [
    'addBtn', 'backBtn', 'saveBtn'
]

class plus extends Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        if (this.state.statusBtn === statusBtn[0]) {
            this.props.setStatusBtn(statusBtn[1]);
            this.setState({
                statusBtn: statusBtn[1]
            })
        }
        if (this.state.statusBtn === statusBtn[1]) {
            this.props.setStatusBtn(statusBtn[0]);
            this.setState({
                statusBtn: statusBtn[0]
            })
        }
        if (this.state.statusBtn === statusBtn[2]) {
            //xử lý phím tick
            this.props.onAddItem()
            this.props.setStatusBtn(statusBtn[0]);
            this.setState({
                statusBtn: statusBtn[0]
            })

        }
    }

    componentWillMount() {
        this.setState({
            statusBtn: this.props.statusBtn
        })
    }

    renderImgBtn() {
        var hrefImg;
        if (this.state.statusBtn === 'addBtn') {
            hrefImg = '/asset/plus.svg';
        }
        if (this.state.statusBtn === 'backBtn') {
            hrefImg = '/asset/left-arrow.svg';
        }
        if (this.state.statusBtn === 'saveBtn') {
            hrefImg = '/asset/tick.svg';
        }
        return (
            <img src={hrefImg} width='25' alt='img1' />
        )
    }

    onchangBtn(value) {
        this.setState({
            statusBtn: value
        })
    }

    render() {
        return (
            <div className='add-node'
                onClick={this.onClick}
            >
                <div className='plusImg'>
                    {
                        this.renderImgBtn()
                    }
                </div>
            </div>
        );
    }
}

export default plus;