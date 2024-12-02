//contexts/FormProvider.jsx
import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export default function FormProvider({children}){   //{children} è tutto cio che è wrappato dentro <FormProvider></FormProvider> dal file dove lo utilizzi
    const [movies, setMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState('');
    const [searchedMovieUrl, setSearchedMovieUrl ] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    const api_base_url = 'https://api.themoviedb.org';
    const version_url = '3';
    const search_modeurl = 'search';
    const search_movieurl = 'movie';
    const api_key = 'b54528fd2094325fb6dbe6dd26ad57ef';

    function handleSearchForm(e){
        e.preventDefault();
        setSearchedMovie(e.target.value);
    }
    useEffect(()=>{
        const searchedMovie_url = searchedMovie.toLowerCase().replace(/\s+/g, '+');  //better x multiple spaces, always one '+'
        setSearchedMovieUrl(searchedMovie_url);
    },[searchedMovie]);

    useEffect(()=>{
        if(!searchedMovieUrl) return;
        fetchData();
    },[searchedMovieUrl]);  //fetchData only when searchedMovieUrl has been changed

    function fetchData(){
        const url = `${api_base_url}/${version_url}/${search_modeurl}/${search_movieurl}?api_key=${api_key}&query=${searchedMovieUrl}`;
        fetch(url)
            .then(res => res.json())
            .then(response =>{
                setFilteredMovies(response.results);  //response.results not response.data
                console.log(filteredMovies);
            })
            .catch(error=>{
                console.error("Error fetching data:", error);
            })
    }

    return(
        <FormContext.Provider 
            value={{
                searchedMovie, setSearchedMovie, handleSearchForm,
                filteredMovies, setFilteredMovies
            }}>
            {children}
        </FormContext.Provider>
    );
}


