import s from './Navigation.module.scss';
import Logo from "@/components/logo/Logo";
import MenuContainer from "@/components/menuContainer/MenuContainer";
import {FC} from "react";

const Navigation: FC = () => {
    return (
        <div className={s.navigation}>
            <Logo/>
            <MenuContainer/>
        </div>
    );
};

export default Navigation;