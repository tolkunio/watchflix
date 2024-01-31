import {FC} from 'react';
import s from './Genre.module.scss';
import {usePopularGenre} from "@/components/menuContainer/genres/usePopularGenre";
import Menu from "@/components/menuContainer/menu/Menu";

const GenreMenu: FC = () => {
    const {isLoading, data} = usePopularGenre();
    return isLoading ? <div className={s.isLoading}>Is loading...</div> :
        <Menu menu={{title: 'Popular Genres', items: data || []}}/>
};

export default GenreMenu;