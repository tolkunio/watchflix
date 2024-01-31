import {useQuery} from "react-query";
import {GenreService} from "@/services/genre/genre.service";
import {IMenuItem} from "@/components/menuContainer/Menu.interface";
import {getGenreUrl} from "../../../configs/url.config";

export const usePopularGenre = ()=>{
    const queryData= useQuery('popular genres menu',()=>GenreService.getAll(),{
        select:({data})=>
            data.map((genre):IMenuItem=>({
                icon:genre.icon,
                link:getGenreUrl(genre.slug),
                title:genre.name
            })).splice(0,4),
    })
    return queryData;
}