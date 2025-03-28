"use client";

import style from "./menu.module.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu = () =>{

    const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
    const menuConfig = () =>{
        if(!isMenuDisplayed){
            setIsMenuDisplayed(true);
        }else{
            setIsMenuDisplayed(false);
        }
    }

    return (
        <>
            <div className={style.header}>
                <div className={style.logo}>
                    <h2><span className={style.text1}>SARO</span><span className={style.text2}>BIDY</span></h2>
                </div>
                <div className={style.menu_items}>
                    <div className={style.items}>
                        <Link href={"/"}>Accueil</Link>
                        <Link href={"/"}>Parcours</Link>
                        <Link href={"/achievement"}>Expériences</Link>
                    </div>
                </div>
            </div>
            
            <div className={style.bars}>
                <FontAwesomeIcon icon={faBars} onClick={menuConfig} className={style.bars_icon} width={35} height={35}/>
            </div>
            
            <div className={`${style.mobile} ${isMenuDisplayed ? style.show : style.hide}`}>
                <div className={style.mobile_menu_items}>
                    <div className={style.mobile_items}>
                        <Link href={"/"}>Accueil</Link>
                        <Link href={"/"}>Parcours</Link>
                        <Link href={"/achievement"}>Expériences</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;