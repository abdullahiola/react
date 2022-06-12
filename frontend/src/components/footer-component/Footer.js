import React from 'react'
import Footer from './styles/home'

function FooterContainer() {

  return (
    <Footer>
      <Footer.Horizontal></Footer.Horizontal>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>
              <Footer.CwayLogo style={{ height: "60px" }} src="assets/home.svg" alt='Logo' />
            </Footer.Title>
            <Footer.Link href="#"><Footer.CwayLogo style={{ height: "15px" }} src="assets/address-icon.svg" alt='address' /> Story</Footer.Link>
            <Footer.Link href="#"><Footer.CwayLogo style={{ height: "15px" }} src="assets/callus.svg" alt='callus' /> Clients</Footer.Link>
            <Footer.Link href="#"><Footer.CwayLogo style={{ height: "15px" }} src="assets/email.svg" alt='email' /> Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Company</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms & Conditions</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Support Center</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Account</Footer.Title>
            <Footer.Link href="#">Sign In</Footer.Link>
            <Footer.Link href="#">View Cart</Footer.Link>
            <Footer.Link href="#">Track My Order</Footer.Link>
            <Footer.Link href="#">View All Order</Footer.Link>
            <Footer.Link href="#">Favorite</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Information</Footer.Title>
            <Footer.Link href="#">Help FAQ's</Footer.Link>
            <Footer.Link href="#">Store Location</Footer.Link>
            <Footer.Link href="#">Feedback for us</Footer.Link>

          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Payment</Footer.Title>
            <Footer.Link href="#">Wallet</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>App & Payment</Footer.Title>
            <Footer.Link href="#" style={paymentpara}>Install CWAY Home App from App  <br></br>Store or Google Play </Footer.Link>
            <Footer.Link href="#">
              <Footer.CwayLogo style={storescard} src="assets/applestore.svg" alt='applestore' />

            </Footer.Link>
            <Footer.Link href="#">

              <Footer.CwayLogo style={storescard2} src="assets/googleplay.svg" alt='googleplay' />
            </Footer.Link>
            <Footer.Link href="#" style={paymentpara2}>Secured Payment Gateways</Footer.Link>
            <Footer.CwayLogo style={paymentcards} src="assets/paymentmethod.svg" alt='payment' />
          </Footer.Column>
          <Footer.Column>
            <Footer.Horizontal></Footer.Horizontal>
            <Footer.Link href="#" style={styles}>
              <Footer.CwayLogo src="assets/gototop.svg" alt='gototop' />
            </Footer.Link>
            <Footer.Copy style={styles2}>2022  <Footer.Link style={pointer} href="#"> CWAY Home Store </Footer.Link> - All rights reserved</Footer.Copy>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}

const styles = {
  position: "relative",
  top: "-30px",
  left: "1525px",
  cursor: "pointer",
}
const styles2 = {
  position: "relative",
  top: "-65px",

}
const pointer = {
  cursor: "pointer",
  color: "#5d84c1",

}

const paymentpara = {
  color: "#7e7e7e",
}
const paymentpara2 = {
  color: "#7e7e7e",
  top: "-63px",
  position: "relative",
}
const storescard = {
  height: "30px",
}
const storescard2 = {
  height: "30px",
  left: "120px",
  bottom: "58px",
  paddingBottom: "0px",
  position: "relative",
}
const paymentcards = {
  height: "40px",
  bottom: "65px",
  position: "relative",
}

export default FooterContainer;