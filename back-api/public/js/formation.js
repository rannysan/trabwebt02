$(document).ready(function () {
    //CONSULTAR DETERMINADO FORMACAO
    $('#formConButton').click(() => {
        if ($('#formNameBox').val() == '') {
            $('#formStatus').html('');
            $('#formStatus').append("<ul><li>ERRO</li><ul>");
            $('#formNameBox').val('');
        }
        else {
            const requestURL = 'formacao/' + $('#formNameBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#formStatus').html('');
                        $('#formStatus').append("<ul><li>" + data.name + "</li><ul>");
                        $('#formNameBox').val('');
                    } else {
                        $('#formStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#formStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODOS FORMACAO
    $('#formConAllButton').click(() => {
        const requestURL = 'formacao/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#formStatus').html('');
                    $('#formStatus').append("<ul id='listaForm'><ul>");
                    data.forEach(element => {
                        $('#listaForm').append("<li>" + element + "</li>");
                    });
                    $('#formNameBox').val('');
                } else {
                    $('#formStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#formStatus').html('');
                }
            },
        });
    });
    //INSERIR FORMACAO
    $('#formInsButton').click(() => {
        if ($('#formNameBox').val() == '') {
            $('#formStatus').html('');
            $('#formStatus').append("<ul><li>ERRO</li><ul>");
            $('#formNameBox').val('');
        }
        else {
            $.ajax({
                url: 'formacao/ins',
                type: 'POST',
                data: {
                    name: $('#formNameBox').val()
                },
                success: (data) => {
                    $('#formStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#formNameBox').val('');
        }
    });
    //REMOVER FORMACAO
    $('#formRmButton').click(() => {
        if ($('#formNameBox').val() == '') {
            $('#formStatus').html('');
            $('#formStatus').append("<ul><li>ERRO</li><ul>");
            $('#formNameBox').val('');
        }
        else {
            const requestURL = 'formacao/rm/' + $('#formNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.name != 'Nao encontrado') {
                        console.log(data.name)
                        $('#formStatus').html('');
                        $('#formStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#formNameBox').val('');
                    }
                    else if (data.name == 'Nao encontrado') {
                        $('#formStatus').html('');
                        $('#formStatus').append("<ul><li>"+ data.name +"</li><ul>");
                        $('#formNameBox').val('');
                    } else {
                        $('#formStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#formStatus').html('');
                    }
                },
            });
            $('#formNameBox').val('');
        }
    });
    //ALTERAR FORMACAO
    $('#formAltButton').click(() => {
        if ($('#formAltOldNameBox').val() == '' || $('#formAltNewNameBox').val() == '') {
            $('#formStatus').html('');
            $('#formStatus').append("<ul><li>ERRO</li><ul>");
            $('#formAltOldNameBox').val('');
            $('#formAltNewNameBox').val('');
        }
        else {
            const requestURL = 'formacao/alt/' + $('#formAltOldNameBox').val() + '/' + $('#formAltNewNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#formStatus').html('');
                        $('#formStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#formNameBox').val('');
                    } else {
                        $('#formStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#formStatus').html('');
                    }
                },
            });
            $('#formAltOldNameBox').val('');
            $('#formAltNewNameBox').val('');
        }
    });
});