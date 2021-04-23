import React, { Component } from 'react';
import Head from './components/app-head/head';
import Plusbtn from './components/btn/plus';
import Conten from './components/conten/conten';
import Fromconten from './components/from-conten/fromconten';
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
                {!this.state.clickBtn && <Conten />}
                {this.state.clickBtn && <Fromconten />}
            </>
        );
    }
}

export default App;