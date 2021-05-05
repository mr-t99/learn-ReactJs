import React, { Component, createRef } from 'react';
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
            statusBtn: 'addBtn',
            selectConten: {
                id: '',
                title: '',
                conten: ''
            },
            contenApi: []
        }
        this.onChangeBtn = createRef();
        this.getValue = createRef();

        this.selectConten = this.selectConten.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
        this.setStatusBtn = this.setStatusBtn.bind(this);
        this.onChangeTextFormConten = this.onChangeTextFormConten.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    selectConten(conten) {
        this.setState({
            selectConten: {
                id: conten.id,
                title: conten.title,
                conten: conten.conten
            },
            statusBtn: 'backBtn'
        })
    }

    setStatusBtn(value) {
        this.setState({
            statusBtn: value,
            selectConten: {
                id: '',
                title: '',
                conten: ''
            }
        })
    }

    onChangeTextFormConten() {
        this.setState({
            statusBtn: "saveBtn"
        })
        this.onChangeBtn.current.onchangBtn('saveBtn');
    }

    onClickItem() {
        this.setState({
            statusBtn: "backBtn"
        })
        this.onChangeBtn.current.onchangBtn('backBtn');
    }
    onAddItem() {
        //get data from conten
        if (typeof (this.getValue.current.getAllValueFrom().id) === 'number') {
            var data = this.state.contenApi;
            const check = (value) => value.id === this.getValue.current.getAllValueFrom().id;
            const locationArr = data.findIndex(check);

            this.setState({
                contenApi: [
                    ...this.state.contenApi.slice(0, locationArr),
                    {
                        id: this.getValue.current.getAllValueFrom().id,
                        title: this.getValue.current.getAllValueFrom().title,
                        conten: this.getValue.current.getAllValueFrom().conten
                    },
                    ...this.state.contenApi.slice(locationArr + 1),
                ]
            })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.getValue.current.getAllValueFrom().title,
                    conten: this.getValue.current.getAllValueFrom().conten
                })
            };
            fetch(`${process.env.REACT_APP_API_URL}/conten/${this.getValue.current.getAllValueFrom().id}`, requestOptions)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState({ postId: data.id })
                }).catch(err => console.log(err))
        } else {
            this.setState({
                contenApi: [
                    ...this.state.contenApi.slice(),
                    {
                        title: this.getValue.current.getAllValueFrom().title,
                        conten: this.getValue.current.getAllValueFrom().conten
                    }
                ]
            })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.getValue.current.getAllValueFrom().title,
                    conten: this.getValue.current.getAllValueFrom().conten
                })
            };
            fetch(`${process.env.REACT_APP_API_URL}/conten`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.setState({ postId: data.id })
                }).catch(err => alert(err))
        }

    }

    componentWillMount() {
        fetch(`${process.env.REACT_APP_API_URL}/conten`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    contenApi: json.body
                })
            });
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <>
                <Head />
                <Plusbtn
                    onClick={this.onClick}
                    exitBtn={this.onClickBtn}
                    ref={this.onChangeBtn}
                    statusBtn={this.state.statusBtn}
                    setStatusBtn={this.setStatusBtn}
                    onAddItem={this.onAddItem}
                />
                {this.state.statusBtn === 'addBtn' &&
                    <Trail open={true}>
                        <Conten
                            selectConten={
                                this.selectConten
                            }
                            onClick={this.onClickItem}
                            contenData={this.state.contenApi}
                        />
                    </Trail>}
                {(this.state.statusBtn === 'backBtn' || this.state.statusBtn === 'saveBtn') &&
                    <Trail open={true}>
                        <Fromconten
                            conten={this.state.selectConten}
                            onChange={this.onChangeTextFormConten}
                            ref={this.getValue}
                        />
                    </Trail>
                }
            </>
        );
    }
}

export default App;