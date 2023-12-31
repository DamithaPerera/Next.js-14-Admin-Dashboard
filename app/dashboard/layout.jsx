import Sidebar from "@/app/UI/dashboard/sidebar/sidebar";
import Navabr from "@/app/UI/dashboard/navbar/navabr";
import styles from "@/app/UI/dashboard/dashboard.module.css";

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navabr/>
                {children}
            </div>
        </div>
    )
}

export default Layout