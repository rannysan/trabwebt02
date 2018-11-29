const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('web.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
    // create a new database table:
    db.run("CREATE TABLE perfil (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, biodados TEXT, foto TEXT, curri TEXT)");
    db.run("CREATE TABLE inter (name TEXT)");
    db.run("CREATE TABLE idiomas (name TEXT)");
    db.run("CREATE TABLE formacao (name TEXT)");
    db.run("CREATE TABLE portfolio (title TEXT, desc TEXT, data TEXT)");
    db.run("CREATE TABLE atividades (name TEXT)");
    db.run("CREATE TABLE habil (name TEXT)");
    db.run("CREATE TABLE info (id INTEGER PRIMARY KEY AUTOINCREMENT, bio TEXT, desc TEXT)");
    db.run("CREATE TABLE links (id INTEGER PRIMARY KEY AUTOINCREMENT, name text, icon TEXT)");

    // insert data:
    db.run("INSERT INTO perfil (nome, biodados, foto, curri) VALUES ('Raniel C. B. Santos','Meu nome é Raniel, nasci em coruripe AL e me mudei para Dois Córregos interior de SP onde morei 20 anos e agora estou morando em Cornélio Procópio e cursando Engenharia de Software na UTFPR','profile.jpg', 'curriculum.pdf')");

    db.run("INSERT INTO inter VALUES ('Designe de Games')");
    db.run("INSERT INTO inter VALUES ('Desenvolvimento Web')");
    db.run("INSERT INTO inter VALUES ('Games')");
    db.run("INSERT INTO inter VALUES ('Desenhar')");

    db.run("INSERT INTO idiomas VALUES ('Português - Nativo')");
    db.run("INSERT INTO idiomas VALUES ('Inglês - Intermediario')");
    
    db.run("INSERT INTO formacao VALUES ('Colégio Cenecista - 2013')");

    db.run("INSERT INTO portfolio VALUES ('TA01', 'Criação de currículo utlizando apenas html e css', '15/09/2018')");
    db.run("INSERT INTO portfolio VALUES ('T01', 'Replicação do site de casamentos Geovanna Garcia, utilizando apenas HTML e CSS.', '25/10/2018')");
    db.run("INSERT INTO portfolio VALUES ('T02', 'Criação de portifólio utilizando React.', '03/11/2018')");
    

    db.run("INSERT INTO atividades VALUES ('Desenvolvimento de Games')");

    db.run("INSERT INTO habil VALUES ('CSS3')");
    db.run("INSERT INTO habil VALUES ('Java Script')");
    db.run("INSERT INTO habil VALUES ('HTML')");

    db.run("INSERT INTO info (bio, desc) VALUES ('Em 2016 iniciei o curso superior de Engenharia de Software na Universidade Tecnológica Federal do Paraná (UTFPR). Logo no inicio me apaixonei pelo curso e fiquei muito animado com todas as possibilidades que ele me da. Sempre fui apaixonado por games e sempre tive motivação de fazer os meus, por isso até mesmo antes de entrar na faculdade eu já tentava aprender sozinho. Em virtude disso hoje já planejo o meu Trabalho de Conclusão de Curso seguindo essa vertente criando um jogo voltado para Engenharia de Software', 'Ainda não trabalhei em nenhuma das áreas do meu interesse, que seriam Web e Games, apenas trabalhei por dois anos em uma empresa Telecom onde eu aprendi lidar com redes. O contato que eu tive com a profissão foi apenas na faculdade e com projetos que faço para práticar.')")
    
    db.run("INSERT INTO links (name, icon) VALUES ('https://github.com/rannysan', 'GitHub')");
    db.run("INSERT INTO links (name, icon) VALUES ('https://www.facebook.com/ranny.santos.7', 'Facebook')");
    db.run("INSERT INTO links (name, icon) VALUES ('https://www.instagram.com/rannysantos/', 'Instagram')");

    console.log('successfully created the table in web.db');

});

db.close();