export enum Att {
    "image" = "image",
    "name" = "name",
    "plataform" = "plataform",
}
class ncard4 extends HTMLElement{
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
        <link rel="stylesheet" href="./app/components/Card4/Card4.css">
        <div class="Todo">
        <h1>Gaming systems</h1>
        <div class="Fondo">
          <img  class="img2" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_1200/v1678897483/ncom/en_US/merchandising/Optimization/featured-shelf-test/MAR10-Day/3580x1080_secondary-centerstage_Mario-HW-Bundle_Desktop.png" alt="">
      </div>
        `
        
    }
}

customElements.define('card-4', ncard4);
export default ncard4;