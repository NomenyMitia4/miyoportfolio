import style from "./social_media.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return(
        <>
        <div className={style.social_media_icons}>
            <Link href={"https://www.linkedin.com/in/sarobidy-ny-aina-058467258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}>
                <FontAwesomeIcon className={style.icon} icon={faLinkedin} color="orange" width={30} height={30}></FontAwesomeIcon>
            </Link>
            <Link href={"https://www.facebook.com/share/1Bk3zZVTgf/?mibextid=wwXIfr"}>
                <FontAwesomeIcon className={style.icon} icon={faFacebook} color="orange" width={30} height={30}></FontAwesomeIcon>
            </Link>
        </div>
        </>
    )
}

export default SocialMedia;