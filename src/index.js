'use strict'
const Restaurant = (() => {
    let content = document.getElementById('content')
    
    const addTitle = () => {    
        let title = document.createElement('div')
        title.classList.add('title-element')
        title.innerText = 'popa'

        
        content.appendChild(title)

    }


    return {
        addTitle
    }
})()

const Module = (() => {
    Restaurant.addTitle()
})()