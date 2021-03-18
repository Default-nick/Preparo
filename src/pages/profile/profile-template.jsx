import './profile.css'
import React from 'react'

const Profile = <>
    <div className="profilePanel">
        <span id="profileTitle">Informações Pessoais</span>
        <div className="profileModal">
            <span id="instructionsProfile">Instruções</span>
            <div id="instrucionsLine"></div>
            <span id="textProfile1">Para atualizar suas informações cadastrais, clique na barra vertical em</span>
            <ul>
                <li><i className="icon fas fa-user-circle"></i> para atualizar seu <span className="boldInfo">perfil</span><span className="redEmphasis">*</span> (nome, sobrenome, telefone, links pessoais).</li>
                <li><i className="icon fas fa-map-marked-alt"></i> para atualizar sua <span className="boldInfo">localização</span><span className="redEmphasis">*</span> (CEP, cidade, etc.).</li>
                <li><i className="icon fas fa-address-card"></i>para preencher sua <span className="boldInfo">identificação</span><span className="redEmphasis">*</span> (CPF, data de nascimento, etc.).</li>
                <li><i className="icon fas fa-graduation-cap"></i>para atualizar sua <span className="boldInfo">formação</span><span className="redEmphasis">*</span> (universidade, situação e curso).</li>
                <li><i className="icon fas fa-clipboard"></i>para enviar seu <span className="boldInfo">currículo.</span></li>
                <li><i className="icon fas fa-pencil-ruler"></i>para atualizar suas <span className="boldInfo">habilidades</span> (conteúdos, assuntos, linguagens de programação, etc.).</li>
                <li><i className="icon fas fa-book"></i>para atualizar suas <span className="boldInfo">experiências</span> (estágios, trabalhos voluntários, intercâmbios, etc.).</li>
                <li><i className="icon fas fa-award"></i>para atualizar suas <span className="boldInfo">premiações</span> (ex.: olimpíadas científicas).</li>
            </ul>
            <span className="lightText">Se sentir falta de algum campo, conte-nos por<a id="wpInfo" target="_blank" rel="noreferrer" href="https://wa.me/5511934723784?text=Ol%C3%A1%2C+Preparo%21"><i id="wpIco" className=" fab fa-whatsapp"></i>Whatsapp</a> o que você gostaria de ver por aqui.</span>
            <span className="lightText">Se tiver algum problema com preenchimento, alguma dúvida ou sugestão contate-nos também.</span>
            <span id="finalInfo">* Campos Obrigatórios para a candidatura em uma vaga.</span>
        </div>
    </div>
</>

export {Profile}