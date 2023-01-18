$(document).ready(function () {

    // ***** dt click listener ****
    $(`dt`).on(`click`, function () {
        $(this).toggleClass(`highlight`).next().toggleClass(`invisible`);
    });

});

