//contexts/FormProvider.jsx
import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export default function FormProvider({children}){   //{children} è tutto cio che è wrappato dentro <FormProvider></FormProvider> dal file dove lo utilizzi
    const [movies, setMovies] = useState([]);
    const [searchedEntertainment, setSearchedEntertainment] = useState('');
    const [searchedEntertainmentUrl, setSearchedEntertainmentUrl ] = useState('');
    const [filteredEntertainment, setFilteredEntertainment] = useState([]);

    const api_base_url = 'https://api.themoviedb.org';
    const api_base_img_url = 'https://image.tmdb.org/t/p';  // '/p/' means 'path' x images files ect
    const img_poster_size_url = 'w342'
    const version_url = '3';
    const search_modeurl = 'search';
    const search_movieurl = 'movie';
    const search_tvurl = 'tv';

    const api_key = 'b54528fd2094325fb6dbe6dd26ad57ef';

    function handleSearchForm(e){
        e.preventDefault();
        setSearchedEntertainment(e.target.value);
    }
    useEffect(()=>{
        const searchedEntertainment_url = searchedEntertainment.toLowerCase().replace(/\s+/g, '+');  //better x multiple spaces, always one '+'
        setSearchedEntertainmentUrl(searchedEntertainment_url);
    },[searchedEntertainment]);

    useEffect(()=>{
        if(!searchedEntertainmentUrl) return;
        fetchData();
    },[searchedEntertainmentUrl]);  //fetchData only when searchedEntertainmentUrl has been changed

    function fetchData(){
        const movie_url = `${api_base_url}/${version_url}/${search_modeurl}/${search_movieurl}?api_key=${api_key}&query=${searchedEntertainmentUrl}`;
        const tv_url = `${api_base_url}/${version_url}/${search_modeurl}/${search_tvurl}?api_key=${api_key}&query=${searchedEntertainmentUrl}`;

        // fetch(url) //basic fetch x movies
        //     .then(res => res.json())
        //     .then(response =>{
        //         setFilteredMovies(response.results);  //response.results not response.data
        //         console.log(filteredMovies);
        //     })
        //     .catch(error=>{
        //         console.error("Error fetching data:", error);
        //     })

        Promise.all([   //run both api calls
            fetch(movie_url).then(res=>res.json()),
            fetch(tv_url).then(res=>res.json())
        ])
        .then( ([movieResponse, tvResponse]) =>{
            const combinedResults = [
                ...(movieResponse.results || []).map(item => ({...item, type:'movie'})),
                ...(tvResponse.results || []).map(item =>({...item, type: 'tv'}))
            ];
            setFilteredEntertainment(combinedResults);
        })
        .catch(error=>{
            console.error("Error fetching data:", error);
        });
    }

    return(
        <FormContext.Provider 
            value={{
                searchedEntertainment, setSearchedEntertainment, handleSearchForm,
                filteredEntertainment, setFilteredEntertainment,
                api_base_img_url, img_poster_size_url
            }}>
            {children}
        </FormContext.Provider>
    );
}


