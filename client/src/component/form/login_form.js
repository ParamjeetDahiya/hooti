import React,{Component} from 'react';
import './form.css';
import classnames from "classnames";
import {Link} from 'react-router-dom';
import Button from '../widgets/button/button';
import FormLeft from './formleft';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component{

    constructor() {
        super();
        this.state = {
          emailId: "",
          password: "",
          errors: {}
        }}
    formSubmit=(event)=>{
        event.preventDefault();
        const userData = {
            email: this.state.emailId,
            password: this.state.password
          };
      
        this.props.loginUser(userData);
    }

    componentDidUpdate() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    handleEmailId=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handlePassword=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderForm=()=>{
        const { errors }= this.state;
        return(
            <div className="right">
                <h3>Login/SignUp</h3>
                <div className="login">
                    <form onSubmit={this.formSubmit}>
                        <input
                            type="text" 
                            placeholder="enter your Email Id" 
                            name="emailId" 
                            onChange={this.handleEmailId}
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.email
                              })}
                        />
                        {errors.emailId && (
                            <div className="invalid-feedback">{errors.emailId}</div>
                        )}
                        <input 
                            type="password" 
                            placeholder="enter your Password" 
                            onChange={this.handlePassword}
                            className={classnames( {
                                "is-invalid": errors.email
                              })}
                            />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                        <Button type="login" inputType="submit" value="Login" />
                    </form>
                    <h3>New User?<Link to="/register"><div style={{
                            color:"red"
                        }}>Click me</div></Link>
                    </h3> 
                </div>
            </div>
        )
    }
   render(){
    return(
        <div className="form">
            <h3>SignUp and get Rs:700 off </h3>
            <FormLeft />
            {this.renderForm()}
        </div>
    )
   }
}

Login.PropTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);