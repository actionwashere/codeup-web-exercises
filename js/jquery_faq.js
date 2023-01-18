$(document).ready(function () {

    // ***** dt click listener ****
    $(`dt`).on(`click`, function(){
        $(this).toggleClass(`highlight`).next().toggleClass(`invisible`);
    });

    // ***** make it yellow btn *****
    $(`#btnYellow`).on(`click`, function(){
        $(`ul`).each(function(index){
            $(this).children('li').last().toggleClass(`yellowBg`);
        });
    });

    // ***** h3 bold list items *****
    $(`h3`).on(`click`, function(){
        $(this).next().children(`li`).toggleClass(`bolder`);
    });

    // ***** list item turns first li blue *****
    $(`li`).on(`click`, function(){
        $(this).parent().each(function(){
            $(this).children(`li`).first().toggleClass(`makeBlue`);
        });
    });

});

