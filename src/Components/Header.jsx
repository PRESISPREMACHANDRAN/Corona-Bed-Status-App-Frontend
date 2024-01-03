import React from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="navbar bg-info ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            Corona Bed Status App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Corona Bed Status
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Add Data
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/viewAll"
                  >
                    View All
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/search"
                  >
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header