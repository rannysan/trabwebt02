//express
const express = require('express');
const app = express();
// biblioteca SQLITE3
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('web.db');

const cors = require('cors');

//diretorio "estático"
app.use(express.static('public'));
app.use(cors());

//PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//INTERESSES--------------------------------------------------------------
//GET da lista de interesses
app.get('/interesses', (req, res) => {
    db.all('SELECT name FROM inter', (err, rows) => {
        console.log(rows);
        const allIntnames = rows.map(e => e.name);
        console.log(allIntnames);
        res.send(allIntnames);
    });
});

//GET determinado interesse
app.get('/interesses/:intid', (req, res) => {
    const nomeProcurado = req.params.intid;

    db.all(
        'SELECT * FROM inter WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

// POST dados na lista de interesses
app.post('/interesses/ins', (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO inter VALUES ($name)',
        {
            $name: req.body.name,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/interesses)' });
            } else {
                res.send({ message: 'successfully run app.post(/interesses)' });
            }
        }
    );
});

// GET determinado interesse e remocao
app.get('/interesses/rm/:intid', (req, res) => {

    const nomeProcurado = req.params.intid;
    db.all(
        'DELETE FROM inter WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//GET determinada interesse e alterada
app.get('/interesses/alt/:intold/:intnew', (req, res) => {

    const nomeProcurado = req.params.intold;
    const nomeAlterado = req.params.intnew
    db.all(
        'UPDATE inter SET name = $new WHERE name=$old',
        {
            $new: nomeAlterado,
            $old: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//IDIOMAS--------------------------------------------------------------
//GET da lista de idiomas
app.get('/idiomas', (req, res) => {
    db.all('SELECT name FROM idiomas', (err, rows) => {
        console.log(rows);
        const allIdioNames = rows.map(e => e.name);
        console.log(allIdioNames);
        res.send(allIdioNames);
    });
});

//GET determinado idioma
app.get('/idiomas/:idioid', (req, res) => {
    const nomeProcurado = req.params.idioid;

    db.all(
        'SELECT * FROM idiomas WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

// POST dados na lista de idiomas
app.post('/idiomas/ins', (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO idiomas VALUES ($name)',
        {
            $name: req.body.name,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/idiomas)' });
            } else {
                res.send({ message: 'successfully run app.post(/idiomas)' });
            }
        }
    );
});

// GET determinado idioma e remocao
app.get('/idiomas/rm/:idioid', (req, res) => {

    const nomeProcurado = req.params.idioid;
    db.all(
        'DELETE FROM idiomas WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//GET determinado idioma e alterada
app.get('/idiomas/alt/:idioold/:idionew', (req, res) => {

    const nomeProcurado = req.params.idioold;
    const nomeAlterado = req.params.idionew
    db.all(
        'UPDATE idiomas SET name = $new WHERE name=$old',
        {
            $new: nomeAlterado,
            $old: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//FORMACAO--------------------------------------------------------------
//GET da lista de formacao
app.get('/formacao', (req, res) => {
    db.all('SELECT name FROM formacao', (err, rows) => {
        console.log(rows);
        const allFormnames = rows.map(e => e.name);
        console.log(allFormnames);
        res.send(allFormnames);
    });
});

//GET determinado formacao
app.get('/formacao/:formid', (req, res) => {
    const nomeProcurado = req.params.formid;

    db.all(
        'SELECT * FROM formacao WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

// POST dados na lista de formacao
app.post('/formacao/ins', (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO formacao VALUES ($name)',
        {
            $name: req.body.name,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/formacao)' });
            } else {
                res.send({ message: 'successfully run app.post(/formacao)' });
            }
        }
    );
});

// GET determinado formacao e remocao
app.get('/formacao/rm/:formid', (req, res) => {

    const nomeProcurado = req.params.formid;
    db.all(
        'DELETE FROM formacao WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//GET determinada formacao e alterada
app.get('/formacao/alt/:formold/:formnew', (req, res) => {

    const nomeProcurado = req.params.formold;
    const nomeAlterado = req.params.formnew
    db.all(
        'UPDATE formacao SET name = $new WHERE name=$old',
        {
            $new: nomeAlterado,
            $old: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//ATIVIDADES--------------------------------------------------------------
//GET da lista de atividades
app.get('/atividades', (req, res) => { 
    db.all('SELECT name FROM atividades', (err, rows) => {
        console.log(rows);
        const allAtivnames = rows.map(e => e.name);
        console.log(allAtivnames);
        res.send(allAtivnames);
    });
});

//GET determinada atividade
app.get('/atividades/:ativid', (req, res) => {
    const nomeProcurado = req.params.ativid;

    db.all(
        'SELECT * FROM atividades WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

// POST dados na lista de atividades
app.post('/atividades/ins', (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO atividades VALUES ($name)',
        {
            $name: req.body.name,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/atividades)' });
            } else {
                res.send({ message: 'successfully run app.post(/atividades)' });
            }
        }
    );
});

// GET determinada atividade e remocao
app.get('/atividades/rm/:ativid', (req, res) => {

    const nomeProcurado = req.params.ativid;
    db.all(
        'DELETE FROM atividades WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//GET determinada atividade e alterada
app.get('/atividades/alt/:ativold/:ativnew', (req, res) => {

    const nomeProcurado = req.params.ativold;
    const nomeAlterado = req.params.ativnew
    db.all(
        'UPDATE atividades SET name = $new WHERE name=$old',
        {
            $new: nomeAlterado,
            $old: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//HABILIDADES--------------------------------------------------------------
//GET da lista de habilidades
app.get('/habil', (req, res) => {
    db.all('SELECT name FROM habil', (err, rows) => {
        console.log(rows);
        const allHabilnames = rows.map(e => e.name);
        console.log(allHabilnames);
        res.send(allHabilnames);
    });
});

// GET determinada habilidade
app.get('/habil/:habid', (req, res) => {
    const nomeProcurado = req.params.habid;

    db.all(
        'SELECT * FROM habil WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

// POST dados na lista de habilidades
app.post('/habil/ins', (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO habil VALUES ($name)',
        {
            $name: req.body.name,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/interesses)' });
            } else {
                res.send({ message: 'successfully run app.post(/interesses)' });
            }
        }
    );
});

// GET determinada habilidade e remocao
app.get('/habil/rm/:habid', (req, res) => {

    const nomeProcurado = req.params.habid;
    db.all(
        'DELETE FROM habil WHERE name=$name',
        {
            $name: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
//GET determinada habilidade e alterada
app.get('/habil/alt/:habold/:habnew', (req, res) => {

    const nomeProcurado = req.params.habold;
    const nomeAlterado = req.params.habnew
    db.all(
        'UPDATE habil SET name = $new WHERE name=$old',
        {
            $new: nomeAlterado,
            $old: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});

//PERFIL--------------------------------------------
//GET da lista de perfis
app.get('/perfil', (req, res) => {
    db.all('SELECT * FROM perfil', (err, rows) => {
        console.log(rows);
        const allPerf = rows.map(e => e);
        console.log(allPerf);
        res.send(allPerf);
    });
});
//GET determinado perfil
app.get('/perfil/:perfid', (req, res) => {
    const idProcurado = req.params.perfid;

    db.all(
        'SELECT * FROM perfil WHERE id=$id',
        {
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows[0]);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// GET determinada perfil e remocao
app.get('/perfil/rm/:perfid', (req, res) => {

    const idProcurado = req.params.perfid;
    db.all(
        'DELETE FROM perfil WHERE id=$id',
        {
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ title: 'Nao encontrado' });
            }
        }
    );
});
//GET determinada perfil e alterada
app.get('/perfil/alt/:perfID/:perfMiniNew/:perfFotoNew/:portCurriNew', (req, res) => {

    const idProcurado = req.params.perfID;
    const nomeAlterado = req.params.perfNomeNew;
    const miniAlterado = req.params.perfMiniNew;
    const fotoAlterado = req.params.perfFotoNew;
    const curriAlterado = req.params.portCurriNew;
    db.all(
        'UPDATE perfil SET nome = $nome, biodados = $biodados, foto = $foto, curri = $curri WHERE id=$id',
        {
            $nome: nomeAlterado,
            $biodados: miniAlterado,
            $foto: fotoAlterado,
            $curri: curriAlterado,
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// POST dados na lista de perfil
app.post('/perfil/ins', (req, res) => {

    db.run(
        'INSERT INTO perfil (nome, biodados, foto, curri) VALUES ($nome, $biodados, $foto, $curri)',
        {
            $nome: req.body.nome,
            $biodados: req.body.biodados,
            $foto: req.body.foto,
            $curri: req.body.curri,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/perfil)' });
            } else {
                res.send({ message: 'successfully run app.post(/perfil)' });
            }
        }
    );
});

//PORTFOLIO--------------------------------------------
//GET da lista de trabalhos
app.get('/portfolio', (req, res) => {
    db.all('SELECT * FROM portfolio', (err, rows) => {
        console.log(rows);
        const allTrab = rows.map(e => e);
        console.log(allTrab);
        res.send(allTrab);
    });
});
//GET determinado trabalho
app.get('/portfolio/:portid', (req, res) => {
    const tituloProcurado = req.params.portid;

    db.all(
        'SELECT * FROM portfolio WHERE title=$title',
        {
            $title: tituloProcurado
        },
        (err, rows) => {
            console.log(rows[0]);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// GET determinada trabalho e remocao
app.get('/portfolio/rm/:portid', (req, res) => {

    const nomeProcurado = req.params.portid;
    db.all(
        'DELETE FROM portfolio WHERE title=$title',
        {
            $title: nomeProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ title: 'Nao encontrado' });
            }
        }
    );
});
//GET determinada trabalho e alterada
app.get('/portfolio/alt/:portTitleOld/:portTitleNew/:portDescNew/:portLinkNew', (req, res) => {

    const tituloProcurado = req.params.portTitleOld;
    const tituloAlterado = req.params.portTitleNew;
    const descAlterado = req.params.portDescNew;
    const dataAlterado = req.params.portLinkNew;
    db.all(
        'UPDATE portfolio SET title = $title, desc = $desc, link = $link WHERE title=$old',
        {
            $title: tituloAlterado,
            $desc: descAlterado,
            $link: dataAlterado,
            $old: tituloProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// POST dados na lista de trabalho
app.post('/portfolio/ins', (req, res) => {
    console.log(req.body.title);

    db.run(
        'INSERT INTO portfolio VALUES ($title, $desc, $data)',
        {
            $title: req.body.title,
            $desc: req.body.desc,
            $data: req.body.link,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/portfolio)' });
            } else {
                res.send({ message: 'successfully run app.post(/portfolio)' });
            }
        }
    );
});

//INFO--------------------------------------------
//GET da lista de info
app.get('/info', (req, res) => {
    db.all('SELECT * FROM info', (err, rows) => {
        console.log(rows);
        const allInfo = rows.map(e => e);
        console.log(allInfo);
        res.send(allInfo);
    });
});
//GET determinada info
app.get('/info/:infoid', (req, res) => {
    const idProcurado = req.params.infoid;

    db.all(
        'SELECT * FROM info WHERE id=$id',
        {
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows[0]);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// GET determinada info e remocao
app.get('/info/rm/:infoid', (req, res) => {

    const idProcurado = req.params.infoid;
    db.all(
        'DELETE FROM info WHERE id=$id',
        {
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ title: 'Nao encontrado' });
            }
        }
    );
});
//GET determinada info e alterada
app.get('/info/alt/:infoID/:infoBioNew/:infoDescNew', (req, res) => {

    const idProcurado = req.params.infoID;
    const bioAlterado = req.params.infoBioNew;
    const descAlterado = req.params.infoDescNew;

    db.all(
        'UPDATE info SET bio = $bio, desc = $desc WHERE id=$id',
        {
            $bio: bioAlterado,
            $desc: descAlterado,
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// POST dados na lista de info
app.post('/info/ins', (req, res) => {

    db.run(
        'INSERT INTO info (bio, desc) VALUES ($bio, $desc)',
        {
            $bio: req.body.bio,
            $desc: req.body.desc,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/info)' });
            } else {
                res.send({ message: 'successfully run app.post(/info)' });
            }
        }
    );
});

//LINKS--------------------------------------------
//GET da lista de links
app.get('/links', (req, res) => {
    db.all('SELECT * FROM links', (err, rows) => {
        console.log(rows);
        const allLink = rows.map(e => e);
        console.log(allLink);
        res.send(allLink);
    });
});
//GET determinado link
app.get('/links/:linkid', (req, res) => {
    const idProcurado = req.params.linkid;

    db.all(
        'SELECT * FROM links WHERE id=$id',
        {
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows[0]);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// GET determinado link e remocao
app.get('/links/rm/:linkid', (req, res) => {

    const idProcurado = req.params.linkid;
    db.all(
        'DELETE FROM links WHERE id=$id',
        {
            $id: idProcurado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ title: 'Nao encontrado' });
            }
        }
    );
});
//GET determinado link e alterada
app.get('/links/alt/:linkID/:linkNew/:iconNew', (req, res) => {

    const idProcurado = req.params.infoID;
    const linkAlterado = req.params.linkNew;
    const iconAlterado = req.params.iconNew;

    db.all(
        'UPDATE links SET name = $name, icon = $icon WHERE id=$id',
        {
            $name: bioAlterado,
            $icon: linkAlterado,
            $id: iconAlterado
        },
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.send(rows[0]);
            } else {
                res.send({ name: 'Nao encontrado' });
            }
        }
    );
});
// POST dados na lista de links
app.post('/links/ins', (req, res) => {

    db.run(
        'INSERT INTO links (name, icon) VALUES ($name, $icon)',
        {
            $name: req.body.name,
            $icon: req.body.icon,
        },
        (err) => {
            if (err) {
                res.send({ message: 'error in app.post(/link)' });
            } else {
                res.send({ message: 'successfully run app.post(/link)' });
            }
        }
    );
});

//server
app.listen(4000, () => {
    console.log('Server started at http://localhost:4000/');
});