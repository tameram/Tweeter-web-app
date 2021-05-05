const Renderer = function(){
    const postID = $('#posts')
    const renderPosts = function(posts){
        
        posts.forEach(element => {

            let comments =''
            element.comments.forEach(comment => {
                comments += `<div class="commentItem">${comment.text}</div>`
            });
            // postID.append(element.text)
            postID.append(`
            <div class = "box">
              <div class="postTwi">${element.text}</div>
              <div class="comments">${comments}</div>
            </div>
            `)
            console.log(element)
        });
        
    }

    return{
        renderPosts
    }
}