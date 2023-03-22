class nbar extends HTMLElement {
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
        <link rel="stylesheet" href="./app/components/SearchBar/Bar.css">
        <nav class="main-nav">
            <nav class="navbar">
            <a href="#" class="navbar-brand"><img class="Rima" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nintendo_Logo_2017.png/640px-Nintendo_Logo_2017.png" alt=""></a>
            <div class="navbar-search">
            <form>
                <input type="text" placeholder="Search games, hardware, news, etc...">
                <button type="submit">Buscar</button>
            </form>
            </div>
            <div class="navbar-menu">
            <ul>
                <li><img class="N-icons"src="https://cdn-icons-png.flaticon.com/512/2344/2344684.png" alt=""><button><a href="#">Support</a></button></li>
                <li><img class="N-icons"src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/black_webpict35_1484337166-1.png" alt=""><button><a href="#">Wish list</a></button></li>
                <li><img class="N-icons"src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png" alt=""><button><a href="#">cart</a></button></li>
                <li><img class="N-icons"src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt=""><button><a href="#">Log in/sign up</a></button></li>
            </ul>
            </div>
        </nav>
        <nav class="main-nav">
            <nav class="navbar">
                <div class="navbar-nin">
                <ul>
                    <li><img class="N-icons"src="https://cdn-icons-png.flaticon.com/512/2344/2344684.png" alt=""><button><a href="#">Support</a></button></li>
                    <li><img class="N-icons"src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/black_webpict35_1484337166-1.png" alt=""><button><a href="#">Wish list</a></button></li>
                    <li><img class="N-icons"src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png" alt=""><button><a href="#">cart</a></button></li>
                    <li><img class="N-icons"src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" alt=""><button><a href="#">Log in/sign up</a></button></li>
                </ul>
                </div>
            </nav>
        `;
        }
    }
}
customElements.define("nin-bar", nbar);
export default nbar;
