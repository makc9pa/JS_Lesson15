'use strict'

const DomElement = function (name, height, width, bg, fontSize) {
    this.name = name
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.createElement = function () {
        let elem = ''
        if (name.slice(0, 1) === '.') {
            elem = document.createElement('div')
            elem.className = name.slice(1, name.length)
            let node = document.createTextNode('Новый класс')
            elem.appendChild(node)
            document.body.appendChild(elem)
        }

        if (name.slice(0, 1) === '#') {
            elem = document.createElement('p')
            elem.id = name.slice(1, name.length)
            let node = document.createTextNode('Новый параграф')
            elem.appendChild(node)
            document.body.appendChild(elem)
        }

        elem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        `
    }
}

const block = new DomElement('#lesson15', '100px', '200px', 'khaki', '1.2em')

block.createElement()