import './header.css'
import React from "react"

// Topo, menu

export default class Header extends React.Component {
    state = {
        modalNotify:false,
        modalProfile:false
    }
    render () {
        // Notificações
        var showNotify = e =>{
            this.setState({modalNotify:!this.state.modalNotify});
        }
        // Menu de perfil
        var showProfile = e =>{
            this.setState({modalProfile:!this.state.modalProfile});
        }
        const notify = this.state.modalNotify;
        const profile = this.state.modalProfile;
        return(
            <section id="header">
                <div className="navMenu">
                    <div id="upIcon">
                        <a href="/">
                            <svg className="logoNavbar" width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M31.873 32.667h-9.747c-5.307 0-9.626-4.358-9.626-9.714V17.71C12.504 12.358 16.819 8 22.127 8h9.747c5.307 0 9.626 4.358 9.626 9.71v5.238c0 5.36-4.319 9.719-9.627 9.719zM22.127 14.69c-1.654 0-2.996 1.355-2.996 3.024v5.239c0 1.669 1.342 3.024 2.997 3.024h9.747c1.654 0 2.996-1.355 2.996-3.024V17.71c0-1.67-1.342-3.024-2.996-3.024h-9.747v.004z" fill="#3B4B5B"></path><path d="M20.656 40.73c0-2.36-1.828-4.268-4.078-4.268-2.254 0-4.078 1.913-4.078 4.269 0 2.36 1.828 4.269 4.078 4.269 2.254 0 4.078-1.91 4.078-4.27z" fill="#C93B59">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className="menu">
                        <a className="menuItems" href="/"> Explorar </a>
                        <a className="menuItems" href="/"> Inscrições </a>
                    </div>
                </div>
                {/* Ícone de notificações */}
                <div id="profileNotify">
                    <div onClick={showNotify} id="notify">
                        <svg width="25" height="24" className="MuiSvgIcon-root" color="rgb(201, 59, 89)" focusable="false" viewBox="0 0 24 24" aria-hidden="true" >
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                            </path>
                        </svg>
                    </div>
                    {/* Ícone de perfil */}
                    <div id="profile">
                        <div onClick={showProfile} id="buttonProfile" >
                            <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="21" r="18" fill="#3B4B5B">
                                </circle>
                            <circle cx="21" cy="14" r="6" fill="#C93B59">
                                </circle>
                                <path d="M34 29.706c0 4.257-6.044 1.285-13.5 1.285S7 33.963 7 29.706C7 25.45 13.044 22 20.5 22S34 25.45 34 29.706z" fill="#fff">
                            </path>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Notificação */}
                {notify &&(
                <div id="modalNotify">
                    <span id="notifyTitle">Notificações</span>
                    <div id="notifyCounter">0</div>
                    <span id="cleanNotify">Limpar notificações</span>
                    <span id="notifyText">Você não tem nenhuma notificação</span>
                </div>)
                }
                {/* Menu do perfil */}
                {profile &&(
                <div id="modalProfile">
                    <span id="modalArrow"><span id="modalArrowInside"></span></span>
                    <a href="/formProfile"><span className="modalProfileItem">Dados básicos</span></a>
                    <span className="modalProfileItem">Currículo</span>
                    <a href="/localization"><span className="modalProfileItem">Localização</span></a>
                    <span className="modalProfileItem">Identificação</span>
                    <span className="modalProfileItem">Formação</span>
                    <span className="modalProfileItem">Habilidades</span>
                    <span className="modalProfileItem">Teste</span>
                    <span className="modalProfileItem">Experiências</span>
                    <span className="modalProfileItem">Premiações</span>
                    <span id="line"></span>
                    <span className="modalProfileItem">
                        <svg id="aboutIcon" width="21" height="21" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.873 32.667h-9.747c-5.307 0-9.626-4.358-9.626-9.714V17.71C12.504 12.358 16.819 8 22.127 8h9.747c5.307 0 9.626 4.358 9.626 9.71v5.238c0 5.36-4.319 9.719-9.627 9.719zM22.127 14.69c-1.654 0-2.996 1.355-2.996 3.024v5.239c0 1.669 1.342 3.024 2.997 3.024h9.747c1.654 0 2.996-1.355 2.996-3.024V17.71c0-1.67-1.342-3.024-2.996-3.024h-9.747v.004z" fill="#3B4B5B"></path><path d="M20.656 40.73c0-2.36-1.828-4.268-4.078-4.268-2.254 0-4.078 1.913-4.078 4.269 0 2.36 1.828 4.269 4.078 4.269 2.254 0 4.078-1.91 4.078-4.27z" fill="#C93B59"></path>
                        </svg>
                        Sobre Nós
                    </span>
                    <span className="modalProfileItem">
                        <svg id="aboutIcon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.844 17.542c-.343.425-.278 1.053.179 1.352a10 10 0 10.212-16.868c-.465.287-.545.913-.213 1.346.332.434.95.51 1.421.234a8.022 8.022 0 11-.172 13.738c-.464-.288-1.084-.227-1.427.198z" fill="#C93B59"></path>
                            <path d="M15.5 10.527h-12" stroke="#6D7679" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M6.5 6.527L3.207 9.82a1 1 0 000 1.414L6.5 14.527" stroke="#293E55" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                        Sair
                    </span>
                </div>)
                }
            </section>
        );
    }
}