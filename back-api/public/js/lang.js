$(document).ready(function () {
    //CONSULTAR DETERMINADO IDIOMAS
    $('#idioConButton').click(() => {
        if ($('#idioNameBox').val() == '') {
            $('#idioStatus').html('');
            $('#idioStatus').append("<ul><li>ERRO</li><ul>");
            $('#idioNameBox').val('');
        }
        else {
            const requestURL = 'idiomas/' + $('#idioNameBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#idioStatus').html('');
                        $('#idioStatus').append("<ul><li>" + data.name + "</li><ul>");
                        $('#idioNameBox').val('');
                    } else {
                        $('#idioStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#idioStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODOS IDIOMAS
    $('#idioConAllButton').click(() => {
        const requestURL = 'idiomas/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#idioStatus').html('');
                    $('#idioStatus').append("<ul id='listaIdio'><ul>");
                    data.forEach(element => {
                        $('#listaIdio').append("<li>" + element + "</li>");
                    });
                    $('#idioNameBox').val('');
                } else {
                    $('#idioStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#idioStatus').html('');
                }
            },
        });
    });
    //INSERIR IDIOMAS
    $('#idioInsButton').click(() => {
        if ($('#idioNameBox').val() == '') {
            $('#idioStatus').html('');
            $('#idioStatus').append("<ul><li>ERRO</li><ul>");
            $('#idioNameBox').val('');
        }
        else {
            $.ajax({
                url: 'idiomas/ins',
                type: 'POST',
                data: {
                    name: $('#idioNameBox').val()
                },
                success: (data) => {
                    $('#idioStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#idioNameBox').val('');
        }
    });
    //REMOVER IDIOMAS
    $('#idioRmButton').click(() => {
        if ($('#idioNameBox').val() == '') {
            $('#idioStatus').html('');
            $('#idioStatus').append("<ul><li>ERRO</li><ul>");
            $('#idioNameBox').val('');
        }
        else {
            const requestURL = 'idiomas/rm/' + $('#idioNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.name != 'Nao encontrado') {
                        console.log(data.name)
                        $('#idioStatus').html('');
                        $('#idioStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#idioNameBox').val('');
                    }
                    else if (data.name == 'Nao encontrado') {
                        $('#idioStatus').html('');
                        $('#idioStatus').append("<ul><li>"+ data.name +"</li><ul>");
                        $('#idioNameBox').val('');
                    } else {
                        $('#idioStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#idioStatus').html('');
                    }
                },
            });
            $('#idioNameBox').val('');
        }
    });
    //ALTERAR IDIOMAS
    $('#idioAltButton').click(() => {
        if ($('#idioAltOldNameBox').val() == '' || $('#idioAltNewNameBox').val() == '') {
            $('#idioStatus').html('');
            $('#idioStatus').append("<ul><li>ERRO</li><ul>");
            $('#idioAltOldNameBox').val('');
            $('#idioAltNewNameBox').val('');
        }
        else {
            const requestURL = 'idiomas/alt/' + $('#idioAltOldNameBox').val() + '/' + $('#idioAltNewNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#idioStatus').html('');
                        $('#idioStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#idioNameBox').val('');
                    } else {
                        $('#idioStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#idioStatus').html('');
                    }
                },
            });
            $('#idioAltOldNameBox').val('');
            $('#idioAltNewNameBox').val('');
        }
    });
});