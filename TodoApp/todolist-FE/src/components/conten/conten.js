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
        this.pushConten = this.pushConten.bind(this);
    }

    pushConten(conten) {
        this.props.selectConten(conten)
    }
    render() {
        const { contenData } = this.props;
        return (
            <div className='conten'>
                {
                    contenData.length === 0 && <div className='noItem'>Không có ghi chú</div>
                }
                {
                    contenData.length !== 0 && contenData.map((item, index) => {

                        return (
                            <Item
                                id={item.id}
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