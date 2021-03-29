// кажется тут должен быть код...
let comments = [];
loadComments();
document.getElementById('add-comment').onclick=function()
{
    let commentText = document.getElementById('comment-area').nodeValue;
    comments.push(commentText);

    saveComments();
    showComments();
}

function saveComments()
{
    localStorage.setItem('comments',JSON.stringify(comments));
}

function showComments()
{
    for (let comment of comments){
        commentsField.insertAdjacentHTML('beforeend', <div class='comment'><p>${comment}</p></div>)
    }
}
function loadComments()
{
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}
// Подсказка №1: Содержимое тега textarea хранится в его свойстве value

// Подсказка №2: Не забывайте, что LocalStorage и SessionStorage могут хранить только строки в виде пар ключ/значение
