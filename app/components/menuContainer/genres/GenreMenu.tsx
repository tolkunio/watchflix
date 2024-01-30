import {FC} from 'react';
import s from './GenreMenu.module.scss';
import {usePopularGenre} from "@/components/menuContainer/genres/usePopularGenre";
import Menu from "@/components/menuContainer/menu/Menu";

const GenreMenu:FC = () => {
    const {isLoading,data}=usePopularGenre();
    return isLoading?<div className={s.loading}>Loading...</div>:
        <Menu menu={{title:'Popular genres',items:data||[]}}/>
};

export default GenreMenu;