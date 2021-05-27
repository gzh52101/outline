import React from 'react'
import {withAuth} from '@/utils/hoc'

@withAuth
class Reg extends React.Component{
    render(props) {
        console.log('Reg.props',props);
        return (
            <div>
                Reg
            </div>
        )
    }

}

// Reg = withAuth(Reg);

export default Reg;