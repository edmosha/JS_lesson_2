let comments = []

class CommentsClass {
    constructor(author, date, content) {
        this.author = author
        this.date = date
        this.content = content
    }
}
// ---------------------
// Не понимаю, как удалять и редактировать коменты..
// ---------------------
console.log(comments)

document.getElementById('addComment').addEventListener('click', ClickButton => {
    AddCommentToLocalStorage()
    console.log(comments)
    AddCommentToPage()
})

//document.getElementById('delete').addEventListener('click', () => DeleteComment())

if(localStorage.getItem('comments')) {
    comments = JSON.parse((localStorage.getItem('comments')))
    ShowComments()
}

function AddCommentToLocalStorage() {
    let d = new Date();
    let newDateText = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' в ' + d.getHours() + ':' + d.getMinutes()
    let newAuthorText = document.getElementById('author').value
    let newCommentText = document.getElementById('comment').value

    let newComment = new CommentsClass(newAuthorText, newDateText, newCommentText)
    comments.push(newComment)
    localStorage.setItem('comments', JSON.stringify(comments))
}

function AddCommentToPage() {
    comments = JSON.parse(localStorage.getItem('comments'))

    document.querySelector('.wrapper').insertAdjacentHTML("beforeend",
        `<div class="commentBlock">
            <div class="commBoxTop">
                <div>
                    <span class="commentMark">` + comments[comments.length-1].author + `</span>
                    <span class="date">` + comments[comments.length-1].date + `</span>
                </div>
                <button id="edit" onclick="DeleteComment()">Редактировать</button>
                <button class="del">Удалить</button>
            </div>
            <span>` + comments[comments.length-1].content + `</span>
        </div>`)

    const clearElem = document.getElementById('comment')
    const clearElem1 = document.getElementById('author')
    clearElem.value = ''
    clearElem1.value = ''
}

function ShowComments() {
    comments = JSON.parse((localStorage.getItem('comments')))
    // ClearComment()
    for(let i=0; i<comments.length; i++) {
        document.querySelector('.wrapper').insertAdjacentHTML("beforeend",
            `<div class="commentBlock">
            <div class="commBoxTop">
                <div>
                    <span class="commentMark">` + comments[i].author + `</span>
                    <span class="date">` + comments[i].date + `</span>
                </div>
                <button id="edit">Редактировать</button>
                <button id="delete">Удалить</button>
            </div>
            <span>` + comments[i].content + `</span>
        </div>`)

    }
}

//function DeleteComment() {
//
//}
function ClearComment() {
    for(let i=0; i<comments.length; i++) {
        let elem = document.querySelector('.commentBlock')
        elem.remove()
    }
}

function SortByDescendingDate() {
    comments = JSON.parse((localStorage.getItem('comments')))

    // comments.forEach(document.querySelector('.commentBlock'),function (elem) {
    //     elem.remove()
    // })

    ClearComment()

    let i = comments.length
    while (i !== 0) {
        document.querySelector('.wrapper').insertAdjacentHTML("beforeend",
            `<div class="commentBlock">
            <div class="commBoxTop">
                <div>
                    <span class="commentMark">` + comments[i-1].author + `</span>
                    <span class="date">` + comments[i-1].date + `</span>
                </div>
                <button id="edit">Редактировать</button>
                <button id="delete">Удалить</button>
            </div>
            <span>` + comments[i-1].content + `</span>
        </div>`)
        i -= 1

    }
}



