import React from "react";

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">COFFEE STORE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Limpieza</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Maquinaria</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Elementos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;