import styles from  "./Result.module.scss";
function Tab({ id, title, isActive, setActiveTab }) {
    return (
        <button
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => setActiveTab(id)}
        >
            {title}
        </button>
    );
}

export default Tab;
