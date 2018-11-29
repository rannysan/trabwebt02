$(document).ready(function () {
    //CONSULTAR DETERMINADA ATIVIDADE
    $('#ativConButton').click(() => {
        if ($('#ativNameBox').val() == '') {
            $('#ativStatus').html('');
            $('#ativStatus').append("<ul><li>ERRO</li><ul>");
            $('#ativNameBox').val('');
        }
        else {
            const requestURL = 'atividades/' + $('#ativNameBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#ativStatus').html('');
                        $('#ativStatus').append("<ul><li>" + data.name + "</li><ul>");
                        $('#ativNameBox').val('');
                    } else {
                        $('#ativStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#ativStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODAS ATIVIDADES
    $('#ativConAllButton').click(() => {
        const requestURL = 'atividades/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#ativStatus').html('');
                    $('#ativStatus').append("<ul id='listaAtiv'><ul>");
                    data.forEach(element => {
                        $('#listaAtiv').append("<li>" + element + "</li>");
                    });
                    $('#ativNameBox').val('');
                } else {
                    $('#ativStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#ativStatus').html('');
                }
            },
        });
    });
    //INSERIR ATIVIDADE
    $('#ativInsButton').click(() => {
        if ($('#ativNameBox').val() == '') {
            $('#ativStatus').html('');
            $('#ativStatus').append("<ul><li>ERRO</li><ul>");
            $('#ativNameBox').val('');
        }
        else {
            $.ajax({
                url: 'atividades/ins',
                type: 'POST',
                data: {
                    name: $('#ativNameBox').val()
                },
                success: (data) => {
                    $('#ativStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#ativNameBox').val('');
        }
    });
    //REMOVER ATIVIDADES
    $('#ativRmButton').click(() => {
        if ($('#ativNameBox').val() == '') {
            $('#ativStatus').html('');
            $('#ativStatus').append("<ul><li>ERRO</li><ul>");
            $('#ativNameBox').val('');
        }
        else {
            const requestURL = 'atividades/rm/' + $('#ativNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.name != 'Nao encontrado') {
                        console.log(data.name)
                        $('#ativStatus').html('');
                        $('#ativStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#ativNameBox').val('');
                    }
                    else if (data.name == 'Nao encontrado') {
                        $('#ativStatus').html('');
                        $('#ativStatus').append("<ul><li>"+ data.name +"</li><ul>");
                        $('#ativNameBox').val('');
                    } else {
                        $('#ativStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#ativStatus').html('');
                    }
                },
            });
            $('#ativNameBox').val('');
        }
    });
    //ALTERAR ATIVIDADE
    $('#ativAltButton').click(() => {
        if ($('#ativAltOldNameBox').val() == '' || $('#ativAltNewNameBox').val() == '') {
            $('#ativStatus').html('');
            $('#ativStatus').append("<ul><li>ERRO</li><ul>");
            $('#ativAltOldNameBox').val('');
            $('#ativAltNewNameBox').val('');
        }
        else {
            const requestURL = 'atividades/alt/' + $('#ativAltOldNameBox').val() + '/' + $('#ativAltNewNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#ativStatus').html('');
                        $('#ativStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#intNameBox').val('');
                    } else {
                        $('#ativStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#ativStatus').html('');
                    }
                },
            });
            $('#ativAltOldNameBox').val('');
            $('#ativAltNewNameBox').val('');
        }
    });
});