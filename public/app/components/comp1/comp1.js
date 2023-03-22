export var Attribute;
(function (Attribute) {
    Attribute["image"] = "image";
    Attribute["name"] = "name";
    Attribute["plataform"] = "plataform";
})(Attribute || (Attribute = {}));
class comp1 extends HTMLElement {
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
            <div class="post">
              <section class="reddit-wrap">
                <div class="post-header">
                  <div class="post-subtitle">
                  </div>
                </div>
                <div class="post-content">
                </div>
                <div class="post-imag">
                  <img class="reddit-image" src="${this.image}" alt="">
              </div>
              <div class="Featured">
              <span>${this.name}</span>
            </div>
                <div class="post-footer">
                  <div class="post-comments">
                    <a href="#">${this.plataform}</a>
                  </div>
                </div>
              </section>
              </div>
        </div>
      </div>
        `;
    }
}
customElements.define('comp-1', comp1);
export default comp1;
