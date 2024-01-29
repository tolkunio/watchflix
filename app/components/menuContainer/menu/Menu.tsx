import {FC} from 'react';
import {IMenu} from "@/components/menuContainer/Menu.interface";
import s from './Menu.module.scss';
import MenuItem from "@/components/menuContainer/menuItem/MenuItem";
import AuthItems from "@/components/menuContainer/auth/AuthItems";

const Menu: FC<{ menu: IMenu }> = ({menu: {items, title}}) => {
    return (
        <div className={s.menu}>
            <div className={s.heading}>{title}</div>
            <ul className={s.ul}>
                {items.map(item => (<MenuItem item={item} key={item.link}/>))}
                {title === 'General' ? <AuthItems/> : null}
            </ul>
        </div>
    );
};

export default Menu;