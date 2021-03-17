import './localization.css'
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
                    <span id="textEditProfile">CEP <span class="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="12345-678" required></input>
                        <span id="textEditProfile">Cidade <span class="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira o nome de sua cidade atual" required></input>
                        <span id="textEditProfile">Estado <span class="redEmphasis">*</span></span>
                        <input type="text" className="inputProfile" list="stateSelect" placeholder="Selecione o Estado"/>
                        <datalist id="stateSelect" placeholder="Selecione o Estado" required>
                            <option className="optionListRow" unselectable>Selecione o Estado</option>
                            <option className="optionListRow">AC</option>
                            <option className="optionListRow">AL</option>
                            <option className="optionListRow">AM</option>
                            <option className="optionListRow">AP</option>
                            <option className="optionListRow">BA</option>
                            <option className="optionListRow">CE</option>
                            <option className="optionListRow">DF</option>
                            <option className="optionListRow">ES</option>
                            <option className="optionListRow">GO</option>
                            <option className="optionListRow">MA</option>
                            <option className="optionListRow">MG</option>
                            <option className="optionListRow">MS</option>
                            <option className="optionListRow">MT</option>
                            <option className="optionListRow">PA</option>
                            <option className="optionListRow">PB</option>
                            <option className="optionListRow">PE</option>
                            <option className="optionListRow">PI</option>
                            <option className="optionListRow">PR</option>
                            <option className="optionListRow">RJ</option>
                            <option className="optionListRow">RN</option>
                            <option className="optionListRow">RO</option>
                            <option className="optionListRow">RR</option>
                            <option className="optionListRow">RS</option>
                            <option className="optionListRow">SC</option>
                            <option className="optionListRow">SE</option>
                            <option className="optionListRow">SP</option>
                            <option className="optionListRow">TO</option>
                        </datalist>
                        <span id="textEditProfile">Bairro <span class="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira o nome de seu bairro" required></input>
                        <span id="textEditProfile">Endereço <span class="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira seu endereço" required></input>
                        <span id="textEditProfile">Número <span class="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira o número de sua residência" required></input>
                        <span id="textEditProfile">Complemento <span class="redEmphasis">*</span></span>
                        <input className="inputProfile" placeholder="Insira um complemento se achar necessário" required></input>
                    </div>
                </div>
                <button id="submitFormButton">Enviar</button>
            </form>
        );
    }
}
