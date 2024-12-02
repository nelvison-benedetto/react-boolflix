//components/Moviecard/MovieCard.jsx
import { useContext } from "react";
import FormProvider from "../../contexts/FormProvider";


export default function MovieCard({data}){
    return(
        <div className="col">
            <h1>{data.title}</h1>  
            <h2>{data.original_title}</h2>
            <h3>{data.original_language}</h3>
            <h3>{data.vote_average}</h3>
        </div>
    );
}