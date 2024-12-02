//components/Moviecard/MovieCard.jsx
import { useContext } from "react";
import FormProvider from "../../contexts/FormProvider";
import Flag from 'react-world-flags'

export default function MovieCard({data}){
    return(
        <div className="col">
            <h1>{data.original_title}</h1>
            <h2>{data.title}</h2>  
            <h3>{data.original_language}</h3>
            <Flag code={data.original_language == 'en'? 'us' : data.original_language} height="16" fallback= {<span>no flag found</span>}/>
            <h3>{data.vote_average}</h3>
        </div>
    );
}