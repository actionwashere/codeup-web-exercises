"use strict"

// let borders = $('.codeup').css("border", "solid 1px  red");
//
// let fontSize = $('li').css("font-size", "20px");
//
// // let h1 = $('h1').css('background-color', 'yellow');
// // let p = $('p').css('background-color', 'yellow');
// // let li = $('li').css('background-color', 'yellow');
//
// let highlight = $('h1, p, li').css('background-color', 'yellow');
//
// let message = $('#welcome-message').html()
// alert(message);

let $h1btn = $('#welcome-message');

$h1btn.click(function () {
    $h1btn.css('background-color', 'yellow');
});

let $allPara = $('p');

$allPara.dblclick(function(){
    $allPara.css('font-size', '18px')
});

let $allLiItems = $('li');

$allLiItems.hover(function(){
    $allLiItems.css('color', 'red');
}, function(){
    $allLiItems.css('color', 'black');
});