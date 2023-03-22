export enum Attrib {
    "img" = "img",
    "name1" = "name1",
    "fecha" = "fecha",
}
class comp3 extends HTMLElement {
    img?: string;
    name1?: string;
    fecha?: string;

    constructor() {
        super();

        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        const attrs: Record<Attrib, null> = {
            img: null,
            name1: null,
            fecha: null,
        };
        return Object.keys(attrs);
    }


    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(
        propName: Attrib,
        _: string | undefined,
        newValue: string | undefined
    ) {
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
        
        `

    }
}

customElements.define('comp-3', comp3);
export default comp3;