import './profile.css'
import React from 'react'

export default class Profile extends React.Component {
    render () {
        return(
            <div className="profilePanel">
                <span id="profileTitle">Informações Pessoais</span>
                <div className="profileModal">
                    <span id="instructionsProfile">Instruções</span>
                    <div id="instrucionsLine"></div>
                    <span id="textProfile1">Para atualizar suas informações cadastrais, clique na barra vertical em</span>
                    <ul>
                        <li><i class="icon fas fa-user-circle"></i> para atualizar seu <span class="boldInfo">perfil</span><span class="redEmphasis">*</span> (nome, sobrenome, telefone, links pessoais).</li>
                        <li><i class="icon fas fa-map-marked-alt"></i> para atualizar sua <span class="boldInfo">localização</span><span class="redEmphasis">*</span> (CEP, cidade, etc.).</li>
                        <li><i class="icon fas fa-address-card"></i>para preencher sua <span class="boldInfo">identificação</span><span class="redEmphasis">*</span> (CPF, data de nascimento, etc.).</li>
                        <li><i class="icon fas fa-graduation-cap"></i>para atualizar sua <span class="boldInfo">formação</span><span class="redEmphasis">*</span> (universidade, situação e curso).</li>
                        <li><i class="icon fas fa-clipboard"></i>para enviar seu <span class="boldInfo">currículo.</span></li>
                        <li><i class="icon fas fa-pencil-ruler"></i>para atualizar suas <span class="boldInfo">habilidades</span> (conteúdos, assuntos, linguagens de programação, etc.).</li>
                        <li><i class="icon fas fa-book"></i>para atualizar suas <span class="boldInfo">experiências</span> (estágios, trabalhos voluntários, intercâmbios, etc.).</li>
                        <li><i class="icon fas fa-award"></i>para atualizar suas <span class="boldInfo">premiações</span> (ex.: olimpíadas científicas).</li>
                    </ul>
                    <span class="lightText">Se sentir falta de algum campo, conte-nos por<a id="wpInfo" target="_blank" rel="noreferrer" href="https://wa.me/5511934723784?text=Ol%C3%A1%2C+Preparo%21"><i id="wpIco" class=" fab fa-whatsapp"></i>Whatsapp</a> o que você gostaria de ver por aqui.</span>
                    <span class="lightText">Se tiver algum problema com preenchimento, alguma dúvida ou sugestão contate-nos também.</span>
                    <span id="finalInfo">* Campos Obrigatórios para a candidatura em uma vaga.</span>
                </div>
            </div>
        );
    }
}
