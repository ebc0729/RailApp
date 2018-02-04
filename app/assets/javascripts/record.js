$(document).ready(function(){
    $('.area').click(function(){
        $('#pulldown').hide();
        $('#allroute').hide();
        $('#allcompany').hide();
        $('#allcompany').animate({'width': 'show'});

        if($('#companies li').length > 0){
            $('#companies').empty();
        }

        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
        var area_id = $(this).attr('id')
        getCompanies(area_id)
    });

    $(document).on('click', '.company', function(){
        $('#pulldown').hide();
        $('#allroute').hide();
        $('#allroute').animate({'width': 'show'});

        if($('#routes li').length > 0){
            $('#routes').empty();
        }

        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
        var company_id = $(this).attr('id');
        getRoutes(company_id);
    });

    $(document).on('click', '.route', function(){
        $('#pulldown').hide();
        $('#pulldown').animate({'width': 'show'});

        if($('#startStation option').length > 0){
            $('#startStation').empty();
        }

        if($('#endStation option').length > 0){
            $('#endStation').empty();
        } 
        
        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
        var route_id = $(this).attr('id');
        getStations(route_id);
    });

    $(document).on('click', '.route', function(){
        $('#pulldown').hide();
        $('#pulldown').animate({'width': 'show'});

        if($('#startStation option').length > 0){
            $('#startStation').empty();
        }

        if($('#endStation option').length > 0){
            $('#endStation').empty();
        } 
        
        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
        var route_id = $(this).attr('id');
        getStations(route_id);
    });

    $(document).on('click', '[name=regist]', function(){
        var start_id = $('#startStation').val();
        var end_id = $('#endStation').val();
        var date = $('[name=recorddate]').val();
        $('[name=data-start_id]').val(start_id);
        $('[name=data-end_id]').val(end_id);
        $('[name=data-date]').val(date);
    });
});

function getCompanies(area_id) {
    $.ajax({
        url: gon.api_base_url + '/areas/' + area_id + '/companies',
        type: 'get'
    }).done(function(data) {
        data.map(function(c){
            $('ul#companies').append('<li id=' + c.id + '>' + c.name + '</li>')
        });
        $('ul#companies li').attr('class', 'company')
    }).fail(function(data){
        $('<p class="errorMessage">データがありません</p>').appendTo('ul#companies');
    })
}

function getRoutes(company_id) {
    $.ajax({
        url: gon.api_base_url + '/companies/' + company_id + '/routes',
        type: 'get'
    }).done(function(data) {
        data.map(function(r){
            $('ul#routes').append('<li id=' + r.id + '>' + r.name + '</li>')
        });
        $('ul#routes li').attr('class', 'route');
    }).fail(function(data){
        $('<p class="errorMessage">データがありません</p>').appendTo('ul#routes');
    })
}

function getStations(route_id) {
    $.ajax({
        url: gon.api_base_url + '/routes/' + route_id + '/stations',
        type: 'get'
    }).done(function(data) {
        data.map(function(s){
            $('#startStation').append('<option value=' + s.id + '>' + s.name + '</option>');
            $('#endStation').append('<option value=' + s.id + '>' + s.name + '</option>');
        });
        $('#startStation option').attr('class', 'start');
        $('#endStation option').attr('class', 'end');
    }).fail(function(data){
        $('<p class="errorMessage">データがありません</p>').appendTo('pulldown');
    })
}