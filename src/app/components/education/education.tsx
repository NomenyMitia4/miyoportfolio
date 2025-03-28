import style from "./education.module.css";

const Education = () =>{
    return(
        <> 
            <div className={style.about}>
                <div className={style.title}>
                    <h2>EDUCATIONS</h2>
                </div>
                <div className={style.timeline}>
                    <div className={`${style.container} ${style.left_container}`}>
                        {/* <Image className={style.img} src={"/image/esmia_logo.jpg"} alt={"esmia_logo"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>Ecole Supérieur de Management et Informatique Appliquée (ESMIA)</h2>
                            <small>In progress</small>
                            <p>Master I en Management et Informatique Appliquée à la Gestion d&apos;Entreprise</p>
                            <ul>
                                <li><p>Intelligence Artificielle</p></li>
                                <li><p>Entrepreneurship</p></li>
                                <li><p>Analyse Fonctionnelle des besoins</p></li>
                            </ul>
                            <span className={style.left_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.right_container}`}>
                        {/* <Image className={style.img} src={"/image/esmia_logo.jpg"} alt={"esmia_logo"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>Ecole Supérieur de Management et Informatique Appliquée (ESMIA)</h2>
                            <small>2021 - 2024</small>
                            <p>Licence en Informatique Risque et Décisions</p>
                            <ul>
                                <li><p>Génie logiciel</p></li>
                                <li><p>Gestion de projet informatique</p></li>
                                <li><p>Marketing Digital</p></li>
                                <li><p>Unified Modeling Language (UML)</p></li>
                                <li><p>Analyse de données</p></li>
                                <li><p>Algorithme avancé (Structure de données)</p></li>
                            </ul>
                            <span className={style.right_container_arrow}></span>
                        </div>
                    </div>
                    <div className={`${style.container} ${style.left_container}`}>
                        {/* <Image className={style.img} src={"/image/ltc.jpg"} alt={"ltc"} width={40} height={40}/> */}
                        <div className={style.textbox}>
                            <h2>Lycée Technique Professionnelle Ampefiloha</h2>
                            <small>2019 - 2021</small>
                            <p>Gestion et Comptabilité</p>
                            <ul>
                                <li><p>Mathématique Financière</p></li>
                                <li><p>Mathématique Générale</p></li>
                                <li><p>Comptabilité</p></li>
                                <li><p>Droit de société et Droit commercial</p></li>
                            </ul>
                            <span className={style.left_container_arrow}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;