$(document).ready(function () {
    //CONSULTAR DETERMINADA INFORMACAO
    $('#infoConButton').click(() => {
        if ($('#infoIDBox').val() == '') {
            $('#infoStatus').html('');
            $('#infoStatus').append("<ul><li>ERRO</li><ul>");
            $('#infoIDBox').val('');
        }
        else {
            const requestURL = 'info/' + $('#infoIDBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#infoStatus').html('');
                        $('#infoStatus').append("<ul><li>" + data.bio + "</li><li>" + data.desc + "</li><ul>");
                        $('#infofIDBox').val('');
                    } else {
                        $('#infoStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#infoStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODAS INFORMACOES
    $('#infoConAllButton').click(() => {
        const requestURL = 'info/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#infoStatus').html('');
                    $('#infoStatus').append("<ul id='listaInfo'><ul>");
                    data.forEach(element => {
                        $('#listaInfo').append("<li>" + element.bio + "</li><li>" + element.desc + "</li><br />");
                    });
                    $('#infoIDBox').val('');
                } else {
                    $('#infoStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#infoIDBox').html('');
                }
            },
        });
    });
    //REMOVER INFORMACAO
    $('#infoRmButton').click(() => {
        if ($('#infoIDBox').val() == '') {
            $('#infoStatus').html('');
            $('#infoStatus').append("<ul><li>ERRO</li><ul>");
            $('#infoIDBox').val('');
        }
        else {
            const requestURL = 'info/rm/' + $('#infoIDBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.title != 'Nao encontrado') {
                        console.log(data.name)
                        $('#infoStatus').html('');
                        $('#infoStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#infoIDBox').val('');
                    }
                    else if (data.title == 'Nao encontrado') {
                        $('#infoStatus').html('');
                        $('#infoStatus').append("<ul><li>" + data.title + "</li><ul>");
                        $('#perfIDBox').val('');
                    }
                    else {
                        $('#infoStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#infoStatus').html('');
                    }
                },
            });
            $('#infoIDBox').val('');
        }
    });
    //INSERIR INFORMACAO
    $('#infoInsButton').click(() => {
        $('#infoStatus').html('');
        if ($('#infoBioNameBox').val() == '' || $('#infoJobNameBox').val() == '') {
            $('#infoStatus').html('');
            $('#infoStatus').append("<ul><li>ERRO</li><ul>");
            $('#infoBioNameBox').val('');
            $('#infoJobNameBox').val('');
        }
        else {
            $.ajax({
                url: 'info/ins',
                type: 'POST',
                data: {
                    bio: $('#infoBioNameBox').val(),
                    desc: $('#infoJobNameBox').val()

                },
                success: (data) => {
                    $('#infoStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#infoBioNameBox').val('');
            $('#infoJobNameBox').val('');
        }
    });
    //ALTERAR INFO
    $('#infoAltButton').click(() => {
        $('#infoStatus').html('');
        if ($('#infoAltOldIDBox').val() == '' || $('#infoAltNewBioBox').val() == '' || $('#infoAltNewJobBox').val() == '') {
            $('#infoStatus').html('');
            $('#infoStatus').append("<ul><li>ERRO</li><ul>");
            $('#infoAltOldIDBox').val('');
            $('#infoAltNewBioBox').val('');
            $('#infoAltNewJobBox').val('');
        }
        else {
            const requestURL = 'info/alt/' + $('#infoAltOldIDBox').val() + '/' + $('#infoAltNewBioBox').val() + '/' + $('#infoAltNewJobBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#infoStatus').html('');
                        $('#infoStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#infoAltOldIDBox').val('');
                        $('#infoAltNewBioBox').val('');
                        $('#infoAltNewJobBox').val('');
                    } else {
                        $('#infoStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#infoStatus').html('');
                    }
                },
            });
            $('#infoAltOldIDBox').val('');
            $('#infoAltNewBioBox').val('');
            $('#infoAltNewJobBox').val('');
        }
    });
});