import React from 'react';
import styled from 'styled-components';

const FooterPosition = styled.footer `
bottom : 2px;  
height : 40px;  
margin-top : 40px;  
text-align: center;  
vertical-align: middle; 
position:fixed;
width:100%;
font-weight: bold;
`

function Footer() {
  return(
    <FooterPosition>
      &copy;2021 Mikey Kriegel
    </FooterPosition>
  );
}

export default Footer;