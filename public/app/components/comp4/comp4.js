export var Attribu;
(function (Attribu) {
    Attribu["image"] = "image";
    Attribu["name"] = "name";
    Attribu["date"] = "date";
    Attribu["price"] = "price";
    Attribu["plataform"] = "plataform";
})(Attribu || (Attribu = {}));
class comp4 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
            date: null,
            price: null,
            plataform: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attribu.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/comp4/comp4.css">
        <div class="Todo">
        <div class="post">
          <section class="reddit-wrap">
            <div>
            <img class="post-imag" src="${this.image}" alt="">
          </div>
          <div class="Featured">
          <span>${this.name}</span>
        </div>
        <div class="post-comments">
            <a>${this.date}</a>
          </div>
          <div class="Featured">
          <span>${this.price}</span>
        </div>
        <div class="post-comments">
            <a>${this.plataform}</a>
          </div>
          </section>
          </div>
    </div>
  </div>
        `;
    }
}
customElements.define('comp-4', comp4);
export default comp4;
