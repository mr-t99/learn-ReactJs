import React, { Component, useState } from 'react';
import { useTrail, a } from '@react-spring/web'
import Head from './components/app-head/head';
import Plusbtn from './components/btn/plus';
import Conten from './components/conten/conten';
import Fromconten from './components/from-conten/fromconten';

const Trail=({ open, children }) => {
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
            clickBtn: false
        }
    }
    render() {
        return (
            <>
                <Head />
                <Plusbtn onClickBtn={() => {
                    this.setState({
                        ...this.state,
                        clickBtn: !this.state.clickBtn
                    })
                }}
                />
                {!this.state.clickBtn &&
                    <Trail open={true}>
                        <Conten />
                    </Trail>}
                {this.state.clickBtn &&
                    <Trail open={true}>
                        <Fromconten />
                    </Trail>
                }
            </>
        );
    }
}

export default App;