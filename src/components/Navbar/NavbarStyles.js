import styled from "styled-components";
import { Link } from "react-router-dom";

// HEADER - WRAPPER
export const HeaderContainer = styled.div`
    height:80px;
    display: flex;
    margin-top:20px;

   
`

// HEADER - LEFT
export const Logo = styled.div`
    flex: 10%;
    max-width:180px;
    height:auto;
    display: flex;
    align-items: center;
    padding-left: 39px;

    @media (max-width:768px) {
        padding-left:25px;
    }
    
    @media (max-width: 400px) {
        flex:2%;
        width: 80px;
    }
`
// HEADER - MIDDLE

export const SearchMenu = styled.div`
    max-width: 650px;
    display: flex;
    align-items: center;
    padding-left: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`
// SEARCH CONTAINER
export const SearchContainer = styled.div`
    input {
        min-width: 460px;
        height:50px;
        border-radius: 10px;
        font-size:15px;
    }
`

// HEADER - RIGHT
export const HeaderMenu = styled.div`
    flex: 20%;
    display: flex;
    position: relative;
    left:50px;
    align-items: center;
    color:#7E7E7E;
    text-align: center;

    span {
        vertical-align:middle;
        margin-left: 20px;
        cursor:pointer;
        display: inline-block;
        float: left;

        img {
            position: relative;
            right:3px;
            vertical-align:middle;
                
        }   
    }

    
    @media (max-width: 700px){
        position:relative;
        left:10px;


        span.favorite{
            display: none;
        }
    }

    @media (max-width: 400px) {
        position:relative;
        text-wrap: nowrap;
        right:100px;
        width: 20%;

        span {

        }
    }

`
export const HamburgerMenu = styled.div`
    cursor:pointer;
    color: #253D4E;
    backgroundColor:transparent;
    border: none;

    @media (min-width: 768px) {
        display: none
    }

    @media (max-width: 400px) {
        position: relative;
        right:10px;
    }
`

// NAVBAR - WRAPPER
export const NavbarContainer = styled.nav`
    width: 100%;
    // height: 80px;
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-quicksand);
    
`

export const NavbarLinkContainer = styled.div`
    display: flex;
    position:relative;
    bottom:35px;

    @media (max-width: 768px) {
        display: none
    }

`
export const NavLink  = styled(Link)`
    color: #253D4E;
    font-size:12px;
    text-decoration: none;
    margin:22px 4px 18px 18px;
    position: relative;
    font-weight:700;
    top:25px;

    @media (max-width: 768px) {
        padding:0px 10px;
        position: relative;
        top:0px;
    }
    div.helpline {
        position: relative;
        bottom:17px;
        left:9px;

        span {
            color:#5D84C1;
            position: relative;
            left:5px;
            font-size:16px;
        }

        p {
            font-family:var(--font-family-lato);
            font-size:12px;
            color:#7E7E7E;
            position: relative;
            top:27px;
            right:70px;
            float:right
        }
            
    }
    // ON MOBILE

    div.helplinemobile {
        position: relative;
        bottom:10px;

        span {
            color:#5D84C1;
            position: relative;
            left:5px;
            font-size:16px;
        }

        p {
            font-family:var(--font-family-lato);
            font-size:12px;
            color:#7E7E7E;
            position: relative;
            bottom:10px;
            left:110px;
        }
            
    }

`


// NAVBAR ON MOBILE
export const MobileNav = styled.nav`
        display: flex;
        position: relative;
        bottom:30px;
        flex-direction: column;
        align-items: left;
        z-index:100;

        .category-dropdown {
            width: "140px",
            height: "4.5em",
            backgroundColor:"#6D8DBF",
            borderRadius:"5px",
            color:"white",
            marginTop:"25px",
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }
        .dropdown-ds{
            minWidth: "90%",
            height: "4.5em",
            box-shadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
            borderRadius:"5px",
            color:"white",
            margin:"25px",
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }
        @media (min-width: 768px) {
            display: none;
        }
`