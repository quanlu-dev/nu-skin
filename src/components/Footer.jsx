import '../styles/footer.css'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronRight,
} from 'react-icons/fa'
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAmericanexpress,
  SiDiscover,
  SiGooglepay,
} from 'react-icons/si'

function Footer() {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-top">
        <div className="container-fluid px-lg-5 px-4">

          <div className="row gy-5">

            {/* LEFT */}
            <div className="col-lg-4 col-md-6">

              <p className="footer-desc">
                Dolore erat dolor sit lorem vero amet.
                Sed sit lorem magna, ipsum no sit erat
                lorem et magna ipsum dolore amet erat.
              </p>

              <div className="footer-contact">

                <p>
                  <FaMapMarkerAlt />
                  123 Street, New York, USA
                </p>

                <p>
                  <FaEnvelope />
                  info@example.com
                </p>

                <p>
                  <FaPhoneAlt />
                  +012 345 67890
                </p>

              </div>

            </div>

            {/* QUICK LINKS 1 */}
            <div className="col-lg-2 col-md-6">

              <h5 className="footer-title">
                Quick Links
              </h5>

              <div className="footer-links">

                <a href="#">
                  <FaChevronRight />
                  Home
                </a>

                <a href="#">
                  <FaChevronRight />
                  Our Shop
                </a>

                <a href="#">
                  <FaChevronRight />
                  Shop Detail
                </a>

                <a href="#">
                  <FaChevronRight />
                  Shopping Cart
                </a>

                <a href="#">
                  <FaChevronRight />
                  Checkout
                </a>

                <a href="#">
                  <FaChevronRight />
                  Contact Us
                </a>

              </div>

            </div>

            {/* QUICK LINKS 2 */}
            <div className="col-lg-2 col-md-6">

              <h5 className="footer-title">
                Quick Links
              </h5>

              <div className="footer-links">

                <a href="#">
                  <FaChevronRight />
                  Home
                </a>

                <a href="#">
                  <FaChevronRight />
                  Our Shop
                </a>

                <a href="#">
                  <FaChevronRight />
                  Shop Detail
                </a>

                <a href="#">
                  <FaChevronRight />
                  Shopping Cart
                </a>

                <a href="#">
                  <FaChevronRight />
                  Checkout
                </a>

                <a href="#">
                  <FaChevronRight />
                  Contact Us
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">

        <div className="container-fluid px-lg-5 px-4">

          <div className="footer-bottom-wrapper">

            <div className="copyright">
              © <b>Your Site Name</b>. All Rights Reserved.
              Designed by <span>HTML Codex</span><br />
                Distributed by ThemeWagon
            </div>

            <div className="payment-icons">

  <SiVisa className="visa" />
  <SiMastercard className="mastercard" />
  <SiPaypal className="paypal" />
  <SiAmericanexpress className="amex" />
  <SiDiscover className="discover" />
  <SiGooglepay className="gpay" />

</div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer