import React from 'react'
function Home(props) {
    console.log('Home.props',props);
    return (
        <div>
            Home
            <button onClick={()=>{
                props.history.push('/login')
            }}>去登录</button>
        </div>
    )
}

export default Home;