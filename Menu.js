'use strict';

class Menu {

    /**
     * Создаем элемент меню.
     * @param id {string} id элемента.
     * @param className {string} class элемента.
     * @param items {array} массив с пунктами меню.
     */
    constructor(id, className, items){
        this.id = id;
        this.className = className;
        this.items = items;
    }

    /**
     * Отрисовываем меню.
     * @returns {string} возвращаем html.
     */
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for(let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem ||
                this.items[i] instanceof SubMenuItem){
                result += this.items[i].render();
            }
        }
        result += '</ul>';
        return result;
    }

    /**
     * Очищаем контейнер с меню.
     */
    remove(){
        document.getElementById(this.id).remove()
    }
}