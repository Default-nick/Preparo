import './basicData.css';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function BasicData(){
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);
    const [value, setValue] = useState('');
    function phoneValidate(phone){
        setValue(phone);
        if(value.length >= 10){
            setValue(phone.replace(/^(\d\d)(\d{5})(\d{4}).*/,"($1) $2-$3"));
        }
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="editProfile">
            <div className="cardProfileSection">
                <div className="firstSection">
                    <span id="titleEditProfile">Foto do Perfil</span>
                    <span id="textEditProfile">Adicione uma foto em seu perfil</span>
                </div>
                <div className="secondSection">
                    <svg id="profilePic" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" size="100" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
                        </path>
                    </svg>
                    <button id="upPhoto" className="blueButton">Carregar foto</button>
                </div>
            </div>
            <div className="cardProfileSection">
                <div className="firstSection">
                    <span id="titleEditProfile">Email</span>
                    <span id="textEditProfile">Você pode alterar seu email</span>
                </div>
                <div className="secondSection">
                    <span id="textEditProfile">Email <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" name="emailInput" ref={register({ required: true })} placeholder="email@exemplo.com.br"></input>
                    {errors.emailInput && <span className="redEmphasis">Você precisa inserir um email</span>}
                    <button id="upEmail" type="submit" className="blueButton">Atualizar email</button>
                </div>
            </div>
            <div className="cardProfileSection">
                <div className="firstSection">
                    <span id="titleEditProfile">Instruções</span>
                    <span id="textEditProfile">Preencha seus dados de perfil. Sempre mantenha seu telefone atualizado.</span>
                </div>
                <div className="secondSection">
                    <span id="textEditProfile">Nome <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" type="text" name="nameInput" ref={register({ required: true })} placeholder="Digite seu nome"></input>
                    {errors.nameInput && <span className="redEmphasis">Você precisa inserir pelo menos um nome</span>}
                    <span id="textEditProfile">Sobrenome <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" type="text" name="surnameInput" ref={register({ required: true })} placeholder="Digite seu sobrenome"></input>
                    {errors.surnameInput && <span className="redEmphasis">Você precisa inserir pelo menos um sobrenome</span>}
                    <span id="textEditProfile">Telefone <span className="redEmphasis">*</span></span>
                    <input className="inputProfile" maxLength="12" value={value} onChange={e => phoneValidate(e.target.value)} name="phoneNumber" ref={register({ required: true })} placeholder="(00) 00000-0000"></input>
                    {errors.phoneNumber && <span className="redEmphasis">Você precisa inserir um número de telefone com ddd
</span>}
                </div>
            </div>
            <div className="cardProfileSection">
                <div className="firstSection">
                    <span id="titleEditProfile">Links Pessoais</span>
                    <span id="textEditProfile">Compartilhe seu perfil de outras plataformas aqui.</span>
                </div>
                <div className="secondSection">
                    <span id="textEditProfile">Github</span>
                    <input className="inputProfile" placeholder="http://github.com/abcdefghi"></input>
                    <span id="textEditProfile">Behance</span>
                    <input className="inputProfile" placeholder="http://www.behance.net/abcdefghi"></input>
                    <span id="textEditProfile">Linkedin</span>
                    <input className="inputProfile" placeholder="http://www.linkedin.com/in/abcdefghi"></input>
                </div>
            </div>
            <input type="submit" id="submitFormButton" label="Atualizar"/>
        </form>
    );
}