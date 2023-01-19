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

    // ***** Glacier shows answers *****
    $(`#glacierHeader`).on(`click`, function(){
        $(`dd`).toggleClass(`invisible`);
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

    //      The left frame swaps to the right and takes the image from the frame in the center.
    //      The center frame swaps randomly to either the left or right.
    //      The right frame swaps to the left and takes the image from the frame in the center.

    // ***** three pics btns *****
    $(`#btn-left`).on(`click`, function(){

    });

    $(`#btn-center`).on(`click`, function(){

    });

    $(`#btn-right`).on(`click`, function(){

    });

});

