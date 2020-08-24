import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Axios from 'axios';
// import {Link} from 'react-router-dom';

class home1 extends Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit(e)
    {
        e.preventDefault();
        Axios.get("http://localhost:5001/profiles/")
             .then(res=>console.log(res))
             .catch(err=>alert("could not get"));
    }
    render()
    {
    
        return(
           
            <form onSubmit={this.onSubmit}>
               
                <div className="card center">
                    <button type="submit" className="btn btn-danger">Get All Emails</button>
                 </div>
            </form>
        )
    }
}

export default home1;