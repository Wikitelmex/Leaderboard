export class domRequest {

    appendTemplate(id = '', template = '' ) {
        const el = document.querySelector(`#${id}`);
        el.innerHTML += template;
    }

    clear(id = '') {
        const el = document.querySelector(`#${id}`);
        el.innerHTML = '';
    }

    removeTemplate(idParent = '', idChild = ''){
        const parent = document.querySelector(`#${idParent}`);
        const child = document.querySelector(`#${idChild}`);
        parent.removeChild(child);
    }

}