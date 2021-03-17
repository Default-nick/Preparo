import React from 'react';
import Profile from './profile'

export default class ProfileComponent extends React.Component {
    render(){
        return(
            <section>
                <React.StrictMode>
                    <Profile/>
                </React.StrictMode>,
            </section>
        )
    }
}