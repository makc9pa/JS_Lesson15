'use strict'
const step = 10

const DomElement = function (name, height, width, bg, fontSize, position, top, left) {
    this.name = name
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.position = position
    this.top = top
    this.left = left
    this.createElement = function () {
        let elem = ''
        if (name.slice(0, 1) === '.') {
            elem = document.createElement('div')
            elem.className = name.slice(1, name.length)
            elem.innerText = 'Новый класс'
        }

        if (name.slice(0, 1) === '#') {
            elem = document.createElement('p')
            elem.id = name.slice(1, name.length)
            elem.innerText = 'Новый параграф'
        }

        document.body.appendChild(elem)
        elem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};
        top: ${this.top};
        left: ${this.left}
        `
    }
}

let block = new DomElement('.lesson15', '100px', '100px', 'khaki', '1.2em', 'absolute', 0, 0)

document.addEventListener("DOMContentLoaded", block.createElement())

document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowDown') {
        block.top += step
        document.querySelector('div').remove()
        block.createElement()
    } else if (event.key === 'ArrowUp') {
        block.top -= step
        document.querySelector('div').remove()
        block.createElement()
    } else if (event.key === 'ArrowRight') {
        block.left += step
        document.querySelector('div').remove()
        block.createElement()
    } else if (event.key === 'ArrowLeft') {
        block.left -= step
        document.querySelector('div').remove()
        block.createElement()
    }
})