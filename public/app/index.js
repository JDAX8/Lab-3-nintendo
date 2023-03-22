import "./components/index.js";
import Fdata from "./data.js";
import Ndata1 from "./data2.js";
import NData from "./data1.js";
import CData from "./data3.js";
import BData from "./data4.js";
import { Attribute } from "./components/comp1/comp1.js";
import { Attri } from "./components/comp2/comp2.js";
import { Attr } from "./components/Card5/card5.js";
import { Attrib } from "./components/Card6/card6.js";
import { Attribu } from "./components/comp4/comp4.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.mycomp = [];
        this.ncomp = [];
        this.mycomp2 = [];
        this.mycard = [];
        this.mycomp4 = [];
        this.attachShadow({ mode: "open" });
        Fdata.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("comp-1");
            profileCard.setAttribute(Attribute.name, user.name);
            profileCard.setAttribute(Attribute.image, user.image);
            profileCard.setAttribute(Attribute.plataform, user.plataform);
            this.mycomp.push(profileCard);
        });
        NData.forEach((news2) => {
            const NewsCard2 = this.ownerDocument.createElement("comp-2");
            NewsCard2.setAttribute(Attri.name1, news2.name1);
            NewsCard2.setAttribute(Attri.img, news2.img);
            NewsCard2.setAttribute(Attri.fecha, news2.fecha);
            this.mycomp2.push(NewsCard2);
        });
        Ndata1.forEach((news) => {
            const Newscard = this.ownerDocument.createElement("card-5");
            Newscard.setAttribute(Attr.image, news.image);
            Newscard.setAttribute(Attr.name, news.name);
            Newscard.setAttribute(Attr.desc, news.desc);
            Newscard.setAttribute(Attr.date, news.date);
            this.ncomp.push(Newscard);
        });
        CData.forEach((Characters) => {
            const CharactersCard = this.ownerDocument.createElement("card-6");
            CharactersCard.setAttribute(Attrib.image, Characters.image);
            CharactersCard.setAttribute(Attrib.name, Characters.name);
            ;
            this.mycard.push(CharactersCard);
        });
        BData.forEach((BestSell) => {
            const BestSeller = this.ownerDocument.createElement("comp-4");
            BestSeller.setAttribute(Attribu.name, BestSell.name);
            BestSeller.setAttribute(Attribu.image, BestSell.image);
            BestSeller.setAttribute(Attribu.date, BestSell.date);
            BestSeller.setAttribute(Attribu.plataform, BestSell.plataform);
            BestSeller.setAttribute(Attribu.price, String(BestSell.price));
            this.mycomp4.push(BestSeller);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">

                <nin-bar></nin-bar>

                <card-1></card-1>

                <card-2></card-2>
                `;
            const mycomp = this.ownerDocument.createElement("section");
            mycomp.className = 'fcomp1';
            this.mycomp.forEach((user) => {
                mycomp.appendChild(user);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mycomp);
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">

                <card-3></card-3>

                <card-4></card-4>
                `;
            const ncard5 = this.ownerDocument.createElement("div");
            ncard5.className = 'ncomp1';
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <div class="letra">
                <h1>Gaming systems</h1>
                </div>
                `;
            this.ncomp.forEach((news) => {
                ncard5.appendChild(news);
            });
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(ncard5);
            const mycomp2 = this.ownerDocument.createElement("section");
            mycomp2.className = 'ncomp2';
            this.mycomp2.forEach((newscar) => {
                mycomp2.appendChild(newscar);
            });
            (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(mycomp2);
            this.shadowRoot.innerHTML += `
                <div>
                <button class="art">see all new articles</button>
                </div>
                `;
            const ncard6 = this.ownerDocument.createElement("div");
            ncard6.className = 'ncard6';
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <div class="letra">
                <h1>Characters</h1>
                </div>
                `;
            this.mycard.forEach((Characters) => {
                ncard6.appendChild(Characters);
            });
            (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(ncard6);
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <div class="letra">
                <h1>Digital best sellers</h1>
                </div>
                `;
            const mycomp4 = this.ownerDocument.createElement("section");
            mycomp4.className = 'ncomp4';
            this.mycomp4.forEach((BestS) => {
                mycomp4.appendChild(BestS);
            });
            (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(mycomp4);
        }
    }
}
customElements.define("app-cont", AppContainer);
