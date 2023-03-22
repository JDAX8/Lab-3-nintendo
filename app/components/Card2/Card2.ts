export enum Att {
    "image" = "image",
    "name" = "name",
    "plataform" = "plataform",
}
class ncard2 extends HTMLElement{
    image?: string;
    name?: string;
    plataform?: string;

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        const attrs: Record<Att, null> = {
            image: null,
            name: null,
            plataform: null,
        };
        return Object.keys(attrs);
      }


    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(
        propName: Att,
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
        <link rel="stylesheet" href="./app/components/Card2/Card2.css">
        <div class="Todo">
        <h1>Featured</h1>
        <div class="Fondo">
          <img  class="img2" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/merchandising/secondary-centerstage/2023/MAR10%20Day/Sale/3580x1080_MAR10-Day-Sale-W1_Secondary_Desktop" alt="">
          <div class="Texto1" >
            <h2>Save through 3/23 at 11:59 p.m. PT</h2><button>SHOP Now</button>
            </div>
      </div>
        `
        
    }
}

customElements.define('card-2', ncard2);
export default ncard2;