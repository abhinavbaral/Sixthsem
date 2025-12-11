import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="/about">Company</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="/help">Help</a></li>
                        <li><a href="/returns">Returns</a></li>
                        <li><a href="/shipping">Shipping</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <div>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>

                <div>
                    <p>&copy; 2023 E-Shop. All rights reserved. | Built for BCA Project</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
