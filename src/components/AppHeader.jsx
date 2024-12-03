//components/AppHeader.jsx
import MainMenu from "./MainMenu";
import { useContext } from "react";
import { FormContext } from "../contexts/FormProvider";
//import { useState, useEffect } from 'react' No longer necessary x local states/ side effects in this component!

export default function AppHeader(){

    const {searchedEntertainment, handleSearchForm} = useContext(FormContext);

    return(
        <header>
            <div className="container-fluid d-flex align-items-center justify-content-around">
                <h1>Boolflix</h1>
                <MainMenu/>
                <form className="formsearch">
                    <input 
                        type="text"
                        className=""
                        name='searchText'
                        id='searchText'
                        aria-describedby="searchelper"  //add it when there isn,t label 
                        placeholder="search movie..."
                        value={searchedEntertainment}
                        onChange={handleSearchForm}
                    />
                </form>
            </div>
        </header>
    );
}