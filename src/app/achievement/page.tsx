import Experience from "../components/experience/experience"
import style from "./achievement.module.css";
import Menu from "../components/menu/menu";

export default function Achievement()
{
    return(
        <>
            <div className={style.container}>
                <div className={style.menu}>
                    <Menu/>
                </div>
                <div className={style.achievement}>
                    <div className={style.title}>
                        <h1><span className={style.tiret}>- </span> EXPERIENCES <span className={style.tiret}>-</span></h1>
                    </div>
                    <div className={style.experiences}>
                        <Experience/>
                    </div>
                </div>
            </div>
        </>
    )
}