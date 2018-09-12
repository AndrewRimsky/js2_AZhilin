'use strict';

class MenuItem {

    /**
     * Пункты меню.
     * @param href {string} путь .
     * @param title {string} заголовок пункта меню.
     */
    constructor(href, title){
        this.href = href;
        this.title = title;
    }

    /**
     * Отрисовываем пункты меню.
     * @returns {string} возвращаем html в menu.render.
     */
    render(){
        return `<li><a href="${this.href}">${this.title}</a></li>`
    }
}