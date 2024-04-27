import styles from './Calculate.module.scss';

const Calculate = () => {
    return (
        <div className={styles.calculate}>
            <div className={styles.calculate__selects}>
                <h3 className={styles.calculate__selects_heading}>Calculate your Tax</h3>

                <label htmlFor="">
                    Country
                </label>
                <select className={styles.select}>
                    <option value="" disabled selected>Choose Country</option>
                    <option value="1">Item 1</option>
                </select>

                <label htmlFor="">
                    Province/State
                </label>
                <select className={styles.select}>
                    <option value="" disabled selected>Choose Province or State</option>
                    <option value="1">Item 1</option>
                </select>

                <label htmlFor="">
                Year
                </label>
                <select className={styles.select}>
                    <option value="" disabled selected>Choose Year</option>
                    <option value="1">Item 1</option>
                </select>

                <label htmlFor="">
                Rate
                </label>
                <select className={styles.select}>
                    <option value="" disabled selected>Choose Rate</option>
                    <option value="1">Item 1</option>
                </select>

                <label htmlFor="">
                Income
                </label>
                <select className={styles.select}>
                    <option value="" disabled selected>Enter your Income</option>
                    <option value="1">Item 1</option>
                </select>
            </div>

            <button className={styles.calculate__button}>Calculate</button>

        </div>
    );
};

export default Calculate;