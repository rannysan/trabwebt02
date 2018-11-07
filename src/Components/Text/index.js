import React from 'react';

const Text = (props) =>{
    return <div class="d-flex justify-content-around flex-column">
        <div class="d-flex justify-content-center">
        <img src={props.Gif} class="rounded mx-auto d-block" width="240px" height="100px" alt="Gif"/>
        </div>
        <div class="m-5">
            <h2>Biografia</h2>
            <p class="text-justify">Em 2016 iniciei o curso superior de Engenharia de Software na Universidade Tecnológica Federal do Paraná (UTFPR). Logo no inicio me apaixonei pelo curso e fiquei muito animado com todas as possibilidades que ele me da. Sempre fui apaixonado por games e sempre tive motivação de fazer os meus, por isso até mesmo antes de entrar na faculdade eu já tentava aprender sozinho. Em virtude disso hoje já planejo o meu Trabalho de Conclusão de Curso seguindo essa vertente criando um jogo voltado para Engenharia de Software.</p>
        </div>
        <div class="d-flex justify-content-center">
        <img src={props.Gif2} class="rounded mx-auto d-block" width="240px" height="100px" alt="Gif"/>
        </div>
        <div class="m-5">
            <h2>Profissão</h2>
            <p class="text-justify">Ainda não trabalhei em nenhuma das áreas do meu interesse, que seriam Web e Games, apenas trabalhei por dois anos em uma empresa Telecom onde eu aprendi lidar com redes. O contato que eu tive com a profissão foi apenas na faculdade e com projetos que faço para práticar.</p>
        </div>
    </div>
}

export default Text;