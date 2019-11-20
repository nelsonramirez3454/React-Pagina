import React from 'react'
import NavBar from '../components/Navbar';

function Layout(props){
    //Const children = props.children;

    return(

        <div>
            <NavBar/>
            {props.children}
        </div>
        
        )
    

}

export default Layout;