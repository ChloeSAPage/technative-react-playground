import styles from "./Root.module.css";

import SiteHeader from "../SiteHeader/SiteHeader";
import SiteNav from "../SiteNav/SiteNav";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";

function Root() {
    return (
        <div className={styles.wrapper}>
            <SiteHeader />
            <SiteNav />
            <MainContent />
            <SiteFooter />
        </div>
    );
}

export default Root;
