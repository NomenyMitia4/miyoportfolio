import style from "./menu.module.css"
import Link from "next/link";

const Menu = () =>{
    return (
        <>
            <div className={style.header}>
                <div className={style.logo}>
                    <h2><span className={style.text1}>SARO</span><span className={style.text2}>BIDY</span></h2>
                </div>
                <div className={style.menu_items}>
                    <div className={style.items}>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Education</Link>
                        <Link href={"/achievement"}>Achievement</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;