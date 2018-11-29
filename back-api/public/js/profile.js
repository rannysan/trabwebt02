$(document).ready(function () {
    //CONSULTAR DETERMINADO PERFIL
    $('#perfConButton').click(() => {
        if ($('#perfIDBox').val() == '') {
            $('#perfStatus').html('');
            $('#perfStatus').append("<ul><li>ERRO</li><ul>");
            $('#perfIDBox').val('');
        }
        else {
            const requestURL = 'perfil/' + $('#perfIDBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({      
                url: requestURL,
                type: 'GET',
                dataType: 'json',            
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#perfStatus').html('');
                        $('#perfStatus').append("<li>" + data.nome + "</li><ul><li>" + data.biodados + "</li><li><img src='../img/" + data.foto + "' width='200px'></img></li><li><a href = '" + data.curri + "' target='_blank'>Curriculo</a></li><ul>");
                        $('#perfIDBox').val('');
                    } else {
                        $('#perfStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#perfStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODOS PERFIS
    $('#perfConAllButton').click(() => {
        const requestURL = 'perfil/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#perfStatus').html('');
                    $('#perfStatus').append("<ul id='listaPerf'><ul>");
                    data.forEach(element => {
                        $('#listaPerf').append("<li>" + element.nome + "</li><li>" + element.biodados + "</li><li><img src='../img/" + element.foto + "' width='200px'></img></li><li><a href = '" + element.curri + "' target='_blank'>Curriculo</a></li><br />");
                    });
                    $('#perfIDBox').val('');
                } else {
                    $('#portStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#perfIDBox').html('');
                }
            },
        });
    });
    //REMOVER PERFIL
    $('#perfRmButton').click(() => {
        if ($('#perfIDBox').val() == '') {
            $('#perfStatus').html('');
            $('#perfStatus').append("<ul><li>ERRO</li><ul>");
            $('#perfIDBox').val('');
        }
        else {
            const requestURL = 'perfil/rm/' + $('#perfIDBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.title != 'Nao encontrado') {
                        console.log(data.name)
                        $('#perfStatus').html('');
                        $('#perfStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#perfIDBox').val('');
                    }
                    else if (data.title == 'Nao encontrado') {
                        $('#perfStatus').html('');
                        $('#perfStatus').append("<ul><li>"+ data.title +"</li><ul>");
                        $('#perfIDBox').val('');
                    }
                    else {
                        $('#perfStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#perfStatus').html('');
                    }
                },
            });
            $('#perfIDBox').val('');
        }
    });
     //INSERIR PERFIL
     $('#perfInsButton').click(() => {
        $('#perfStatus').html('');
        if ($('#perfMiniNameBox').val() == '' || $('#perfFotoNameBox').val() == '' || $('#perfCurriNameBox').val() == '') {
            $('#perfStatus').html('');
            $('#perfStatus').append("<ul><li>ERRO</li><ul>");
            $('#perfMiniNameBox').val('');
            $('#perfFotoNameBox').val('');
            $('#perfCurriNameBox').val('');
        }
        else {
            $.ajax({
                url: 'perfil/ins',
                type: 'POST',
                data: {
                    nome: $('#perfNomeNameBox').val(),
                    biodados: $('#perfMiniNameBox').val(),
                    foto: $('#perfFotoNameBox').val(),
                    curri: $('#perfCurriNameBox').val()

                },
                success: (data) => {
                    $('#perfStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#perNomeNameBox').val('');
            $('#perfMiniNameBox').val('');
            $('#perfFotoNameBox').val('');
            $('#perfCurriNameBox').val('');
        }
    });
    //ALTERAR PERFIL
    $('#perfAltButton').click(() => {
        $('#perfStatus').html('');
        if ($('#perfAltOldIDBox').val() == '' || $('#perfAltNewNomeBox').val() == '' || $('#perfAltNewMiniBox').val() == '' || $('#perfAltNewFotoBox').val() == '' || $('#perfAltNewCurriBox').val() == '') {
            $('#perfStatus').html('');
            $('#perfStatus').append("<ul><li>ERRO</li><ul>");
            $('#perfAltOldIDBox').val('');
            $('#perfAltNewNomeBox').val('');
            $('#perfAltNewMiniBox').val('');
            $('#perfAltNewFotoBox').val('');
            $('#perfAltNewCurriBox').val('');
        }
        else {
            const requestURL = 'perfil/alt/' + $('#perfAltOldIDBox').val() + '/' + $('#perfAltNewNomeBox').val() + '/'+ $('#perfAltNewMiniBox').val() + '/' + $('#perfAltNewFotoBox').val() + '/' + $('#perfAltNewCurriBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#perfStatus').html('');
                        $('#perfStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#perfAltOldIDBox').val('');
                        $('#perfAltNewNomeBox').val('');
                        $('#perfAltNewMiniBox').val('');
                        $('#perfAltNewFotoBox').val('');
                        $('#perfAltNewCurriBox').val('');
                    } else {
                        $('#perfStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#perfStatus').html('');
                    }
                },
            });
            $('#perfAltOldIDBox').val('');
            $('#perfAltNewNomeBox').val('');
            $('#perfAltNewMiniBox').val('');
            $('#perfAltNewFotoBox').val('');
            $('#perfAltNewCurriBox').val('');
        }
    });
});