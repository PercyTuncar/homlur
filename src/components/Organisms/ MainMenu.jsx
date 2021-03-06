
import React from "react"
import { NavLink } from "react-router-dom"

const MainMenu = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://firebasestorage.googleapis.com/v0/b/homlur.appspot.com/o/Identidad%20corporativa%2FLogos%2FHomlur_Logo_White_RGB.svg?alt=media&token=fd39abf3-fa25-4015-8880-5059e121258d" width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Alquilar
      </a>

      <a class="navbar-item">
        Publicar
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Más
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Quienes somos
          </a>
          <a class="navbar-item">
            Cómo funciona Homlur
          </a>
          <a class="navbar-item">
            Contacto
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Equipo
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Registrate</strong>
          </a>
          <a class="button is-light">
            Inicia sesión
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

)

export default MainMenu


