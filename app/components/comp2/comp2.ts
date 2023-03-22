export enum Attri {
    "img" = "img",
    "name1" = "name1",
    "fecha" = "fecha",
}
class comp2 extends HTMLElement{
    img?: string;
    name1?: string;
    fecha?: string;

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        const attrs: Record<Attri, null> = {
            img: null,
            name1: null,
            fecha: null,
        };
        return Object.keys(attrs);
      }


    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(
        propName: Attri,
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


    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/comp2/comp2.css">
        <div class="Todo">
        <div class="post">
          <section class="reddit-wrap">
            <div>
            <img class="post-imag" src="${this.img}" alt="">
          </div>
          <div class="post-comments">
            <a href="#">${this.fecha}</a>
          </div>
          <div class="Featured">
          <span>${this.name1}</span>
        </div>
          </section>
          </div>
    </div>
  </div>
  <div>
  <a href="#" class="ReadMore">Read more</a>
  </div>
        `
        
    }
}

customElements.define('comp-2', comp2);
export default comp2;