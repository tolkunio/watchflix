import s from './Layout.module.scss';
import {FC} from "react";
import Navigation from "@/components/layout/navigation/Navigation";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const Layout:FC = ({children}) => {
    return (
        <div className={s.layout}>
            <Navigation/>
            <div className={s.main}>
                {children}
            </div>
            <Sidebar/>
        </div>
    );
};

export default Layout;