import styles from "./Header.module.css";

import Logo from "./trollface1.png";

const Header=()=>{
    return(
        <header className={styles.header}>
            <img className={styles.image} src={Logo} alt="trollfae iamge" />
            <h2 className={styles.title} >Meme Generator</h2>
            <h3>react project</h3>
        </header>
    )

}
export default Header;