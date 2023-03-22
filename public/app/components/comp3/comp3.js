export var Attrib;
(function (Attrib) {
    Attrib["img"] = "img";
    Attrib["name1"] = "name1";
    Attrib["fecha"] = "fecha";
})(Attrib || (Attrib = {}));
class comp3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            img: null,
            name1: null,
            fecha: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/comp2/comp2.css">
        
        `;
    }
}
customElements.define('comp-3', comp3);
export default comp3;
