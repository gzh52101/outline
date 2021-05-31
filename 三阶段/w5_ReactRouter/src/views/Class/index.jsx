import React from 'react'
import {withAuth} from '@/utils/hoc'
import { Route } from 'react-router'

import List from './List'
import Add from './Add'
import Edit from './Edit'

class Class extends React.Component{
    render() {
        const {location,match} = this.props
        console.log(location.pathname,match.url,match.path)
        return (
            <div>
                班级管理
                <Route path={match.path + "/list"} component={List} />
                <Route path={match.path + "/add"} component={Add} />
                <Route path={match.path + "/edit/:id"} component={Edit} />
            </div>
        )
    }

}


export default Class;