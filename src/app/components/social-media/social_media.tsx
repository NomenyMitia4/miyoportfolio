import style from "./social_media.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return(
        <>
        <div className={style.social_media_icons}>
            <FontAwesomeIcon icon={faFacebook} color="orange" width={30} height={30}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin} color="orange" width={30} height={30}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} color="orange" width={30} height={30}></FontAwesomeIcon>
        </div>
        </>
    )
}

export default SocialMedia;