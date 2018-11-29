$(document).ready(function () {
    //CONSULTAR DETERMINADO INTERESSE
    $('#intConButton').click(() => {
        if ($('#intNameBox').val() == '') {
            $('#intStatus').html('');
            $('#intStatus').append("<ul><li>ERRO</li><ul>");
            $('#intNameBox').val('');
        }
        else {
            const requestURL = 'interesses/' + $('#intNameBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#intStatus').html('');
                        $('#intStatus').append("<ul><li>" + data.name + "</li><ul>");
                        $('#intNameBox').val('');
                    } else {
                        $('#intStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#intStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODOS INTERESSES
    $('#intConAllButton').click(() => {
        const requestURL = 'interesses/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#intStatus').html('');
                    $('#intStatus').append("<ul id='listaInt'><ul>");
                    data.forEach(element => {
                        $('#listaInt').append("<li>" + element + "</li>");
                    });
                    $('#intNameBox').val('');
                } else {
                    $('#intStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#intStatus').html('');
                }
            },
        });
    });
    //INSERIR INTERESSE
    $('#intInsButton').click(() => {
        if ($('#intNameBox').val() == '') {
            $('#intStatus').html('');
            $('#intStatus').append("<ul><li>ERRO</li><ul>");
            $('#intNameBox').val('');
        }
        else {
            $.ajax({
                url: 'interesses/ins',
                type: 'POST',
                data: {
                    name: $('#intNameBox').val()
                },
                success: (data) => {
                    $('#intStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#intNameBox').val('');
        }
    });
    //REMOVER INTERESSES
    $('#intRmButton').click(() => {
        if ($('#intNameBox').val() == '') {
            $('#intStatus').html('');
            $('#intStatus').append("<ul><li>ERRO</li><ul>");
            $('#intNameBox').val('');
        }
        else {
            const requestURL = 'interesses/rm/' + $('#intNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.name != 'Nao encontrado') {
                        console.log(data.name)
                        $('#intStatus').html('');
                        $('#intStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#intNameBox').val('');
                    }
                    else if (data.name == 'Nao encontrado') {
                        $('#intStatus').html('');
                        $('#intStatus').append("<ul><li>"+ data.name +"</li><ul>");
                        $('#intNameBox').val('');
                    } else {
                        $('#intStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#intStatus').html('');
                    }
                },
            });
            $('#intNameBox').val('');
        }
    });
    //ALTERAR INTERESSES
    $('#intAltButton').click(() => {
        if ($('#intAltOldNameBox').val() == '' || $('#intAltNewNameBox').val() == '') {
            $('#intStatus').html('');
            $('#intStatus').append("<ul><li>ERRO</li><ul>");
            $('#intAltOldNameBox').val('');
            $('#intAltNewNameBox').val('');
        }
        else {
            const requestURL = 'interesses/alt/' + $('#intAltOldNameBox').val() + '/' + $('#intAltNewNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#intStatus').html('');
                        $('#intStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#intNameBox').val('');
                    } else {
                        $('#intStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#intStatus').html('');
                    }
                },
            });
            $('#intAltOldNameBox').val('');
            $('#intAltNewNameBox').val('');
        }
    });
});