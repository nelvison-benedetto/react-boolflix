//pages/HomePage.jsx
import { useContext } from "react";
import { FormContext } from "../contexts/FormProvider";
import MovieCard from "../components/MovieCard/MovieCard";

export default function HomePage(){
    const {searchedEntertainment, filteredEntertainment} = useContext(FormContext);

    return(
        <div className="container">
            <h3 className="bolder text-danger py-2">ORIGINAL BOOLFLIX</h3>
            {/* <button className="btn btn-primary" onClick={showSearchedMovie}>show searchedMovie</button> */}
            <section className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5'>
                {filteredEntertainment.map((item,index)=> <MovieCard key={item.id} data={item}  /> )}
            </section>
        </div>
    );
}