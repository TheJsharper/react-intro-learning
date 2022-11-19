
import React from "react";

export default class SearchBar extends React.Component{

    private handleChanges(event:React.ChangeEvent<HTMLInputElement>):void{
        console.log("==>x", event.target.value);
    }
    
    override render(): React.ReactNode {
        return (
            <div className="ui segment">
              <form className="ui form">
                <div className="field">
                  <label htmlFor="search">Search images</label>
                  <input id="search" type="text" onChange={this.handleChanges}/>
                </div>
              </form>
            </div>
          );
    }
}
