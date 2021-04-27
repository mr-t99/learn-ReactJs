import React, { Component, createRef, useState } from 'react';
import { useTrail, a } from '@react-spring/web'
import Head from './components/app-head/head';
import Plusbtn from './components/btn/plus';
import Conten from './components/conten/conten';
import Fromconten from './components/from-conten/fromconten';

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 0 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            clickBtn: true,
            selectConten: {
                title: '',
                conten: ''
            }
        }

        this.callonClick = createRef();
        this.selectConten = this.selectConten.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);
    }

    selectConten(conten) {
        this.setState({
            ...this.state,
            selectConten: {
                title: conten.title,
                conten: conten.conten
            }
        })
        var  a = this.state
        
    }

    onClickItem() {
        this.setState({
            clickBtn: this.callonClick.current.onClickItem()
        })
    }

    onClickBtn(value) {
        this.setState({
            ...this.state,
            clickBtn: value
        })
    }
    render() {
        return (
            <>
                <Head />
                <Plusbtn
                    onClick={this.onClick}
                    exitBtn={this.onClickBtn}
                    ref={this.callonClick}
                />
                {this.state.clickBtn &&
                    <Trail open={true}>
                        <Conten
                            selectConten={
                                this.selectConten
                            }
                            onClick={this.onClickItem}

                        />

                    </Trail>}
                {!this.state.clickBtn &&
                    <Trail open={true}>
                        <Fromconten
                            conten={this.state.selectConten}
                        />
                    </Trail>
                }
            </>
        );
    }
}

export default App;