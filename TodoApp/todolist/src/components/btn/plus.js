import React, { Component, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'

import './plus.css';

function Click() {
    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })
    return (
        <div className='add-node' onClick={() => toggle(!state)}>
            <animated.div
                className='plusImg'
                style={{
                    opacity: x.to({ range: [0, 1], output: [1, 1] }),
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),
                }}>
                <img src='/asset/plus.svg' width='25' />
            </animated.div>
        </div>
    )
}

class plus extends Component {
    render() {
        return (
            <Click />
        );
    }
}

export default plus;