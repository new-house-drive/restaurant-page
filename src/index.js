'use strict'
const Restaurant = () => {

    

    const addTitle = () => {
        let contentElements = document.querySelector('.content')
        let title = document.createElement('div')
        title.className = 'title-element'

        contentElements.appendChild(title)

    }


    return {
        addTitle
    }
}

const Module = (() => {
    console.log('xxx')
    Restaurant.addTitle()
})()