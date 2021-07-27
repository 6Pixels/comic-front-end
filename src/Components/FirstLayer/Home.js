import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';



class Home extends Component {

    render() {
        return (
            <div id="navbackground">
                <p>hello this home page</p>
            </div>
        )
    }
}
export default withAuth0(Home);