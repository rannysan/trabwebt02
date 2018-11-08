import React from 'react';

const Form = (props) =>{
    return  <div class="container mr-auto ml-auto">
    <form action="https://formspree.io/bs.raniel@gmail.com" method="POST">
        <div class="form-group row col-md-8">
                <label for="nome" class="col-form-label">Nome</label>            
                <input type="text" class="form-control" name="name" id="nome" placeholder="Nome"/>           
        </div>

        <div class="form-group row col-md-8">
            <label for="email" class=" col-form-label">E-mail</label>            
            <input type="email" class="form-control" name="email" id="email" placeholder="Seu email"/>          
        </div>

        <div class="form-group row col-md-8">
            <label for="assunto" class=" col-form-label">Assunto</label>           
            <input type="text" class="form-control" name="your-subject" id="assunto" placeholder="Assunto"/>          
        </div>

        <div class="form-group row col-md-8">
            <label for="mensagem" class=" col-form-label">Mensagem</label>          
            <textarea name="message" class="form-control" id="mensagem" placeholder="Mensagem"/>          
        </div>

        <div class="form-group row">
            <div class="col-sm-10">
                <button class="btn btn-outline-secondary" type="submit">Enviar</button>
            </div>
         </div>        
    </form>
    </div>
  
}

export default Form;