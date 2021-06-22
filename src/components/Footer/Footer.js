import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h2>Join Our Mailing List</h2>
                <div className="footer-body">
                    <div className="footer-left">
                        <input name="email" placeholder="Email" />
                        <button>Subscribe</button>
                    </div>

                    <div className="footer-right">
                        <li>
                            <a href="/">Contact</a>
                            <a href="/">Privacy and policy</a>
                            <a href="/">Terms and Conditions</a>
                            <a href="/">Latest News</a>
                        </li>
                    </div>
                </div>
                <div className="copyright">
                    <p> &copy; 2021 SWAPPED! All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;