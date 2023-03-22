class ncard1 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/Card1/card1.css">
    <div class="Todo">
        <div class="Fondo">
        <img  class="img2" src="https://w0.peakpx.com/wallpaper/73/562/HD-wallpaper-purple-dots.jpg" alt="">
        <div>
        <img class="Imagen1" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop" alt="">
        </div>
        </div>
        <div class="Texto1" >
        <h1>Pre-order digitally today, play on 3/17</h1><button>Pre-oder Now</button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ESRB_Teen.svg/1200px-ESRB_Teen.svg.png" alt=""><h4>Animated Blood, Fantasy Violence</h4>

        </div>
    </div>
        `;
        }
    }
}
customElements.define("card-1", ncard1);
export default ncard1;
