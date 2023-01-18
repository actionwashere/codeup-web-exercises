
$(`dt`).on(`click`, function(){
    $(this).toggleClass(`highlight`).next().toggleClass(`invisible`);
});