import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Localization(){
    // Validador para o campo "CEP"
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);
    const [value, setValue] = useState('');
    function cepValidate(cep){
        setValue(cep);
        if(value.length === 8){
            setValue(cep.replace(/^(\d{5})(\d{3}).*/,"$1-$2"));
        }
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="editProfile">
            <span id="profileTitle">Localização</span>
            <div className="cardProfileSection">
                {/* Lado esquerdo */}
                <div className="firstSection">
                    <span id="titleEditProfile">Instruções</span>
                    <span id="textEditProfile">Preencha seus dados de Localização. Sempre os mantenha atualizado.</span>
                </div>
                {/* Lado direito */}
                <div className="secondSection">
                <span id="textEditProfile">CEP <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" name="cepInput" ref={register({ required: true })} type="text" maxLength="9" value={value} onChange={e => cepValidate(e.target.value)} placeholder="12345-678"></input>
                    {errors.cepInput && <span className="redEmphasis">Você precisa inserir um CEP válido</span>}
                    <span id="textEditProfile">Cidade <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" name="cityInput" ref={register({ required: true })} placeholder="Insira o nome de sua cidade atual"></input>
                    {errors.cityInput && <span className="redEmphasis">Você precisa inserir o nome de sua cidade</span>}
                    <span id="textEditProfile">Estado <span className="redEmphasis">*</span></span>
                    <input type="text" className="inputProfile" name="stateInput" ref={register({ required: true })} list="stateSelect" placeholder="Selecione o Estado"/>
                    {errors.stateInput && <span className="redEmphasis">Você precisa inserir o nome de seu estado</span>}
                    <datalist id="stateSelect" width="1500px" placeholder="Selecione o Estado">
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
                    <input className="inputProfile" name="districtInput" ref={register({ required: true })} placeholder="Insira o nome de seu bairro"></input>
                    {errors.districtInput && <span className="redEmphasis">Você precisa inserir o nome de seu bairro</span>}
                    <span id="textEditProfile">Endereço <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" name="addressInput" ref={register({ required: true })} placeholder="Insira seu endereço"></input>
                    {errors.addressInput && <span className="redEmphasis">Você precisa inserir seu endereço</span>}
                    <span id="textEditProfile" >Número <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" name="addresNumberInput" ref={register({ required: true })} type="number" placeholder="Insira o número de sua residência"></input>
                    {errors.addresNumberInput && <span className="redEmphasis">Você precisa inserir o número de sua residência</span>}
                    <span id="textEditProfile">Complemento</span>
                    <input className="inputProfile"  placeholder="Insira um complemento se achar necessário"></input>
                </div>
            </div>
            <input name="formSubmitInput" type="submit" id="submitFormButton" ref={register({ required: true })} label="Enviar"/>
            {errors.formSubmitInput && <span className="redEmphasis">Verifique se preencheu corretamente todos os campos</span>}
        </form>
    );
}
