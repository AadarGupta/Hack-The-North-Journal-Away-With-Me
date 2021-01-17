import React from "react";
import {uid} from "react-uid"
import JournalEntry from './journalentry'

class JournalList extends React.Component {
    constructor(props){
        super(props)
    }
    
  render() {
      return (
        <div>
        {this.props.list.map(entry => {
            return (
                <JournalEntry key={uid(entry)} entry={JSON.parse(entry)}/>)
        })}
        </div>
    );
    }
}

export default JournalList;
