'use strict'
const Restaurant = (() => {

    const addTitle = () => {
        let content = document.querySelector('.content')
        let title = document.createElement('div')
        title.classList.add('title-element')

    }


    return {
        addTitle
    }
})()

const Module = (() => {
    Restaurant.addTitle()
})()