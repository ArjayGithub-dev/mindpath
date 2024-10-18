import React from 'react'
import styles from '../style';
import { Navbar, Footer}  from "../components";


const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
    <div className={`bg-dirtywhite ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`heroBg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer /> 
      </div>
    </div>

    </div>
  )
}

export default AboutPage