import { Outlet } from "react-router-dom";
import AppMain from '../components/AppMain'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default function Layout(){
    return(
        <>
            <AppHeader/>
            <main>
                <Outlet/>
            </main>
            <AppFooter/>
        </>
    );
}