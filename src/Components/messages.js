import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
// import Axios from 'axios';
// import {Link} from 'react-router-dom';

function ErrorComponent(args)
{
    console.log(args);
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{args.Error.msg}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

class Messages extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            errors:[]
        }
        this.ListAllErrors=this.ListAllErrors.bind(this);
    }
    componentDidMount()
    {
        this.setState({
            errors:this.props.errors
        })
    }
    ListAllErrors()
    {
        const Errors=this.props.errors;
        // console.log(Errors);
        if(Errors.length===0)
        {
            return (<div/>);
        }
        else
        {
            return Errors.map(curError=>{
                
                return(<ErrorComponent Error={curError}
                                        key={curError.msg}/>)
            })
        }
    }
    render()
    {
        return(
            <div>
                {this.ListAllErrors()}
            </div>
        )
    }
}

export default Messages;