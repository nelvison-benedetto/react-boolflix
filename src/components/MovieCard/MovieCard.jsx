//components/Moviecard/MovieCard.jsx
import { useContext } from "react";
import { FormContext } from "../../contexts/FormProvider";
import Flag from 'react-world-flags'

export default function MovieCard({data}){
    const {api_base_img_url, img_poster_size_url} = useContext(FormContext);
    const path_img = `${api_base_img_url}/${img_poster_size_url}${data.poster_path}`;
    //console.log(path_img);

    return(
        <div className="col">
            <h1>{data.original_title || data.original_name}</h1>
            <h2>{data.title || data.name}</h2>  
            <h3>{data.original_language}</h3>
            <Flag code={data.original_language == 'en'? 'us' : data.original_language} height="16" fallback= {<span>no flag found</span>}/>
            <h3>stars {data.vote_average}</h3>
            <h3>type {data.type}</h3>
            <img src={path_img} alt="poster entertainment" />
        </div>
    );
}