let title = document.querySelector('#title_input')
let mainTitle = document.querySelector('#main_title')
let noun = document.querySelector('#noun')
let verb = document.querySelector('#verb')
let adjective = document.querySelector('#adjective')
let submit = document.querySelector('#submit_button')
let story = document.querySelector('#story_result')
let form = document.querySelector('.form_container')
title.oninput = function () {
    mainTitle.innerText = title.value
}




submit.onclick = function (event) {
    event.preventDefault()
    if (title.value == '' || noun.value == '' || adjective.value == '' || verb.value == '') {
        alert('youre missing something')
    }
    else{
        form.style.display = 'none'
        story.innerText = 'Last night I ate a ' + noun.value + ' and today I just had to ' + verb.value + '. What a ' + adjective.value + ' day!'
    }
}

