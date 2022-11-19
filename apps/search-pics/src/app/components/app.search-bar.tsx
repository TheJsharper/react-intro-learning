
import React from "react";

export interface SearchBarState{
  term:string;
}
export interface SearchBarProps{
   handleSubmitSearch(event: React.SyntheticEvent):void; 
}
export default class SearchBar extends React.Component<SearchBarProps,SearchBarState>{

 
    
    override state = {term:""};

    private handleChanges(event:React.ChangeEvent<HTMLInputElement>):void{
       this.setState({term: event.target.value});
    }
    private handleSubmitSearch( event: React.SyntheticEvent):void{
      event.preventDefault();
      console.log("==> onSubmit", this.state.term);
      
    }
    
    override render(): React.ReactNode {
        return (
            <div className="ui segment">
              <form onSubmit={(event:React.SyntheticEvent)=>this.props.handleSubmitSearch(event)} className="ui form">
                <div className="field">
                  <label htmlFor="search">Search images</label>
                  <input id="search" type="text" onChange={this.handleChanges.bind(this)}/>
                  <div>{this.state.term}</div>
                </div>
              </form>
            </div>
          );
    }
}
