import style from "./experience.module.css";

const Experience = () =>{
    return(
        <>
            <div className={style.experience}>
                <div className={style.date}>
                    <p>Sep 24 - Dec 24</p>
                </div>
                <div className={style.content}>
                    <div className={style.title}>
                        <p>Comptable</p>
                    </div>
                    <div className={style.details}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ea cupiditate exercitationem vitae eos laudantium quam quidem ullam perferendis eligendi quaerat, ipsa, aut voluptates odio inventore reiciendis pariatur deleniti!</p>
                    </div>
                    <div className={style.place}>
                        <p><span className={style.tiret}>- </span>Paris</p>
                    </div>
                </div>
            </div>

            <div className={style.experience}>
                <div className={style.date}>
                    <p>Sep 24 - Dec 24</p>
                </div>
                <div className={style.content}>
                    <div className={style.title}>
                        <p>Comptable</p>
                    </div>
                    <div className={style.details}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ea cupiditate exercitationem vitae eos laudantium quam quidem ullam perferendis eligendi quaerat, ipsa, aut voluptates odio inventore reiciendis pariatur deleniti!</p>
                    </div>
                    <div className={style.place}>
                        <p><span className={style.tiret}>- </span>Paris</p>
                    </div>
                </div>
            </div>

            <div className={style.experience}>
                <div className={style.date}>
                    <p>Sep 24 - Dec 24</p>
                </div>
                <div className={style.content}>
                    <div className={style.title}>
                        <p>Comptable</p>
                    </div>
                    <div className={style.details}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ea cupiditate exercitationem vitae eos laudantium quam quidem ullam perferendis eligendi quaerat, ipsa, aut voluptates odio inventore reiciendis pariatur deleniti!</p>
                    </div>
                    <div className={style.place}>
                        <p><span className={style.tiret}>- </span>Paris</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;