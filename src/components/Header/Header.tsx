import logo from "../../assets/wavetime_logo.png";
import bell from "../../assets/bell_icon.png";

import styles from "./Header.module.scss";

const Header = () => {
    const now = new Date();

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    }).format(now);

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo"/>
                <p>wavetime</p>
            </div>
            <div>
                <p>{`${formattedTime}`}</p>
                <div>
                    <img src={bell} alt="bell"/>
                    <span></span>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user"/>
            </div>
        </header>
    );
};

export default Header;