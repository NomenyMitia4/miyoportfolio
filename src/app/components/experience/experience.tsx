import style from "./experience.module.css";

const Experience = () =>{
    return(
        <>
            <div className={style.experience}>
                <div className={style.date}>
                    <p>2024 - 2025</p>
                </div>
                <div className={style.content}>
                    <div className={style.title}>
                        <p>Stagiaire: ADEMA</p>
                    </div>
                    <div className={style.details}>
                        <ul>
                            <li><p>Analyse des écarts et mise à jour de l&apos;état consolide des prévisions de décaissement</p></li>
                            <li><p>Vérification et saisie des factures</p></li>
                            <li><p>Suivi des ordres de missions</p></li>
                            <li><p>Pointage des pièces justificatives</p></li>
                            <li><p>Enregistrement et transmissions des courriers</p></li>
                            <li><p>Saisie du reporting</p></li>
                            <li><p>Mise à jour BUDGET charges et produits</p></li>
                            <li><p>Inventaire physique des stocks</p></li>
                            <li><p>Réception des commandes et vérification de leur conformité</p></li>
                        </ul>
                    </div>
                    <div className={style.place}>
                        <p><span className={style.tiret}>- </span>Aéroport de Madagascar, Siège Ivato</p>
                    </div>
                </div>
            </div>

            <div className={style.experience}>
                <div className={style.date}>
                    <p>2022 - 2023</p>
                </div>
                <div className={style.content}>
                    <div className={style.title}>
                        <p>Stagiaire: Caisse d&apos;Epargne de Madagascar</p>
                    </div>
                    <div className={style.details}>
                        <ul>
                            <li><p>Contrôle des dossiers d&apos;ouverture de compte</p></li>
                            <li><p>Mise à jour livret des clients et suivi</p></li>
                            <li><p>Contrôle des opérations de guichets avec le logiciel CGB</p></li>
                        </ul>
                    </div>
                    <div className={style.place}>
                        <p><span className={style.tiret}>- </span>Caisse d&apos;Epargne de Madagascar, Agence Analamahitsy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;