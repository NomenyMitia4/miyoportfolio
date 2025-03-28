import style from "./education.module.css";

const Education = () =>{
    return(
        <> 
            <div className={style.about}>
            <div className={style.title}>
                        <h1><span className={style.tiret}>- </span> PARCOURS ACADEMIQUES <span className={style.tiret}>-</span></h1>
                    </div>
                <div className={style.timeline}>
                    <div className={`${style.container} ${style.left_container}`}>
                        {/* <Image className={style.img} src={"/image/esmia_logo.jpg"} alt={"esmia_logo"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>ESSCA</h2>
                            <small>Actuel</small>
                            <p>Première année en Master en Finances et Comptabilité</p>
                            <ul>
                                <li><p>En cours...</p></li>
                            </ul>
                            <span className={style.left_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.right_container}`}>
                        {/* <Image className={style.img} src={"/image/esmia_logo.jpg"} alt={"esmia_logo"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>ESSCA</h2>
                            <small>2024</small>
                            <p>Licence en Science de Gestion en Finances et Comptabilité</p>
                            <ul>
                                <li><p>Licence en science de gestion en finances et comptabilité</p></li>
                            </ul>
                            <span className={style.right_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.left_container}`}>
                        {/* <Image className={style.img} src={"/image/ltc.jpg"} alt={"ltc"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>ESSCA</h2>
                            <small>2023</small>
                            <p>Diplôme de Technicien Supérieur (DTS) en Finances et Comptabilité</p>
                            <ul>
                                <li><p>DTS en Finances et Comptabilité</p></li>
                            </ul>
                            <span className={style.left_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.right_container}`}>
                        {/* <Image className={style.img} src={"/image/esmia_logo.jpg"} alt={"esmia_logo"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>Lycée Privé Miarintsoa Anatihazo</h2>
                            <small>2020</small>
                            <p>Baccalauréat série A2</p>
                            <ul>
                                <li><p>Baccalauréat série A2</p></li>
                            </ul>
                            <span className={style.right_container_arrow}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;