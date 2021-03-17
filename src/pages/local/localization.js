import React from 'react';
import Localization  from './localization'

export default class LocalizationComponent extends React.Component {
    render(){
        return(
            <section>
                <React.StrictMode>
                    <Localization/>
                </React.StrictMode>,
            </section>
        )
    }
}