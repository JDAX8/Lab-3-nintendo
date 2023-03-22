export var Attrib;
(function (Attrib) {
    Attrib["image"] = "image";
    Attrib["name"] = "name";
})(Attrib || (Attrib = {}));
class ncard6 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
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
        <link rel="stylesheet" href="./app/components/Card6/Card6.css">
        <div class="Todo">
        <div class="Fondo">
          <img  class="img2" src="${this.image}" alt="">
      </div>
      <div class="Name">
      <h1>${this.name}</h1>
      </div>
    
        `;
    }
}
customElements.define('card-6', ncard6);
export default ncard6;
