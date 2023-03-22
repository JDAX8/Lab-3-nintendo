export var Att;
(function (Att) {
    Att["image"] = "image";
    Att["name"] = "name";
    Att["plataform"] = "plataform";
})(Att || (Att = {}));
class ncard3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
            plataform: null,
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
        <link rel="stylesheet" href="./app/components/Card2/Card2.css">
        <div class="Todo">
        <h1>Online Store</h1>
        <div class="Fondo">
          <img  class="img2" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST" alt="">
          <div class="Texto1" >
            <h2>Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.</h2><button>SHOP Now</button>
            </div>
      </div>
        `;
    }
}
customElements.define('card-3', ncard3);
export default ncard3;
