//components/Moviecard/MovieCard.jsx
import { useContext } from "react";
import { FormContext } from "../../contexts/FormProvider";
import Flag from 'react-world-flags'  //X FLAGS NATIONALITY!

// import ReactStars from 'react-stars'; bad x stars reiews
import Rating from 'react-rating-stars-component';  //good X STARS REVIEWS!


export default function MovieCard({data}){
    const {api_base_img_url, img_poster_size_url} = useContext(FormContext);
    const path_img = `${api_base_img_url}/${img_poster_size_url}${data.poster_path}`;
    //console.log(path_img);
    
    return(
        <div className="col ">
            <div className={`entertainment_card ${data.type ==='movie'? 'border_movie' : 'border_tv' }`}>
                <img src={path_img} alt="poster entertainment" className="img_poster_card"/>
                <div className="card_details">
                    <h2>{data.original_title || data.original_name}</h2>
                    <h3>{data.title || data.name}</h3>  
                    {/* <h4>{data.original_language}</h4> */}
                    <div>
                        <Flag code={data.original_language == 'en'? 'us' : data.original_language} height="16" fallback= {<span>no flag found</span>}/>
                    </div>
                    {/* <h3>stars {data.vote_average}</h3> */}
                    <h3>{data.type}</h3>
                    <Rating  
                        count={5}
                        half={true} 
                        value={data.vote_average /2}  
                        size={24}
                        color2={'#ffd700'} 
                     />   
                </div>
            </div>
        </div>
    );
}