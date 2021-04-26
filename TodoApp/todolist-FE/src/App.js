import React, { Component, useState } from 'react';
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
        this.selectConten = this.selectConten.bind(this);
        this.changeImgBtn = this.changeImgBtn.bind(this);
    }

    selectConten(conten) {
        this.setState({
            clickBtn: !this.state.clickBtn,
            selectConten: {
                title: conten.title,
                conten: conten.conten
            }
        })
    }

    changeImgBtn() {
        this.setState({
            ...this.state,
            clickBtn: !this.state.clickBtn
        })
    }

    render() {
        return (
            <>
                <Head />
                <Plusbtn
                    onClickBtn={this.changeImgBtn}
                    valueBtn = {this.state.clickBtn}
                />
                {this.state.clickBtn &&
                    <Trail open={true}>
                        <Conten selectConten={
                            this.selectConten
                        } />
                    </Trail>}
                {!this.state.clickBtn &&
                    <Trail open={true}>
                        <Fromconten
                            title={this.state.selectConten.title}
                            conten={this.state.selectConten.conten}
                        />
                    </Trail>
                }
            </>
        );
    }
}

export default App;