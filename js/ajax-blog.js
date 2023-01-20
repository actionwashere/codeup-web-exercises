$(document).ready(function(){

    let posts = [];

     $.get(`./data/blog.json`).done(function(data){
         console.log(data);
         posts.push(data);
    });

    console.log(posts);


    function createHTML(posts) {
        // loop through all the orders and create an HTML string for each order
        let html = '';
        for (let i = 0; i < posts.length; i += 1) {
            html += '    <article class="d-flex flex-column align-items-center">\n' +
                '        <h3 id="title" class="mt-3">' + posts[i].title + '</h3>\n' +
                '            <p id="content" class="mt-3">' + posts[i].content + '</p>\n' +
                '            <p id="categories">' + posts[i].categories + '</p>\n' +
                '            <p id="date">' + posts[i].date + '</p>\n' +
                '    </article>';
        }
        return html;
    }

    function updatePage() {
        // make request to orders.json
        console.log('Update orders');
        $.get('./data/blog.json').done(function(posts) {
            let postsHTML = createHTML(posts); // create HTML string
            $('#posts').html(postsHTML); // update the DOM with the new HTML
        }).fail(function(jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });
    }

    updatePage();

});







// posts.title
// posts.content
// post.categories
// post.date