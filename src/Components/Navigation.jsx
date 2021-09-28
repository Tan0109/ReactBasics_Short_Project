import React from "react";
import styles from "./navigation.module.css";
import {Link} from 'react-router-dom';

function Navigation()
{
    //if you use inline styling use style sttribute with div tag and two curly braces like this:-- style = {{fontSize: "20px",}}
    return(
        <>
        <div className = {styles.navigation}><h1>Zoopie!</h1>
        <div className = {styles.navigationButtonContainer}>
            <Link to="/"><button className = {styles.navigationButton}>Home Page</button></Link>
            <Link to="/ContactPage"><button className = {styles.navigationButton}>Contact Page</button></Link>
            </div>
        </div>
        </>
    );
}
export default Navigation;