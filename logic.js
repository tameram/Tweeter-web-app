
const Tweeter = function () {
    let posts = []


    let postIdCounter = 0
    let commentIdCounter = 0

    const getPosts = function () {
        return posts
    }
    const addPost = function (postText) {
        const post = {
            text: postText,
            id: `p${++postIdCounter}`,
            comments: []
        }
        posts.push(post)

    }
    const removePost = function (id) {
        for (let index = 0; index < posts.length; index++) {
            if (posts[index].id === id) {
                posts.splice(index, 1)
            }
        }

    }
    const addComment = function ( textadded,postID) {
        const comment = {
            id: `c${++commentIdCounter}`,
            text: textadded
        }
        
        for (const post of posts) {
            if (post.id === postID) {
                post.comments.push(comment)
            }
        }
    }

    const removeComment = function (postID, commentID) {
        for (const post of posts) {
            if (post.id === postID) {
                for (let index = 0; index < post.comments.length; index++) {
                    const element = post.comments[index];
                    if (element.id === commentID) {
                        post.comments.splice(index, 1)
                    }

                }
            }
        }
    }

    return {
        getPosts ,
        addComment,
        addPost,
        removePost,
        removeComment
    }
}

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// tweeter.addPost("This is my own post!")
// tweeter.addPost("This is my own post!")
// tweeter.addPost("This is my own post!")
// tweeter.addPost("This is my own post!")
// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// // tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}