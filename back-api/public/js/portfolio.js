$(document).ready(function () {
    //CONSULTAR DETERMINADO TRABALHO
    $('#portConButton').click(() => {
        if ($('#portNameBox').val() == '') {
            $('#portStatus').html('');
            $('#portStatus').append("<ul><li>ERRO</li><ul>");
            $('#portNameBox').val('');
        }
        else {
            const requestURL = 'portfolio/' + $('#portNameBox').val();
            console.log('making ajax request to:', requestURL);
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#portStatus').html('');
                        $('#portStatus').append("<ul><li>" + data.title + "</li><li>" + data.desc + "</li><li>" + data.link + "</li><ul>");
                        $('#portNameBox').val('');
                    } else {
                        $('#portStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#portStatus').html('');
                    }
                },
            });
        }
    });
    //CONSULTAR TODOS TRABALHOS
    $('#portConAllButton').click(() => {
        const requestURL = 'portfolio/';
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                if (data) {
                    $('#portStatus').html('');
                    $('#portStatus').append("<ul id='listaPort'><ul>");
                    data.forEach(element => {
                        $('#listaPort').append("<li>" + element.title + "</li><li>" + element.desc + "</li><li>" + element.link + "</li><br />");
                    });
                    $('#portNameBox').val('');
                } else {
                    $('#portStatus').html('Error: could not find user at URL: ' + requestURL);
                    $('#portStatus').html('');
                }
            },
        });
    });
    //REMOVER TRABALHOS
    $('#portRmButton').click(() => {
        if ($('#portNameBox').val() == '') {
            $('#portStatus').html('');
            $('#portStatus').append("<ul><li>ERRO</li><ul>");
            $('#portNameBox').val('');
        }
        else {
            const requestURL = 'portfolio/rm/' + $('#portNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data.title != 'Nao encontrado') {
                        console.log(data.name)
                        $('#portStatus').html('');
                        $('#portStatus').append("<ul><li>DADO REMOVIDO</li><ul>");
                        $('#portNameBox').val('');
                    }
                    else if (data.title == 'Nao encontrado') {
                        $('#portStatus').html('');
                        $('#portStatus').append("<ul><li>" + data.title + "</li><ul>");
                        $('#portNameBox').val('');
                    }
                    else {
                        $('#portStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#portStatus').html('');
                    }
                },
            });
            $('#portNameBox').val('');
        }
    });
    //INSERIR TRABALHO
    $('#portInsButton').click(() => {
        $('#portStatus').html('');
        if ($('#portTitleNameBox').val() == '' || $('#portDescNameBox').val() == '' || $('#portLinkNameBox').val() == '') {
            $('#portStatus').html('');
            $('#portStatus').append("<ul><li>ERRO</li><ul>");
            $('#portNameBox').val('');
            $('#portTitleNameBox').val('');
            $('#portDescNameBox').val('');
            $('#portLinkNameBox').val('');
        }
        else {
            $.ajax({
                url: 'portfolio/ins',
                type: 'POST',
                data: {
                    title: $('#portTitleNameBox').val(),
                    desc: $('#portDescNameBox').val(),
                    link: $('#portLinkNameBox').val()

                },
                success: (data) => {
                    $('#portStatus').append("<ul><li>DADO INSERIDO COM SUCESSO</li><ul>");
                }
            });
            $('#portNameBox').val('');
            $('#portTitleNameBox').val('');
            $('#portDescNameBox').val('');
            $('#portLinkNameBox').val('');
        }
    });
    //ALTERAR TRABALHO
    $('#portAltButton').click(() => {
        $('#portStatus').html('');
        if ($('#portAltOldTitleBox').val() == '' || $('#portAltNewTitleBox').val() == '' || $('#portDescAltNameBox').val() == '' || $('#portLinkAltNameBox').val() == '') {
            $('#portStatus').html('');
            $('#portStatus').append("<ul><li>ERRO</li><ul>");
            $('#portAltOldTitleBox').val('');
            $('#portAltNewTitleBox').val('');
            $('#portDescAltNameBox').val('');
            $('#portLinkAltNameBox').val('');
        }
        else {
            const requestURL = 'portfolio/alt/' + $('#portAltOldTitleBox').val() + '/' + $('#portAltNewTitleBox').val() + '/' + $('#portDescAltNameBox').val() + '/' + $('#portLinkAltNameBox').val();
            $.ajax({
                url: requestURL,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    console.log('You received some data!', data);
                    if (data) {
                        console.log(data)
                        $('#portStatus').html('');
                        $('#portStatus').append("<ul><li>DADO Alterado</li><ul>");
                        $('#portAltOldTitleBox').val('');
                        $('#portAltNewTitleBox').val('');
                        $('#portDescAltNameBox').val('');
                        $('#portLinkAltNameBox').val('');
                    } else {
                        $('#portStatus').html('Error: could not find user at URL: ' + requestURL);
                        $('#portStatus').html('');
                    }
                },
            });
            $('#portAltOldTitleBox').val('');
            $('#portAltNewTitleBox').val('');
            $('#portDescAltNameBox').val('');
            $('#portLinkAltNameBox').val('');
        }
    });
});