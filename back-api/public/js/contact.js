$(document).ready(function () {
    //CONSULTAR DETERMINADA LINK
    $('#linkConButton').click(() => {
        if ($('#linkIDBox').val() == '') {
            $('#linkStatus').html('');
            $('#linkStatus').append("<ul><li>ERRO</li><ul>");
            $('#linkIDBox').val('');
        }
        else {
            const requestURL = 'links/' + $('#linkIDBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#linkStatus').html('');
                        $('#linkStatus').append("<ul><li>" + data.name + "</li><li><a src='../img/'" + data.icon + " width = '200px'></a></li><ul>");
                        $('#linkIDBox').val('');
                    } else {
                        $('#linkStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#linkStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODAS LINKS
    $('#linkConAllButton').click(() => {
        const requestURL = 'links/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#linkStatus').html('');
                    $('#linkStatus').append("<ul id='listaLink'><ul>");
                    data.forEach(element => {
                        $('#listaLink').append("<li>" + element.name + "</li><li><img src='../img/" + element.icon + "' width = '200px'></img></li><br />");
                    });
                    $('#linkIDBox').val('');
                } else {
                    $('#linkStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#linkIDBox').html('');
                }
            },
        });
    });
    //REMOVER LINK
    $('#linkRmButton').click(() => {
        if ($('#linkIDBox').val() == '') {
            $('#linkStatus').html('');
            $('#linkStatus').append("<ul><li>ERRO</li><ul>");
            $('#linkIDBox').val('');
        }
        else {
            const requestURL = 'links/rm/' + $('#linkIDBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.title != 'Nao encontrado') {
                        console.log(data.name)
                        $('#linkStatus').html('');
                        $('#linkStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#linkIDBox').val('');
                    }
                    else if (data.title == 'Nao encontrado') {
                        $('#linkStatus').html('');
                        $('#linkStatus').append("<ul><li>" + data.title + "</li><ul>");
                        $('#linkIDBox').val('');
                    }
                    else {
                        $('#linkStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#linkStatus').html('');
                    }
                },
            });
            $('#linkIDBox').val('');
        }
    });
    //INSERIR LINK
    $('#linkInsButton').click(() => {
        $('#linkStatus').html('');
        if ($('#linkNameBox').val() == '' || $('#linkIconNameBox').val() == '') {
            $('#linkStatus').html('');
            $('#linkStatus').append("<ul><li>ERRO</li><ul>");
            $('#linkNameBox').val('');
            $('#linkIconNameBox').val('');
        }
        else {
            $.ajax({
                url: 'links/ins',
                type: 'POST',
                data: {
                    name: $('#linkNameBox').val(),
                    icon: $('#linkIconNameBox').val()

                },
                success: (data) => {
                    $('#linkStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#linkNameBox').val('');
            $('#linkIconNameBox').val('');
        }
    });
    //ALTERAR INFO
    $('#linkAltButton').click(() => {
        $('#linkStatus').html('');
        if ($('#linkAltOldIDBox').val() == '' || $('#linkAltNewLinkBox').val() == '' || $('#linkAltNewIconBox').val() == '') {
            $('#linkStatus').html('');
            $('#linkStatus').append("<ul><li>ERRO</li><ul>");
            $('#linkAltOldIDBox').val('');
            $('#linkAltNewLinkBox').val('');
            $('#linkAltNewIconBox').val('');
        }
        else {
            const requestURL = 'links/alt/' + $('#linkAltOldIDBox').val() + '/' + $('#linkAltNewLinkBox').val() + '/' + $('#linkAltNewIconBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#linkStatus').html('');
                        $('#linkStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#linkAltOldIDBox').val('');
                        $('#linkAltNewLinkBox').val('');
                        $('#linkAltNewIconBox').val('');
                    } else {
                        $('#linkStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#linkStatus').html('');
                    }
                },
            });
            $('#linkAltOldIDBox').val('');
            $('#linkAltNewLinkBox').val('');
            $('#linkAltNewIconBox').val('');
        }
    });
});