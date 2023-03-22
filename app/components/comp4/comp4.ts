export enum Attribu {
    "image" = "image",
    "name" = "name",
    "date" = "date",
    "price" = "price",
    "plataform" = "plataform",


}
class comp4 extends HTMLElement{
    image?: string;
    name?: string;
    date?: string;
    price?: number;
    plataform?: string;

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        const attrs: Record<Attribu, null> = {
            image: null,
            name: null,
            date: null,
            price: null,
            plataform: null,
        };
        return Object.keys(attrs);
      }


    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(
        propName: Attribu,
        _: string | undefined,
        newValue: string | undefined
        ) {
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


    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/comp2/comp2.css">
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
            <h1>${this.plataform}</h1>
          </div>
          </section>
          </div>
    </div>
  </div>
        `
        
    }
}

customElements.define('comp-4', comp4);
export default comp4;