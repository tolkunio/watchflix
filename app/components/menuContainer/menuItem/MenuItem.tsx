import {FC} from "react";
import s from './MenuItem.module.scss';
import cn from 'classnames';
import {useRouter} from "next/router";
import {IMenuItem} from "@/components/menuContainer/Menu.interface";
import Link from "next/link";
import MaterialIcon from "@/ui/MaterialIcon";

const MenuItem: FC<{ item: IMenuItem }> = ({item}) => {
    const {asPath} = useRouter();
    return (
        <li className={cn({
            [s.active]: asPath === item.link
        })}>
            <Link href={item.link}>
                <MaterialIcon name={item.icon}/>
                <span>{item.title}</span>
            </Link>
        </li>
    );
};

export default MenuItem;