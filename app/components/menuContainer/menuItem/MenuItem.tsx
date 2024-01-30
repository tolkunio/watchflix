import {FC} from "react";
import s from './MenuItem.module.scss';
import cn from 'classnames';
import {useRouter} from "next/router";
import {IMenuItem} from "@/components/menuContainer/Menu.interface";
import Link from "next/link";
import MaterialIcon from "@/ui/MaterialIcon";

const MenuItem: FC<{ item: IMenuItem }> = ({item}) => {
    const {asPath} = useRouter();
    console.log(item);
    return (
        <div className={s.menuItem}>
            <li className={cn({
                [s.active]: asPath === item.link,
            })}>
                <Link href={item.link}>
                    <MaterialIcon name={item.icon}/>
                    <span className={s.title}>{item.title}</span>
                </Link>
            </li>
        </div>

    );
};

export default MenuItem;