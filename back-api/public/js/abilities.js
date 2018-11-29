$(document).ready(function () {
    //CONSULTAR DETERMINADA HABILIDADE
    $('#habConButton').click(() => {
        if ($('#habNameBox').val() == '') {
            $('#habStatus').html('');
            $('#habStatus').append("<ul><li>ERRO</li><ul>");
            $('#habNameBox').val('');
        }
        else {
            const requestURL = 'habil/' + $('#habNameBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#habStatus').html('');
                        $('#habStatus').append("<ul><li>" + data.name + "</li><ul>");
                        $('#habNameBox').val('');
                    } else {
                        $('#habStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#habStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODAS HABILIDADE
    $('#habConAllButton').click(() => {
        const requestURL = 'habil/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#habStatus').html('');
                    $('#habStatus').append("<ul id='listaHab'><ul>");
                    data.forEach(element => {
                        $('#listaHab').append("<li>" + element + "</li>");
                    });
                    $('#habNameBox').val('');
                } else {
                    $('#habStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#habStatus').html('');
                }
            },
        });
    });
    //INSERIR HABILIDADE
    $('#habInsButton').click(() => {
        if ($('#habNameBox').val() == '') {
            $('#habStatus').html('');
            $('#habStatus').append("<ul><li>ERRO</li><ul>");
            $('#habNameBox').val('');
        }
        else {
            $.ajax({
                url: 'habil/ins',
                type: 'POST',
                data: {
                    name: $('#habNameBox').val()
                },
                success: (data) => {
                    $('#habStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#habNameBox').val('');
        }
    });
    //REMOVER HABILIDADE
    $('#habRmButton').click(() => {
        if ($('#habNameBox').val() == '') {
            $('#habStatus').html('');
            $('#habStatus').append("<ul><li>ERRO</li><ul>");
            $('#habNameBox').val('');
        }
        else {
            const requestURL = 'habil/rm/' + $('#habNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.name != 'Nao encontrado') {
                        console.log(data.name)
                        $('#habStatus').html('');
                        $('#habStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#habNameBox').val('');
                    }
                    else if (data.name == 'Nao encontrado') {
                        $('#habStatus').html('');
                        $('#habStatus').append("<ul><li>"+ data.name +"</li><ul>");
                        $('#habNameBox').val('');
                    }
                    else {
                        $('#habStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#habStatus').html('');
                    }
                },
            });
            $('#habNameBox').val('');
        }
    });
    //ALTERAR HABILIDADE
    $('#habAltButton').click(() => {
        if ($('#habAltOldNameBox').val() == '' || $('#habAltNewNameBox').val() == '') {
            $('#habStatus').html('');
            $('#habStatus').append("<ul><li>ERRO</li><ul>");
            $('#habAltOldNameBox').val('');
            $('#habAltNewNameBox').val('');
        }
        else {
            const requestURL = 'habil/alt/' + $('#habAltOldNameBox').val() + '/' + $('#habAltNewNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#habStatus').html('');
                        $('#habStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#habNameBox').val('');
                    } else {
                        $('#habStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#habStatus').html('');
                    }
                },
            });
            $('#habAltOldNameBox').val('');
            $('#habAltNewNameBox').val('');
        }
    });
});