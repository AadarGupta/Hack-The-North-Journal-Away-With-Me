import './mainpage.css';
// import Intro from './Intro';
import title_bg_img from "./resources/titlebg.jpg"
import TransparentButton from "../components/Buttons/transparentbutton.js"
import Popup from "../components/Divs/popup.js"
import React, {Component} from 'react'
import { Button } from "./Button.js"


export default class Mainpage extends Component{
    constructor(){
        super()
        this.state = {
            sign_in_visible: false,
            sign_up_visible: false,
        }
        this.sign_in_handler = this.sign_in_handler.bind(this)
        this.sign_up_handler = this.sign_up_handler.bind(this)
    }

    sign_in_handler(){
        console.log(!this.state.sign_in_visible)
        this.setState({
            sign_in_visible: !this.state.sign_in_visible
        })
    }

    sign_up_handler(){
        console.log(!this.state.sign_up_visible)
        this.setState({
            sign_up_visible: !this.state.sign_up_visible
        })
    }

    render () {
        return (
            <div className="Mainpage">
                <Popup visible={this.state.sign_in_visible} type="signin"/>
                <Popup visible={this.state.sign_up_visible} type="signup"/>
                <div className="Mainpage-title-div">
                    {/* background image */}
                    <img className="Mainpage-bg-img" src={title_bg_img} alt="some text"></img>
                    {/* <h1 className="Mainpage-title">Mental Health App</h1>
                    <div>
                        <TransparentButton onClick={this.sign_in_handler} text="Sign in"/>
                        <TransparentButton onClick={this.sign_up_handler} text="Create New Account"/>
                    </div> */}
                    <div className='hero-container'>
                        <h1>Welcome To Your Mental Health Tracker</h1>
                        <p>I'd love to know all about how you're feeling and be here for you!</p>
                        <div className='hero-btns'>
                            {/* <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            > */}
                            <TransparentButton onClick={this.sign_in_handler} > Sign In </TransparentButton>
                            <TransparentButton onClick={this.sign_up_handler} > Create New Account</TransparentButton>
                            {/* </Button> */}
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

// function Mainpage() {
//   return (
//     <div className="Mainpage">
//         <div className="Mainpage-title-div">
//             {/* background image */}
//             <img className="Mainpage-bg-img" src={title_bg_img} alt="some text"></img>
//             <h1 className="Mainpage-title">Mental Health App</h1>
//             <div>
//                 <TransparentButton text="Sign in"/>
//                 <TransparentButton text="Create New Account"/>
//             </div>

//             {/* <button classname="transparent-bg" colour="red" type="button">Sign in</button>
//             <button classname="transparent-bg" colour="red" type="button">Create new account</button> */}
//         </div>
//     </div>
//   );
// }