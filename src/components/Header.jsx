import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSearch } from '../controllers/searchController'


import '../styles/header.css'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaShoppingCart,
  FaSearch,
} from 'react-icons/fa'

function Header({ cartCount }) {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()
  return (
    <header>

      {/* TOP BAR */}
      <div className="top-header">
        <div className="container-fluid px-5">

          <div className="top-header-wrapper">

            <div className="top-left">
              <a href="#">FAQs</a>
              <span>|</span>

              <a href="#">Help</a>
              <span>|</span>

              <a href="#">Support</a>
            </div>

            <div className="top-right">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>

          </div>

        </div>
      </div>

      {/* MIDDLE HEADER */}
      <div className="middle-header">
        <div className="container-fluid px-5">

          <div className="middle-header-wrapper">

            {/* SEARCH */}
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search for products"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />

              <FaSearch
                className="search-icon"
                onClick={() => handleSearch(keyword, navigate)}
              />
            </div>

            {/* ICON */}
            <div className="header-icons">

              <div className="icon-box">
                <FaHeart />
                <span>0</span>
              </div>

              <div className="icon-box">
                <FaShoppingCart />
                <span>{cartCount}</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="bottom-header">
        <div className="container-fluid px-5">

          <div className="bottom-header-wrapper">

              <div className="left-navbar">

                {/* CATEGORY */}
                <div className="category-dropdown dropdown">

                  <button
                    className="category-btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Categories
                  </button>

                  <ul className="dropdown-menu">

                    <li><a className="dropdown-item" href="#">Dresses</a></li>
                    <li><a className="dropdown-item" href="#">Shirts</a></li>
                    <li><a className="dropdown-item" href="#">Jeans</a></li>
                    <li><a className="dropdown-item" href="#">Swimwear</a></li>
                    <li><a className="dropdown-item" href="#">Sleepwear</a></li>
                    <li><a className="dropdown-item" href="#">Sportswear</a></li>
                    <li><a className="dropdown-item" href="#">Jumpsuits</a></li>
                    <li><a className="dropdown-item" href="#">Blazers</a></li>
                    <li><a className="dropdown-item" href="#">Jackets</a></li>
                    <li><a className="dropdown-item" href="#">Shoes</a></li>

                  </ul>

                </div>

                {/* NAV */}
                <nav className="navbar-links">

                  <a href="#">Home</a>
                  <a href="#">Shop</a>
                  <a href="#">Shop Detail</a>

                  <div className="pages-dropdown dropdown">

                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>

                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Cart</a></li>
                      <li><a className="dropdown-item" href="#">Checkout</a></li>
                    </ul>

                  </div>

                  <a href="#">Contact</a>

                </nav>

              </div>

              {/* AUTH */}
              <div className="auth-links">
                <a href="#">Login</a>
                <a href="#">Register</a>
              </div>

            </div>

        </div>
      </div>

    </header>
  )
}

export default Header