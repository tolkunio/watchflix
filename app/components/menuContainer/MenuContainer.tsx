import s from './MenuContainer.module.scss';
import {FC} from "react";
import Menu from "@/components/menuContainer/menu/Menu";
import {firstMenu} from "@/components/menuContainer/menu.data";
import {userMenu} from "@/components/menuContainer/menu.data";

const MenuContainer: FC = () => {
    return (
        <div className={s.menuContainer}>
            <Menu menu={firstMenu}/>
            {/*genresMenu*/}
            <Menu menu={userMenu}/>
        </div>
    );
};

export default MenuContainer;