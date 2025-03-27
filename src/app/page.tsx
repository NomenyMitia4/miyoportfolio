import style from "./home.module.css"
import Menu from "./components/menu/menu"
import SocialMedia from "./components/social-media/social_media"
import About from "./components/about/page"

export default function Home()
{
  return(
    <>
    
    <div className={style.home}>
      <div className={style.menu}>
          <Menu/>
        </div>
        <div className={style.container}>
          <div className={style.hero}>
            <img src={"/image/bg_remove_miyo.png"} alt="My Avatar" />
          </div>
          <div className={style.info}>
            <h2>Bonjour, Je suis</h2>
            <h1>Sarobidy Ny Aina</h1>
            <p className={style.title}>Comptable</p>
            <div className={style.links}>
              <div className={style.btn}>
                <button>Download CV</button>
              </div>
              <p>Actuellement, Master 1 en Finance et Comptabilité à l&apos;ESSCA, passionnée dans la domaine de gestion</p>
              <p className={style.join}>Contactez moi ici</p>
              <div className={style.social_media}>
                <SocialMedia/>
              </div>
            </div>
          </div>
        </div>
        
        <div className={style.about}>
          <About/>
        </div>
    </div>

    </>
  )
}