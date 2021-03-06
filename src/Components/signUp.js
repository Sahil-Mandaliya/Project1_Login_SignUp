import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Messages from "./messages";

class signUp extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:"",
            password:"",
            confirmPassword:"",
            isValidSignup : false,
            errors:[],
        }
        // console.log(this.props);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeConfirmPassword=this.onChangeConfirmPassword.bind(this);
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
    onChangeConfirmPassword(e)
    {
        this.setState({
            confirmPassword:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        const newProfile={
            email:this.state.email,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword,
        }

     
        Axios.post("http://localhost:5001/profiles/add",newProfile)
                 .then(
                     res=>{ res.data.length>0 ? this.setState({errors: res.data}) : this.setState({isValidSignup : true})}
                    )
                 .catch(err=>console.log(err));
            
    }
    render()
    {
        return (
            <div>
                <div className="card center border border-dark rounded" style={{width:"30rem"}}>
                    <div className="card-body"> 
                        <h2 className="card-title">Sign Up</h2>
                        <Messages errors={this.state.errors} isValidSignup={this.state.isValidSignup}/>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                               
                                <label htmlFor="signUpInputEmail1">Email address</label>
                                <input type="email" 
                                        className="form-control" 
                                        id="signUpInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                      //  required
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}></input>
                                {/* <small display="none" className="Errors">This Field is required!</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="signUpInputPassword1">Password</label>
                                <input type="password" 
                                        className="form-control" 
                                        id="signUpInputPassword1" 
                                        placeholder="Password"
                                      //  required
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        />
                            </div>
                            <div className="form-group">
                                <label htmlFor="signUpInputPassword2">Confirm Password</label>
                                <input type="password" 
                                        className="form-control" 
                                        id="signUpInputPassword2" 
                                        placeholder="Confirm Password"
                                      //  required
                                        value={this.state.confirmPassword}
                                        onChange={this.onChangeConfirmPassword}/>
                            </div>
                            <button type="submit" className="btn btn-primary">SignUp</button>
                            <Link to={'/login'}>  Already have an Account?Sign in</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default signUp;