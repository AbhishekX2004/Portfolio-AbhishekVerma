import React from "react";

function Footer(props){
    return(
        <footer>
            <hr/>
            <div className="footer">
                <p>
                    Copyright &#169; {new Date().getFullYear()} All rights reserved
                </p>
                <p>
                    Made with &#128151; by Abhishek Verma
                </p>
            </div>
                
        </footer>
    );
}

export default Footer;