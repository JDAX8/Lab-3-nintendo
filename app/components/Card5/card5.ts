export enum Attr {
    "image" = "image",
    "name" = "name",
    "date" = "date",
    "desc" = "desc",
}
class ncard5 extends HTMLElement{
    image?: string;
    name?: string;
    date?: string;
    desc?: string;

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        const attrs: Record<Attr, null> = {
            image: null,
            name: null,
            date: null,
            desc: null,
        };
        return Object.keys(attrs);
      }


    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(
        propName: Attr,
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
        <link rel="stylesheet" href="./app/components/Card5/Card5.css">
        <div class="Todo">
        <div class="Fondo">
          <img  class="img2" src="${this.image}" alt="">
      </div>
      <div class="post-comments">
      <a href="#">${this.date}</a>
      </div>
      <div class="Name">
      <h1>${this.name}</h1>
      </div>
      <div class="desc">
      <h4>${this.desc}</h4>
      </div>

        
        `
        
    }
}

customElements.define('card-5', ncard5);
export default ncard5;