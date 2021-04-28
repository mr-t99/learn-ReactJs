import React, { Component } from 'react';
import './conten.css';


const Item = (props) => {
    const { title, conten } = props;
    var viewConten = conten;
    if (conten.length > 83) {
        viewConten = conten.substr(0, 83) + " ..."
    }
    const pushConten = () => {
        props.onClickItem(props);
        props.onClick();
    }
    return (
        <div className='item' onClick={pushConten}>
            <h3>{title}</h3>
            <span>
                {
                    viewConten
                }
            </span>
        </div>
    )
}

class conten extends Component {
    constructor() {
        super();
        this.state = {
            conten: []
        }
        this.pushConten = this.pushConten.bind(this);
    }

    pushConten(conten) {
        this.props.selectConten(conten)
    }
    componentDidMount() {
        console.log(2);
        // this.setState({
        //     conten: this.props.conten
        // })
    }
    render() {
        console.log(1);
        const { conten } = this.state;
        return (
            <div className='conten'>
                {
                    !conten.length && <div>No conten</div>
                }
                {
                    conten.length && conten.map((item, index) => {
                        return (
                            <Item
                                title={item.title}
                                conten={item.conten}
                                key={index}
                                onClickItem={this.pushConten}
                                onClick={this.props.onClick}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default conten;