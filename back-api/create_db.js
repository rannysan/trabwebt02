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
    db.run("CREATE TABLE portfolio (title TEXT, desc TEXT, link TEXT)");
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

    db.run("INSERT INTO portfolio VALUES ('T01', 'Replicação do site Geovanna Garcia', 'https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/t01/lucas-tarumoto')");
    db.run("INSERT INTO portfolio VALUES ('TA01', 'Criação de currículo em HTML e CSS', 'https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta01/lucas-tarumoto')");

    db.run("INSERT INTO atividades VALUES ('Graduando em Engenharia de Software')");

    db.run("INSERT INTO habil VALUES ('HTML')");
    db.run("INSERT INTO habil VALUES ('REACT')");
    db.run("INSERT INTO habil VALUES ('BACK-END')");

    db.run("INSERT INTO info (bio, desc) VALUES ('Nascido no Japão, vivi poucos anos lá e acabei me mudando para o Brasil quando jovem. Realizei o Ensino Médio no Colégio Prisma de Pirapózinho. Iniciei minha vida universitária em 2014 na UFSJ de Ouro Branco em Minas Gerais, porém acabei desistindo por não ter afinidade com o curso. Em seguida iniciei em 2016 na UTFPR de Cornélio Procópio no curso de Engenharia de Software onde estou até hoje na graduação.', 'Foi por acaso que acabei entrando em contato com a profissão. Na época do vestibular não sabia que caminho seguir, primeiramente acabei fazendo Engenharia de Bioprocessos, em seguida queria fazer Engenharia Eletrônica, contudo minha nota do ENEM não era alta o suficiente e para não perder tempo entrei em Engenharia de Software. Por ironia do destino o curso me agradou muito e hoje estou aqui!')")
    
    db.run("INSERT INTO links (name, icon) VALUES ('https://github.com/luctaru', 'github-icon.svg')");
    db.run("INSERT INTO links (name, icon) VALUES ('https://www.facebook.com/lucas.tarumoto', 'facebook-icon.svg')");

    console.log('successfully created the table in web.db');

});

db.close();