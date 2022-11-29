import React, { useState } from 'react';

interface SearchBarProps {
    onFormSubmit: (term: string) => void;
}
const SearchBar = (props: SearchBarProps) => {

    const [term, setTerm] = useState('');


    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        props.onFormSubmit(term);
    }

    return (
        <div className=' search-bar ui segment'>
            <form onSubmit={(e: React.SyntheticEvent) => onSubmit(e)} className="ui form">
                <div className="field">
                    <label htmlFor="video"> Video Search </label>
                    <input name="video" type="text" value={term} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
