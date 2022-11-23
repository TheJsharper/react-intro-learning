import { useState } from "react";

const Search = () => {
    const [term, setTerm] = useState<string>('')

    return (
        <div>
            <div className="ui form ">
                <div className="field">
                    <label htmlFor="searchInput"> Eneter search term</label>
                    <input name="searchInput" type="text" className="input" value={term}  onChange={ (e)=> setTerm(e.target.value)}/>
                </div>

            </div>

        </div>)
};
export default Search;