import React from "react";
import SearchBar from "./components/app.search-bar";
import youtubeApiGet from "./services/apis/app.service.api";


export default class App extends React.Component{


 async onTermSubbmit(term:string):Promise<void> {
   const data  =await  youtubeApiGet(term);
    console.log("===>", term, data);
  }
  override render(): React.ReactNode {
    return (
      <div className=" ui container">
  
        <SearchBar onFormSubmit={this.onTermSubbmit.bind(this)} />
    </div>);
  }
};
