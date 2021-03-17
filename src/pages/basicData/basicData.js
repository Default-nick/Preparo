import React from 'react';
import BasicData from './basicData'

export default class BasicDataComponent extends React.Component {
    render(){
        return(
            <section>
                <React.StrictMode>
                    <BasicData/>
                </React.StrictMode>,
            </section>
        )
    }
}
