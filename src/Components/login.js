import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Axios from 'axios';
import {Link} from 'react-router-dom';

class signUp extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:"",
            password:"",
            confirmPassword:"",
            cartValues:[],
        }
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    onChangePassword(e)
    {
        this.setState({
            password:e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        Axios.find(this.state.email)
               .then(res=>console.lof(res))
               .catch(err=>console.log("kdf error "+err));
    }
    render()
    {
        return (
            <div>
                <div className="card center colorr" style={{width:"30rem"}}>
                    <div className="card-body "> 
                        <h2 className="card-title">Login</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="signUpInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="signUpInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="signUpInputPassword1">Password</label>
                                <input type="password" className="form-control" id="signUpInputPassword1" placeholder="Password"/>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link to={'/'}> New User?Sign Up</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default signUp;