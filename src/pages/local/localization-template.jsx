import React from 'react'

export default class Localization extends React.Component {
    render () {
        return(
            <form className="editProfile">
                <span id="profileTitle">Localização</span>
                <div className="cardProfileSection">
                    <div className="firstSection">
                        <span id="titleEditProfile">Instruções</span>
                        <span id="textEditProfile">Preencha seus dados de Localização. Sempre os mantenha atualizado.</span>
                    </div>
                    <div className="secondSection">
                    <span id="textEditProfile">CEP <span className="redEmphasis">*</span></span>
                        <input className="inputProfile" type="number" placeholder="12345-678" required></input>
                        <span id="textEditProfile">Cidade <span className="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira o nome de sua cidade atual" required></input>
                        <span id="textEditProfile">Estado <span className="redEmphasis">*</span></span>
                        <input type="text" className="inputProfile" list="stateSelect" placeholder="Selecione o Estado"/>
                        <datalist id="stateSelect" placeholder="Selecione o Estado" required>
                            <option>Selecione o Estado</option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AM</option>
                            <option>AP</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MG</option>
                            <option>MS</option>
                            <option>MT</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>PR</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>RS</option>
                            <option>SC</option>
                            <option>SE</option>
                            <option>SP</option>
                            <option>TO</option>
                        </datalist>
                        <span id="textEditProfile">Bairro <span className="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira o nome de seu bairro" required></input>
                        <span id="textEditProfile">Endereço <span className="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira seu endereço" required></input>
                        <span id="textEditProfile" >Número <span className="redEmphasis">*</span></span>
                        <input className="inputProfile" type="number" placeholder="Insira o número de sua residência" required></input>
                        <span id="textEditProfile">Complemento <span className="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira um complemento se achar necessário" required></input>
                    </div>
                </div>
                <button id="submitFormButton">Enviar</button>
            </form>
        );
    }
}
