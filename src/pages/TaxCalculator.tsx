import styles from "./TaxCalculator.module.scss";
import Calculate from "../components/Calculate/Calculate.tsx";
import Result from "../components/Result/Result.tsx";

const TaxCalculator = () => {
    return (
        <div className={styles.taxCalculator}>
            <h1>Tax Calculator</h1>
            <div className={styles.taxCalculator__wrapper}>
                <Calculate/>
                <Result/>
            </div>
        </div>
    );
};

export default TaxCalculator;