import style from "./parcours.module.css";
import Menu from "../components/menu/menu";
import Education from "../components/education/education";

export default function Parcours()
{
    return(
        <>
        <div className={style.container}>
            <div className={style.menu}>
                <Menu/>
            </div>
            
            <div className={style.parcours}>
                <Education/>
            </div>
        </div>
        </>
    )
}