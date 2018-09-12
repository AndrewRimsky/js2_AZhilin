'use strict';

class SubMenuItem extends Menu{

    /**
     * Подпункты меню.
     * @param id {string} id подменю.
     * @param className {string} class подменю.
     * @param items {array} Массив с пунктами подменю.
     * @param href {string} путь .
     * @param title {string} заголовок пункта подменю.
     */
    constructor(id, className, items, href, title){
        super(id, className, items);
        this.href = href;
        this.title = title;
    }

    /**
     * Отрисовываем пункты подменю.
     * @returns {string} возвращаем html в menu.render.
     */
    render(){
        return `<li><a href="${this.href}">${this.title}</a>${super.render()}</li>`
    }
}