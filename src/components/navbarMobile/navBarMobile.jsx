import './navBarMobile.css'
import React from "react"

// NavBar Mobile, menu

export default class NavBarMobile extends React.Component {
    state = {
        modalNotify:false,
    }
    render () {
        // Notificação Mobile
        var showNotify = e =>{
            this.setState({modalNotify:!this.state.modalNotify});
        }
        const notify = this.state.modalNotify;
        return(
            // Menu inferior, disponível apenas abaixo de 768px
            <section id="navBarMobile">
                <div className="botMenu">
                    <div id="searchMobileButton">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 14.571a1 1 0 00-1.406 1.423l1.405-1.423zm4.95 7.696a1 1 0 001.405-1.424L20.7 22.267zm-5.246-13.38c0 3.484-2.865 6.331-6.428 6.331v2c4.642 0 8.428-3.717 8.428-8.331h-2zm-6.428 6.331c-3.563 0-6.428-2.847-6.428-6.331h-2c0 4.614 3.786 8.331 8.428 8.331v-2zM2.598 8.887c0-3.485 2.865-6.332 6.428-6.332v-2C4.384.555.598 4.273.598 8.887h2zm6.428-6.332c3.563 0 6.428 2.847 6.428 6.332h2c0-4.614-3.786-8.332-8.428-8.332v2zm5.318 13.44l6.356 6.272 1.405-1.424-6.356-6.272-1.405 1.423z" fill="currentColor">
                            </path>
                        </svg>
                        <span id="mobileIcoText">explorar</span>
                    </div>
                    <div id="subscribeMobileButton">
                        <svg width="25" height="25" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="4.444" width="25" height="15.556" rx="2" fill="currentColor"></rect>
                            <path d="M8.25 1h8.5a1 1 0 011 1v9.333a1 1 0 01-1 1h-8.5a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" strokeWidth="2">
                        </path>
                        </svg>
                            <span id="mobileIcoText">inscrições</span>
                    </div>
                    <div onClick={showNotify} id="mobileNotifyButton">
                        <svg className="MuiSvgIcon-root" width="25" height="25" color="gray" focusable="false" viewBox="0 0 24 24">
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                                </path>
                                </svg>
                            <span id="mobileIcoText">notificações</span>
                        </div>
                    </div>
                    {/* Model Notificação */}
                {notify &&(
                <div id="modalNotify">
                    <span id="notifyTitle">Notificações</span>
                    <div id="notifyCounter">0</div>
                    <span id="cleanNotify">Limpar notificações</span>
                    <span id="notifyText">Você não tem nenhuma notificação</span>
                </div>)
                }
            </section>
        );
    }
}