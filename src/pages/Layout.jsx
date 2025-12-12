import { Outlet } from "react-router";
import Navigation from "./Navigation";

function Layout() {
    return (
        <main className="container">
            <header>
                <Navigation />
            </header>
            <article className="">
                <Outlet />
                <h1>Típusok</h1>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Szűrés
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><a class="dropdown-item" href="#">Ház</a></li>
                        <li><a class="dropdown-item" href="#">Lakás</a></li>
                        <li><a class="dropdown-item" href="#">Garázs</a></li>
                        <li><a class="dropdown-item" href="#">Építési Telek</a></li>
                        <li><a class="dropdown-item" href="#">Mezőgazdasági Épület</a></li>
                        <li><a class="dropdown-item" href="#">Ipari Ingatlan</a></li>
                    </ul>
                </div>
            </article>
            <footer>
                <p>Készítette: Tordai Levente - Viczai Milán</p>
            </footer>
        </main>
    )
}

export default Layout;