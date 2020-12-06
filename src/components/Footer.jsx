import React from 'react';



const Footer = () => {
    let d = new Date();
    let year = d.getFullYear();
    return(
        <footer>
            <p>Copyright © {year} AlleSys </p>
        </footer>
    );
};

export default Footer;