$(document).ready(function(){
    $('li.area').click(function(){
        $('div#allcompany').hide();
        $('div#allcompany').animate({'width': 'show'});

        if($('ul#companies li').length > 0){
            $('ul#companies').empty();
        }

        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
        var area_id = $(this).attr('id')
        console.log(area_id);
        getCompanies(area_id)
    });

    // $('li.company').click(function(){
    //     $(this).addClass('checked');
    //     $(this).siblings().removeClass('checked');
    // });
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