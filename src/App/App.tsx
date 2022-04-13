import { useState, useRef, useEffect } from "react"
import RoundButton from "../Components/RoundButton/RoundButton"
import BenefitsCard from "../Components/BenefitsCard/BenefitsCard"
import Logo from "../Assets/logo.svg"
import Menu from "../Assets/menu.svg"
import LandingImage from "../Assets/mobile_pay.svg"
import timeIcon from "../Assets/time.svg"
import flyIcon from "../Assets/fly.svg"
import moneyIcon from "../Assets/money.svg"
import creditIcon from "../Assets/credit_card.svg"
import aboutImage from "../Assets/about_image.svg"
import wallet from "../Assets/wallet.svg"
import './App.scss'

function App() {
  const [showBorder, setshowBorder] = useState(false)
  const [showLinks, setshowLinks] = useState(true)
  const introduction = useRef<HTMLInputElement>(null)
  const benefits = useRef<HTMLInputElement>(null)
  const aboutUs = useRef<HTMLInputElement>(null)
  const signUp = useRef<HTMLInputElement>(null)

  // Navbar border after a certain scroll
  window.onscroll = () => window.scrollY > 50 ? setshowBorder(true) : setshowBorder(false)

  // Link display handleing
  useEffect(() => {
    window.innerWidth < 700 ? setshowLinks(false) : setshowLinks(true)
  }, [])
  window.onresize = () => window.innerWidth < 700 ? setshowLinks(false) : setshowLinks(true)

  return (
    <div className="app-container">
      <nav className="navbar-container" style={{boxShadow: showBorder ? "2px 2px 5px lightgrey" : "none"}} >
          <img src={Logo} alt={Logo}/>
          <img className="menu-icon" src={Menu} alt={Menu} style={{display: showLinks ? "none" : "block"}}/>
          <ul className="links" style={{display: showLinks ? "flex" : "none"}}>
              <li onClick={()=> introduction.current?.scrollIntoView({behavior:"smooth"})}>Home</li>
              <li onClick={()=> benefits.current?.scrollIntoView({behavior:"smooth"})}>Benefits</li>
              <li onClick={()=> aboutUs.current?.scrollIntoView({behavior:"smooth"})}>About us</li>
              <li onClick={()=> signUp.current?.scrollIntoView({behavior:"smooth"})}>Sign Up</li>
          </ul>
      </nav>
      <section className="introduction-container" ref={introduction}>
          <div className="introduction-text">
              <h1>Moon Bank</h1>
              <h2>The modern bank for the 21st century</h2>
              <RoundButton> Join Us! </RoundButton>
          </div>
          <img className="landing-image" src={LandingImage} alt={LandingImage}/>
      </section>
      <section className="benefits-container" ref={benefits}>
            <h1>Our Beneftis</h1>
            <div className="card-wrapper">
              <BenefitsCard icon={moneyIcon} title={"Zero Cost"}>
                Create your Moon Bank account with zero cost or maintenance charges and make unlimited purchases without any fees!
              </BenefitsCard>
              <BenefitsCard icon={timeIcon} title={"No Time Wasted"}>
                Waste no time with our instant transactions and our simple desing to improve user experience
              </BenefitsCard>
              <BenefitsCard icon={creditIcon} title={"Personal Credit Card"}>
                Free international Visa or MasterCard credit card free of charge and maintenance costs to all our costumers
              </BenefitsCard>
              <BenefitsCard icon={flyIcon} title={"Bonus Mile Program"}>
                Fly anywhere arround the globe with or Bonus Mile program, get free miles after every purchase with your credit card
              </BenefitsCard>
            </div>
        </section>
        <section className="about-container" ref={aboutUs}>
            <img className="about-image" src={aboutImage} alt={aboutImage} />
            <div className="about-text">
                <h1 className="title">About us</h1>
                <p className="content">We are a small startup giving finantial solutions since 2017. <br/>Find more about us down below</p>
                <RoundButton style={{fontSize: "calc(16px + 1vw)"}}> Learn more </RoundButton>
            </div>
        </section>
        <section className="signup-container" ref={signUp}>
            <img className="wallet-image" src={wallet} alt={wallet} />
            <div className="signup-content-container">
                <h1 className="singup-text">Are you ready to join the banking revolution?</h1>
                <RoundButton> Sign Up </RoundButton>
            </div>
        </section>
        <footer className="footer-container">
          <p>Moon Bank LLC 2017 - 2021© made by FlygonSA</p>
        </footer>
    </div>
  )
}

export default App
