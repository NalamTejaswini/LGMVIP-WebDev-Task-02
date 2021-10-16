import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, } from "react-icons/fa";

const Header = () => {
    return ( < >

        <
        nav className = "mainnav" >
        <
        div className = "logo" >
        <
        h2 >
        <
        span > T < /span>hapa <
        span > T < /span>echnical   <
        /h2>   <
        /div > <
        div className = "menulink" >
        <
        ul >
        <
        li > < a href = "#" > Home < /a></li >
        <
        li > < a href = "#" > About < /a></li >
        <
        li > < a href = "#" > Services < /a></li >
        <
        li > < a href = "#" > Contact < /a></li >
        <
        /ul> <
        /div>  <
        div className = "socialmedia" >
        <
        ul >
        <
        li > < a href = "www.facebook.com" > < FaFacebookSquare className = "Facebook" / > < /a></li >
        <
        li > < a href = "www.Instagram.com" > < FaInstagramSquare className = "Instagram" / > < /a></li >
        <
        li > < a href = "www.youtube.com" > < FaYoutubeSquare className = "YouTube" / > < /a></li >
        <
        /ul>   <
        /div> <
        /nav>

        <
        />
    )
}
export default Header