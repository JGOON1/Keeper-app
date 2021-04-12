import React from 'react';


function Footer() {

    const currentDate = new Date().getFullYear();


    return (
        <Footer>
            <p>Copyright ⓒ {currentDate}</p>
        </Footer>
    );
}

export default Footer