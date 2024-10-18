import styles from "./style";
import { Navbar, Hero, Appointment, Footer, CopyRight } from 
"./components";


const App = () => (

  <div className="w-full overflow-hidden">
    <div className={`bg-dirtywhite ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-dirtywhite ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`appointmentBg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Appointment /> 
      </div>
    </div>

    <div className={`heroBg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer /> 
      </div>
    </div>

    </div>
);

export default App
