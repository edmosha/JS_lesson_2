// Подсказка №1: Содержимое тега textarea хранится в его свойстве value
// Подсказка №2: Не забывайте, что LocalStorage и SessionStorage могут хранить только строки в виде пар ключ/значение



// план действий
// 1. отловить нажатие кнопки добавить
// - происходит в событии п5

// 2. сохранить значение из поля текстерии
//const commentContent = document.getElementById('comment').value

// 3. сохранить в локалсторадж
// localStorage.setItem('first_comment', commentContent.toString())

// 4. очистить поле
let comments = []
let num

// 5. добавить блок комента
document.getElementById('addComment').addEventListener("click", () => {
    const newComment = document.getElementById('comment').value
    comments.push(newComment)
    console.log(comments)

    localStorage.setItem('comments', JSON.stringify(comments))

    comments = JSON.parse(localStorage.getItem('comments'))
    console.log(comments)
    num = comments.length // номер ласт элемента массива
    console.log(num)
    console.log(comments[num-1])

    document.querySelector('.wrapper').insertAdjacentHTML("beforeend",
        `<p class="commentBlock"> 
                <span class="commentMark">Пуськин поклонник &#128571; </span><br>
                <span>` + comments[num-1] +`</span></p>`)
    const clearElem = document.getElementById('comment')
    clearElem.value = ''

})

if(localStorage.getItem('comments')) {
    Show()
}



function Show() {
    comments = JSON.parse((localStorage.getItem('comments')))
    for(let i=0; i<comments.length; i++) {
        console.log(comments[i])

        document.querySelector('.wrapper').insertAdjacentHTML("beforeend",
            `<p class="commentBlock"> 
                <span class="commentMark">Пуськин поклонник &#128571; </span><br>
                <span>` + comments[i] +`</span></p>`)

    }
}




