import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import { Redirect } from "react-router-dom";

function ErrorComponent(args)
{
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{args.Error.msg}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

function Messages(props){
   
    console.log(props);
    var Errors = props.errors;
    
    if(props.isValidSignup) return <Redirect to='/home' /> ;

        return(
            <div>
                {Errors.length ? Errors.map(curError => <ErrorComponent Error={curError} key={curError.msg} />) : <div/> }
            </div>
            
        )
    }


export default Messages;