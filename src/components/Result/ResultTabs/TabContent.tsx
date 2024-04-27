import React from 'react';
import styles from "../Result.module.scss";

type TabContentProps = {
    totalIncome?: number;
}

const TabContent = ({totalIncome}: TabContentProps) => {
    return (
        <>
            <div className={styles.result__wrapper_totalIncome}>
                <div className={styles.result__wrapper_totalIncome_heading}>
                    <h3>Total Income</h3>
                    <p>{totalIncome ? totalIncome : 0}$</p>
                </div>
                <div>
                    <p>Salary:</p>
                    <p>0%</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.result__wrapper_totalDeductions}>
                <div className={styles.result__wrapper_totalDeductions_heading}>
                    <h3>Total Deductions</h3>
                    <p>0$</p>
                </div>
                <div>
                    <p>Canada Pension Plan (CPP):</p>
                    <p>0%</p>
                </div>
                <div>
                    <p>Federal Income Tax (FIT):</p>
                    <p>0%</p>
                </div>
                <div>
                    <p>Province Income Tax (PIT):</p>
                    <p>0%</p>
                </div>
                <div>
                    <p>El Premiums:</p>
                    <p>0%</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.result__wrapper_netPay}>
                <div className={styles.result__wrapper_netPay_heading}>
                    <h3>Net Pay</h3>
                    <p>0$</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.result__wrapper_netPay_taxes}>
                    <div>
                        <p>Marginal Tax Rate:</p>
                        <p>0%</p>
                    </div>
                    <div>
                        <p>Average Tax Rate:</p>
                        <p>0%</p>
                    </div>
                    <div>
                        <p>Comprehensive Deductions Rate:</p>
                        <p>0%</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabContent;