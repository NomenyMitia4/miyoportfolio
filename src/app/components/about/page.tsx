import style from "./about.module.css";

const About = () => {
    return(
        <>
            <div className={style.about}>
                <div className={style.caption}>
                    <h1><span className={style.tiret}>- </span> About Me <span className={style.tiret}>-</span></h1>
                </div>
                <div className={style.about_me}>
                    <p className={style.title}>About me</p>
                    <div className={style.content}>
                        <p>Je m&apos;appelle RASOLONIRINA Sarobidy Ny Aina</p>
                        <p>Je m&apos;excelle dans le domaine de la gestion comptabilité et finance</p>
                    </div>
                </div>

                <div className={style.skills}>
                    <p className={style.title}>Microsoft Office</p>
                    <div className={style.content}>
                        <div className={style.skill}>
                            <p>Word</p>
                        </div>
                        <div className={style.skill}>
                            <p>Excel</p>
                        </div>
                        <div className={style.skill}>
                            <p>Access</p>
                        </div>
                        <div className={style.skill}>
                            <p>Powerpoint</p>
                        </div>
                    </div>
                </div>

                <div className={style.skills}>
                    <p className={style.title}>Outils Comptable</p>
                    <div className={style.content}>
                        <div className={style.skill}>
                            <p>SAGE SAARI</p>
                        </div>
                    </div>
                </div>

                <div className={style.skills}>
                    <p className={style.title}>Technologies</p>
                    <div className={style.content}>
                        <div className={style.skill}>
                            <p>Notion Webmaster</p>
                        </div>
                        <div className={style.skill}>
                            <p>HTML</p>
                        </div>
                        <div className={style.skill}>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>           
            </div>
             
        </>
    )
}

export default About;