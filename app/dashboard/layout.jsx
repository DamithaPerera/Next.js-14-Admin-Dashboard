import Sidebar from "@/app/UI/dashboard/sidebar/sidebar";
import Navabr from "@/app/UI/dashboard/navbar/navabr";

const Layout = ({children}) => {
    return (
        <div>
            <div>
                <Sidebar/>
            </div>
            <div>
                <Navabr/>
                {children}
            </div>
        </div>
    )
}

export default Layout