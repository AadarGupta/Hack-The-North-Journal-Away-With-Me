import React from "react";

class JournalEntry extends React.Component{
  
    constructor(props){
        super(props)
        console.log(this.props.entry)
    }


    render() {
        return (
            <div className="journalEntry">
                <div className="journalTitle">
                    {this.props.entry.title}
                </div>
                <div className="journalText">
                    {this.props.entry.text}
                </div>
                <div className="journalDate">
                    {this.props.entry.date.substr(0, 19)}
                </div>
            </div>
    );
  }
}
  
  export default JournalEntry;
  