import React from 'react'
import Transformer from './Ability/Transformer'
import Footer from './footer/Footer'
import SignUp from './SignUp'
import Video from '../video/Video'
import Categories from './Caterogies/Categories'
import WelcomeSignup from './welcomePage/WelcomeSignup';



function App () {
  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <WelcomeSignup />
          <Video />
          <Transformer />
          <Categories />
          <SignUp />
          <Footer />
      </div>
    </>
  )
}

export default App
