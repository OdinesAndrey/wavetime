import styles from './Result.module.scss';
import {AnnuallyTab, BiWeeklyTab, DailyTab, HourlyTab, WeeklyTab} from "./ResultTabs";
import MonthlyTab from "./ResultTabs/MonthlyTab.tsx";
import Tab from "./Tab.tsx";
import {useState} from "react";

const Result = () => {
    const [activeTab, setActiveTab] = useState('Hourly');

    const tabTitles = ['Hourly', 'Daily', 'Weekly', 'BiWeekly', 'Monthly', 'Annually'];
    const TAB_CONTENTS = {
        Hourly: <HourlyTab/>,
        Daily: <DailyTab/>,
        Weekly: <WeeklyTab/>,
        BiWeekly: <BiWeeklyTab/>,
        Monthly: <MonthlyTab/>,
        Annually: <AnnuallyTab/>,
     };
    return (
        <div className={styles.result}>
            <h3>Your Results</h3>
            <div className={styles.result__wrapper}>
                <div className={styles.result__wrapper_tabs}>
                    {tabTitles.map((title) => (
                        <Tab
                            key={title}
                            id={title}
                            title={title}
                            isActive={activeTab === title}
                            setActiveTab={setActiveTab}
                        />
                    ))}
                </div>
                {
                    TAB_CONTENTS[activeTab]
                }
            </div>
        </div>
    );
};

export default Result;