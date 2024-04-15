const pageID = document.getElementsByTagName("title")[0].innerHTML;
const database = firebase.database()
const commentsRef = database.ref("comments/" + pageID);
var commentList = document.getElementById("commentList")

document.getElementById("commentForm").addEventListener('submit', function(event){
    event.preventDefault();
    const commentText = document.getElementById("commentText").value;
    const commentorName = document.getElementById("commentName").value;
    commentsRef.push().set({
        text: commentText,
        userName: commentorName,
        time: new Date().toDateString()
    })
    document.getElementById("commentForm").reset()
})

updateComments();
function updateComments(){
    commentList.innerHTML = ''
    commentsRef.on('child_added', (snapshot) => {
        const comment = snapshot.val();
        commentListAdd(comment);
    })
    if(commentsRef.hasChild() == false){
        commentList.innerHTML = '<p> Be the first to leave a comment! </p>'
    }
};
function commentListAdd(comment){
    var thisComment = document.createElement('div');
    var commentUser = document.createElement('h2');
    var commentDate = document.createElement('h3');
    var commentText = document.createElement('p');
    thisComment.classList.add("comment")
    commentUser.innerHTML = comment.userName;
    commentText.innerHTML = comment.text;
    commentDate.innerHTML = comment.time;
    thisComment.appendChild(commentUser);
    thisComment.appendChild(commentDate)
    thisComment.appendChild(commentText);
    commentList.appendChild(thisComment); 
};