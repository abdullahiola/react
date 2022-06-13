import React, {useState} from 'react'
import { 
  HeaderContainer,
  HeaderMenu,
  HamburgerMenu,
  Logo,
  MobileNav,
  NavbarContainer,
  NavbarLinkContainer,
  NavLink,
  SearchContainer,
  SearchMenu
} from './NavbarStyles';
import Button from "../Button"
import { Divider, Dropdown, Input, Menu, Space } from "antd";
import styled from "styled-components";
import cwayLogo from "../../assets/images/cwaylogo.png";
import CartIcon from "../../assets/icons/cart-icon.svg";
import FavouriteIcon from "../../assets/icons/favorite-icon.svg";
import UserIcon from "../../assets/icons/user-icon.svg";
import discount from "../../assets/icons/discount.svg"
import category from "../../assets/icons/category.svg"
import caret from "../../assets/icons/caret.svg"
import caretdown from "../../assets/icons/caret-down.svg"
import helpline from "../../assets/icons/helpline.svg"
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import CloseOutlined from "@ant-design/icons/CloseOutlined";
import "antd/dist/antd.min.css";

const Navbar = () => {

  const handleClick = (e) => {
    e.preventDefault();
  }

  // Mobile Nav Function 
  const [mobile, setIsMobile] = useState(false)

  const otherCategories = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/menu">
              1st menu item
            </a>
          ),
        },

        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/menu">
              2nd menu item 
            </a>
          ),
        },

        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/menu">
              3rd menu item
            </a>
          ),
        },
      ]}
    >

    </Menu>
  )
  return (
   <>
     <HeaderContainer>
      <Logo>
        <img src={cwayLogo} alt="logo"/>
      </Logo>

      <SearchMenu>
          <SearchContainer>
              <Input
                prefix={<SearchOutlined/>}
                placeholder='Search products, brands and categories'
                allowClear
                suffix
              />
        </SearchContainer>

        <Button>
          SEARCH
        </Button>
      </SearchMenu>

      <HeaderMenu>
        <span className="favorite"> <img src={FavouriteIcon} alt="Favourite"/> Favourites </span>
        <span> <img src={UserIcon} alt="User"/> Login/Sign Up </span>
        <span> <img src={CartIcon} alt="Cart"/> Cart</span>
        <HamburgerMenu 
          onClick={() => {
            setIsMobile((nav => !nav));
          }}
          >
            { !mobile ? <MenuOutlined/> : <CloseOutlined /> }
          
        </HamburgerMenu>
      </HeaderMenu>
    </HeaderContainer>

    <Divider/>

    <NavbarContainer>
      <NavbarLinkContainer>
          <div style={{
                width: "240px",
                height: "4.5em",
                backgroundColor:"#6D8DBF",
                borderRadius:"5px",
                color:"white",
                margin:"25px",
                whiteSpace:"nowrap",
                overflow:"hidden",
                textOverflow:"ellipsis"
              }}>
            <Dropdown
              overlay={
                <Menu 
                  style={{
                    position:"relative", 
                    top:"20px"
                  }}
                  >
                  {otherCategories}
                </Menu> 
              }
            >
              <DropdownLink
                onClick={handleClick}
                trigger={['click']}
                >
                <Space 
                  style={{
                    color: 'white',
                    padding:"0px 10px",
                  }}
                >
                  <span>
                    <img src={category} style={{padding: "1px 0px 5px 3px"}} alt=""/>
                  </span>
                    Browse All categories
                  <span style={{float:"right"}}><img src={caretdown} alt=""/></span>
                </Space>
              </DropdownLink>
            </Dropdown>
          </div>
          <NavLink to="/">
            <span>
              <img src={discount} alt=""
                style={{
                  position:"relative",
                  bottom:"3px",
                  padding: "1px 3px 0px 0px"
                }}
              />Discount Deals
            </span>
            </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Store</NavLink>
          <NavLink to="/">Water</NavLink>
          <NavLink to="/">Beverage</NavLink>
          <NavLink to="/">Dispense</NavLink>
          <Dropdown
              overlay={
                <Menu 
                  style={{
                      fontSize: '12px',
                      position:"relative", 
                      bottom:"60px",
                      width: "240px"
                    }}
                  >
                  {otherCategories}
                </Menu> 
              }
            >
              <DropdownLink
                onClick={handleClick}
                trigger={['click']}
                >
                <Space 
                  style={{
                    color: "#253D4E",
                    fontSize: "12px",
                    fontWeight:"bold",
                    position:"relative",
                    top:"22px",
                    paddingLeft:"30px",
                    right:"10px",
                    "&.hover" : {
                      color:"red"
                    }
                  }}
                >
                  Other categories
                  <span style={{color:"black"}}><img src={caret} alt=""/></span>
                </Space>
              </DropdownLink>
            </Dropdown> 
          {/* <Dropdown
            overlay={
              <Menu 
                style={{
                    fontSize: '12px',
                    position:"relative", 
                    bottom:"60px",
                    width: "240px"
                  }}
                >
                {otherCategories}
              </Menu> 
            }
          >
            <DropdownLink
              onClick={handleClick}
              >
              <Space 
                style={{
                  color: "#253D4E",
                  fontSize: "12px",
                  fontWeight:"bold",
                  top:"10px",
                  right:"10px"
                }}
              >
                Other categories
                <span><img src={caretdown}/></span>
              </Space>
            </DropdownLink>
          </Dropdown> */}
          <NavLink to="/">Cway Locator</NavLink>
          <NavLink to="/">
           <div className='helpline'>
              <img src={helpline} alt=""/>
              <span>+234-909 8000 999</span>
              <p>24/7 Support</p>
           </div>
          </NavLink>
      </NavbarLinkContainer>
      { mobile && 
        <>
          <MobileNav>
            <div style={{
                minWidth: "230px",
                height: "4.5em",
                backgroundColor:"#6D8DBF",
                borderRadius:"5px",
                color:"white",
                margin:"25px",
                whiteSpace:"nowrap",
                overflow:"hidden",
                textOverflow:"ellipsis"
              }}>
            <Dropdown
              overlay={
                <Menu 
                  style={{
                    position:"relative", 
                    top:"20px",
                    color:"#ccc",
                    minwidth:"200px"
                  }}
                  >
                  {otherCategories}
                </Menu> 
              }
            >
              <DropdownLink
                onClick={handleClick}
                trigger={['click']}
                >
                <Space 
                  style={{
                    color: 'white',
                    padding:"0px 10px",
                  }}
                >
                  <span>
                    <img 
                      src={category} alt=""
                      style={{
                        padding: "1px 0px 5px 3px"
                      }}
                      />
                  </span>
                    Browse All categories
                  <span>
                    <img 
                      src={caretdown} alt=""
                      style={{
                      }}
                    />
                  </span>
                </Space>
              </DropdownLink>
            </Dropdown>
          </div>
        </MobileNav>


        <MobileNav 
          style={{
            background:"#ccc",
            padding:"0px"
          }}>
          <NavLink to="/">
            <span>
              <img src={discount} alt=""
                style={{
                  position:"relative",
                  bottom:"3px",
                  padding: "1px 7px 0px 0px"
                }}
              />
            </span>Discount Deals
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Store</NavLink>
          <NavLink to="/">Water</NavLink>
          <NavLink to="/">Beverage</NavLink>
          <NavLink to="/">Dispense</NavLink>
          <Dropdown
            overlay={
              <Menu style={{
                  position:"relative", 
                  bottom:"0px"}}>
                {otherCategories}
              </Menu> 
            }
          >
            <DropdownLink
              onClick={handleClick}
              trigger={['click']}
              >
              <Space 
                style={{
                  color: "#253D4E",
                  fontSize: "12px",
                  fontWeight:"bold",
                  position:"relative",
                  bottom:"19px",
                  left:"27px",
                  paddingTop:"20px",
                  paddingBottom:"15px"
                }}
              >
                Other categories
                <span><img src={caret} alt=""/></span>
              </Space>
            </DropdownLink>
          </Dropdown>
          <NavLink to="/">Cway Locator</NavLink>
          <NavLink to="/">
            <div className='helplinemobile'>
              <img src={helpline} alt=""/>
              <span>+234-909 8000 999</span>
              <p>24/7 Support</p>
            </div>
          </NavLink>
        </MobileNav>  
        </>    
        
      }
    </NavbarContainer>
   </>


  )
}

export default Navbar

const DropdownLink = styled.a`
  color: #000;
  font-size:18px;
  position: relative;
  top:18px;
  font-size:large
  margin:0px 12px

  .dropdown-icon {
    width:0.5em;
    height:0.5em;
  }
`

