import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/Nav'
import Exp from './component/exp/exp'
import Services from './component/services/services'
import Port from './component/port/port'
import Test from './component/test/test'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
import About from './component/about/about'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
  <Router>
    <>
        <Header />
      <Nav />
      <About/>
      <Exp/>
      {/* <Services /> */}
      <Port/>
      {/* <Test /> */}
      <Contact/>
      <Footer />
    </>
    </Router>
  )
}

export default App