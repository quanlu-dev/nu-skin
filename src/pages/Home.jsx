import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/home.css'
import '../styles/slider.css'
import '../styles/skincare.css'
import '../styles/product.css'
import '../styles/news-banner.css'
import '../styles/info.css'
import '../styles/award.css'
import '../styles/title.css'

import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

function Home() {
  const [cartCount, setCartCount] = useState(0)
  const [activeTab, setActiveTab] = useState('description')
  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <div className="px-5">
        <section className="hero-section">

          <div className="hero-slider">

            <img
              src="/src/assets/home-nuskin.webp"
              alt=""
            />

            {/* OVERLAY */}
            <div className="hero-overlay">

              <div className="hero-content">

                <p>
                  10% OFF YOUR FIRST ORDER
                </p>

                <h1>
                  Reasonable Price
                </h1>

                <button>
                  Shop Now
                </button>

              </div>

            </div>

            {/* ARROWS */}
            <button className="arrow-btn arrow-left">
              <FaChevronLeft />
            </button>

            <button className="arrow-btn arrow-right">
              <FaChevronRight />
            </button>

          </div>

        </section>
        <section className="banner-section">

          <div className="banner-item">

            <img
              src="/src/assets/home-top1.webp"
              alt=""
            />

            <div className="banner-overlay">

              <p>PREFER CUSTOMER 2025</p>

              <h3>Winter Collection</h3>

              <button>Shop Now</button>

            </div>

          </div>

          <div className="banner-item">

            <img
              src="/src/assets/home-top2.webp"
              alt=""
            />

            <div className="banner-overlay">

              <p>PREFER CUSTOMER 2025</p>

              <h3>Winter Collection</h3>

              <button>Shop Now</button>

            </div>

          </div>

        </section>

        <div className="product-section">

          <section className="section-title-wrapper">

            <div className="section-title">

              <span className="title-line"></span>

              <span>
                Most Popular Products
              </span>

              <span className="title-line"></span>

            </div>

          </section>

          <section className="popular-wrapper">

            {/* LEFT BANNER */}
            <div className="popular-banner">

              <img
                src="/src/assets/background-2.png"
                alt=""
              />
              <div className="popular-banner-overlay">

                <h2>
                  Find out <br />
                  what <br />
                  everyone's <br />
                  talking <br />
                  about
                </h2>
              
                <p>
                  Browse our best
                </p>
              
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="popular-content">

              {/* TOP */}
              <div className="popular-top">

                <div className="popular-tabs">

                  <button
                    className={activeTab === 'description' ? 'active-tab' : ''}
                    onClick={() => setActiveTab('description')}
                  >
                    DESCRIPTION
                  </button>

                  <button
                    className={activeTab === 'specifications' ? 'active-tab' : ''}
                    onClick={() => setActiveTab('specifications')}
                  >
                    SPECIFICATIONS
                  </button>

                </div>

                <div className="popular-actions">

                  <a href="#">
                    View All {'>>'}
                  </a>

                </div>

              </div>

              {/* PRODUCTS */}
              <div className="popular-products-wrapper">

  <button className="side-arrow left-arrow">
    <FaChevronLeft />
  </button>
<div className="popular-products">
 {/* CARD */}
 <div className="popular-card">
   <div className="sale-tag">
     SALE
   </div>
   <img
     src="/src/assets/sp2.avif"
     alt=""
   />
   <div className="popular-card-content">

  <p className="product-brand">
    AGELOC
  </p>

  <h4>
    Pure Pineapple
  </h4>

  <div className="price-box">

    <span className="new-price">
      $14.00
    </span>

    <span className="old-price">
      $35.00
    </span>

  </div>

  <button onClick={addToCart}>
    Add to cart
  </button>

</div>

 </div>
 {/* CARD */}
 <div className="popular-card">
   <div className="sale-tag">
     SALE
   </div>
   <img
     src="/src/assets/sp1.avif"
     alt=""
   />
   <div className="popular-card-content">
  <p className="product-brand">
    AGELOC
  </p>

  <h4>
    Pure Pineapple
  </h4>
  <div className="price-box">
    <span className="new-price">
      $14.00
    </span>
    <span className="old-price">
      $35.00
    </span>
  </div>
  <button onClick={addToCart}>
    Add to cart
  </button>
</div>

  </div>

                {/* CARD */}
<div className="popular-card">

  <div className="sale-tag">
    SALE
  </div>
    <img
    src="/src/assets/sp2.avif"
    alt=""
/>
  <div className="popular-card-content">

  <p className="product-brand">
    AGELOC
  </p>
  <h4>
    Pure Pineapple
  </h4>
  <div className="price-box">
    <span className="new-price">
      $14.00
    </span>
    <span className="old-price">
      $35.00
    </span>
  </div>
  <button onClick={addToCart}>
    Add to cart
  </button>
</div>
    </div>
  </div>

  <button className="side-arrow right-arrow">
    <FaChevronRight />
  </button>
              </div>
              <div className="slider-dots">
                <span className="active-dot"></span>
                <span></span>
                <span></span>
              </div>
            </div>
</section>

<section className="skincare-section">
  <div className="skincare-container">
    {/* LEFT IMAGE */}
    <div className="skincare-left">
      <img
        src="/src/assets/machine.jpg"
        alt=""
        className="skincare-img"
      />
      {/* SALE BADGE */}
      <div className="sale-badge">
        <p>Sale Of</p>
        <h4>$29.99</h4>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="skincare-right">
      <p className="brand">
        AGELOC &reg; LUMISPA &reg; IO
      </p>
      <h2 className="title">
        ageLOC &reg; LumiSpa &reg; iO
      </h2>
      <p className="desc">
        Elevate your skincare routine
      </p>
      <button className="shop-btn">
        SHOP NOW
      </button>
    </div>
  </div>
</section>


          <section className="section-title-wrapper">
            <div className="section-title">
              <span className="title-line"></span>
              <span>
                Award And Recognition
              </span>
              <span className="title-line"></span>
            </div>
          </section>


        
<section className="awards-container">
  {/* Header banner với các thiết bị */}
  <div className="awards-header-banner">
  <img src="/src/assets/banner3.avif" alt="Beauty Devices" className="banner-bg-img" />
  
  <div className="header-overlay-content">
    <p className="world-no1">WORLD'S #1 COMPANY FOR</p>
    <h2>Beauty & Wellness Device Systems</h2>
    <p className="source-text">Source: Euromonitor</p>
  </div>
</div>

  {/* Grid chứa các giải thưởng */}
  <div className="awards-grid">
    {/* Award 1 */}
    <div className="award-item">
      <div className="award-logo">
        <img src="/src/assets/aw1.png" alt="NewBeauty Award" />
      </div>
      <div className="award-info">
        <h3>ageLOC® LumiSpa® iO</h3>
        <p>2023 Best Cleansing Device Award Winner NewBeauty Awards</p>
      </div>
    </div>

    {/* Award 2 */}
    <div className="award-item">
      <div className="award-logo">
        <img src="/src/assets/aw2.png" alt="Beauty Bible" />
      </div>
      <div className="award-info">
        <h3>Epoch Baobab Body Butter</h3>
        <p>Body Butter Silver Winner 2023 Beauty Bible Awards</p>
      </div>
    </div>

    {/* Award 3 */}
    <div className="award-item">
      <div className="award-logo">
        <img src="/src/assets/aw3.png" alt="Global Makeup Awards" />
      </div>
      <div className="award-info">
        <h3>Nu Skin Enterprises</h3>
        <p>2022 Best USA Beauty Brand Global Makeup Awards</p>
      </div>
    </div>

    {/* Award 4 */}
    <div className="award-item">
      <div className="award-logo">
        <img src="/src/assets/aw4.png" alt="Global Green Beauty" />
      </div>
      <div className="award-info">
        <h3>Epoch® Yin & Yang Mask</h3>
        <p>2022 Most Sustainable Packaging: Silver Winner Global Green Beauty Awards</p>
      </div>
    </div>

    {/* Award 5 */}
    <div className="award-item">
      <div className="award-logo">
        <img src="/src/assets/aw5.png" alt="InStyle" />
      </div>
      <div className="award-info">
        <h3>ageLOC® Facial Spa</h3>
        <p>2021 Readers' Choice Beauty Award Winner InStyle</p>
      </div>
    </div>

    {/* Award 6 */}
    <div className="award-item">
      <div className="award-logo">
        <img src="/src/assets/aw6.png" alt="Pure Beauty" />
      </div>
      <div className="award-info">
        <h3>Nutricentials® Eye Love Bright Eyes</h3>
        <p>2022 Pure Beauty Award Finalist Pure Beauty Global Awards</p>
      </div>
    </div>
  </div>

  
  <div className="slider-dots">
    <span className="active-dot"></span>
    {[...Array(9)].map((_, i) => <span key={i}></span>)}
  </div>
</section>

<section className="section-title-wrapper">
  <div className="section-title">
    <span className="title-line"></span>
    <span>
      The Nu Skin Way
    </span>
    <span className="title-line"></span>
  </div>
</section>

<section className="impact-section-full">
  <div className="impact-container-full">
    <div className="impact-left">
      <h2>Nu Skin, <br /> Improving Lives Everyday</h2>
    </div>

    <div className="impact-right">
      <div className="stat-item">
        <h3>25+</h3>
        <p>Years of Giving</p>
      </div>

      <div className="stat-item">
        <h3>20+</h3>
        <p>Current Social Projects</p>
      </div>

      <div className="stat-item">
        <h3>850M+</h3>
        <p>Meals Donated through <br /> Nourish the Children</p>
      </div>
    </div>
  </div>
</section>

<section className="info-grid-section">
  
  <div className="info-row">
    <div className="info-image">
      <img src="/src/assets/children.png" alt="Children" />
    </div>
    <div className="info-content">
      <h2>Being a Force for Good</h2>
      <p>
        Some call it corporate social responsibility. We call it our purpose. 
        Together we're engaged in initiatives worldwide—nourishing thousands 
        of hungry children, funding pediatric health and wellness services, 
        or striving for a more sustainable future.
      </p>
      <a href="#" className="info-link">Explore our projects</a>
    </div>
  </div>

  
  <div className="info-row reverse">
    <div className="info-image">
      <img src="/src/assets/bottle.png" alt="Bottle" />
    </div>
    <div className="info-content">
      <h2>Nature + Science</h2>
      <p>
        Capturing the best in nature to bring you the best results is our personal mission. 
        We combine powerful ingredients with innovative science and technology. 
        The result? World-class products that deliver real benefits.
      </p>
      <a href="#" className="info-link">Discover more</a>
    </div>
  </div>
</section>

<section className="section-title-wrapper">
  <div className="section-title">
    <span className="title-line"></span>
      <span>
        Nu Skin In The News
      </span>
    <span className="title-line"></span>
  </div>
</section>
          
    
<section className="news-wrapper">
  <div className="news-content">
    <div className="popular-top">
      <div className="popular-actions">
        <a href="#">View All {'>>'}</a>
      </div>
    </div>

    <div className="popular-products-wrapper">
      <button className="side-arrow left-arrow">
        <FaChevronLeft />
      </button>
      
      <div className="popular-products">
        {/* CARD 1 */}
        <div className="news-card">
          <img src="/src/assets/ITN_self.png" alt="" />
          <div className="news-card-content">
            <p>
              38 New Beauty Products <br />
              Our Editors Are Loving This <br />
              December
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="news-card">
          <img src="/src/assets/Popsugar_News.png" alt="" />
          <div className="news-card-content">
            <p>
              38 New Beauty Products <br />
              Our Editors Are Loving This <br />
              December
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="news-card">
          <img src="/src/assets/2022_New-Beauty.png" alt="" />
          <div className="news-card-content">
            <p>
              38 New Beauty Products <br />
              Our Editors Are Loving This <br />
              December
            </p>
          </div>
        </div>
      </div>

      <button className="side-arrow right-arrow">
        <FaChevronRight />
      </button>
    </div>

    <div className="slider-dots">
      <span className="active-dot"></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div className="news-banner">
    <img src="/src/assets/bannerbt.png" alt="" />
    <div className="news-banner-overlay">
      <h2>News</h2>
      <p>Nu Skin In The News</p>
    </div>
  </div>
</section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home