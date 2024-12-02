//pages/HomePage.jsx
import { useContext } from "react";
import { FormContext } from "../contexts/FormProvider";
import MovieCard from "../components/MovieCard/MovieCard";

export default function HomePage(){
    const {searchedMovie, handleSearchForm, filteredMovies, setFilteredMovies} = useContext(FormContext);

    function showSearchedMovie(){
        console.log(searchedMovie);
    }

    return(
        <div className="container">
            <h1>main body Home Page</h1>
            <button className="btn btn-primary" onClick={showSearchedMovie}>show searchedMovie</button>
            <section className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3'>
                {filteredMovies.map((item,index)=> <MovieCard key={item.id} data={item}  /> )}
            </section>
        </div>
    );
}