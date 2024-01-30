import {useQuery} from "react-query";
import {GenreService} from "@/services/genre.service";
import {IMenuItem} from "@/components/menuContainer/Menu.interface";
import {getGenreUrl} from "@/config/url.config";

export const usePopularGenre = () => {
    const queryData = useQuery('popular genre menu', () => GenreService.getAll(), {
        select: ({data}) => data.map(genre => ({
            icon: genre.icon,
            link: getGenreUrl(genre.slug),
            title: genre.name
        } as IMenuItem)).splice(0,4),
    })

    return queryData;
};