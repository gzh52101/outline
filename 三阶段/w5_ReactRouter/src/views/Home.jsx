import React from 'react'

import { withStorage } from '@/utils/hoc'

function Home(props) {
    console.log('Home.props', props);
    return (
        <div>
            Home
            <button onClick={() => {
                props.history.push('/login')
            }}>去登录</button>
        </div>
    )
}

Home = withStorage('token','userInfo','mydata','xxx')(Home);

export default Home;