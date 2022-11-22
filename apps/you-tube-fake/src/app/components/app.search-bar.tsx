import React from 'react';


export default class SearchBar extends React.Component<{onFormSubmit: (term:string)=>void}, {term:string}>{
    
    override state: Readonly<{ term: string; }> = {term:''};

    private onSearchChange (event:React.ChangeEvent<HTMLInputElement>):void{
        console.log("=>", event.target.value);
        this.setState({term:event.target.value})
    }
    
    private onSearchSubmit(event: React.SyntheticEvent):void{
        this.props.onFormSubmit(this.state.term);
        event.preventDefault();
        console.log(event);
    }

    override render(): React.ReactNode {
        return (
            <div className=' search-bar ui segment'>
               <form onSubmit={(e:React.SyntheticEvent)=> this.onSearchSubmit(e)}  className="ui form">
                    <div className="field">
                        <label htmlFor="video"> Video Search </label>
                        <input name="video" type="text" value={this.state.term} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> this.onSearchChange(e)} />
                    </div>
               </form>
            </div>
        )
    }
};