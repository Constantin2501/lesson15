'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.addElem = function () {

    if (this.selector[0] === '.') {
        const newElem = document.createElement('div')

        newElem.className = this.selector.slice(1)
        document.body.append(newElem)
        newElem.textContent = 'я div'
        newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-Size: ${this.fontSize};`
    }

    if (this.selector[0] === '#') {
        const newElem = document.createElement('p')

        newElem.className = this.selector.slice(1)
        document.body.append(newElem)
        newElem.textContent = 'я параграф'
        newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-Size: ${this.fontSize};`
    }
}

const newObj = new DomElement('.obj1', '100px', '100px', 'yellow', '24px' )

newObj.addElem()
