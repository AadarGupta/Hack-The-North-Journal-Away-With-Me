import React from "react";
import "./journal.css";
import { getEntries } from '../actions/account'
import Button from "react-bootstrap/Button";
import CreateJournal from "../create-journal/create-journal";
import JournalList from "./entrylist";
class Journal extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    getEntries(this)
  }
 
  render() {
    return (
      <div>
        <div className="title-bg">
          <h1 className="page-padding">It's...Journal Time?</h1>
        </div>
        <div className="page-padding">
          <div>What would you like to do?</div>
          <br />
          <CreateJournal/>
          <JournalList list={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default Journal;
