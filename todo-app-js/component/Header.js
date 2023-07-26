import html  from "../core.js";

function Header() {
    return html`
        <header id="header" >
            <div class="flex">
                <h1 class="header__title">todo</h1>
            </div>
        </header>
    `
}

export default Header