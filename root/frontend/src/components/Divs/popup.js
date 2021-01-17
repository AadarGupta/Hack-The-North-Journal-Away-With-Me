import React, {Component} from 'react'
import "./popup.css"
import {login, accountSignup} from '../../actions/account'
// import TransparentButton from "../Buttons/button.js"

export default class Popup extends Component {
    constructor() {
        super()
    }

    state = {
        accounts: [],
        firstname: '',
        lastname: '',
        email: '',
        password: "",
        signEmail: "",
        signPassword: ""
    }

    changedFirstname = (e) => {
        this.setState({firstname: e.target.value})
    }

    changedLastname = (e) => {
        this.setState({lastname: e.target.value})
    }


    changedEmail = (e) => {
        this.setState({email: e.target.value})
    }

    changedPassword = (e) => {
        this.setState({password: e.target.value})
    }

    changedSignEmail = (e) => {
        this.setState({signEmail: e.target.value})
    }

    changedSignPassword = (e) => {
        this.setState({signPassword: e.target.value})
    }

    signUp = () => {
        for (let i = 0; i < this.state.accounts.length; i++){
            if (this.state.accounts[i].email === this.state.signEmail){
                return false
            }
        }
        accountSignup(this.state.email, this.state.firstname, this.state.lastname, this.state.password)
    }

    signIn = () => {
        for (let i = 0; i < this.state.accounts.length; i++){
            if (this.state.accounts[i].email === this.state.signEmail){
                if (this.state.accounts[i].password === this.state.signPassword){
                    console.log("TRUEEEEEE")
                    return true
                }
                else{
                    return false
                }
            }
        }
        return false
    }

    componentDidMount = () => {
        login(this)
    }

    render() {
        var clarity = 0.0
        var z_index = -9999
        var onClick = () => {}
        
        var content = <p>hi</p>

        if(this.props.visible != null && this.props.visible != false) {
            clarity = 1.0
            z_index = 9999
        }

        this.props.onClick == null ? onClick = () => {} : onClick =  this.props.onClick
        
        if(!(this.props.type == null)) {
            if(this.props.type == "signup")
                content = this.signup()
            if(this.props.type == "signin")
                content = this.signin()
        }


        return(
            <div onClick={onClick} style={{opacity: clarity, zIndex: z_index}} className='Masking-div'>
                <div className="content-pane">
                    {content}
                </div>
            </div>
        )
    }

    signup() {
        return(
            <div className="Popup-Content">
                <form className="forms" id="sign-up">
                    <h1>Sign up</h1>
                    <label className='form-label' >First Name: </label>
                    <input className='form-text' onchange={this.changedFirstname} type="text" id="username"/>
                    <br/>
                    <label className='form-label'>Last Name:</label>
                    <input className='form-text' onchange={this.changedLastname} type="text" id="password-confirm"/>
                    <br/>
                    <label className='form-label'>Email</label>
                    <input className='form-text' onchange={this.changedEmail} type="text" id="email"/>
                    <br/>
                    <label className='form-label'>Password</label>
                    <input className='form-text' onchange={this.changedPassword} type="text" id="password"/>
                    <br/>
                    <label className='form-label'>Confirm Password</label>
                    <input className='form-text' type="text" id="password-confirm"/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

    signin() {
        return(
            <div className="Popup-Content">
                <form className="forms" id="sign-in">
                    <h1>Sign In</h1>
                    <label className='form-label'>Email</label>
                    <input className='form-text' onchange={this.changedSignEmail} type="text" id="email"/>
                    <br/>
                    <label className='form-label'>Password</label>
                    <input className='form-text' onchange={this.changedSignPassword} type="text" id="password"/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}