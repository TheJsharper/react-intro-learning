/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Result } from "../models/app.wikipedia-response";
import wikipediaApiGet from "../services/app.wiki.service";

const Search = () => {

    const [term, setTerm] = useState<string>('');
    const [results, setResults] = useState<Result[]>([]);

    useEffect(() => {
        
        if (term)
            (async () => {
                const { data } = await wikipediaApiGet(term);
                setResults(data.query.search);
            })();
    }, [term]);

    const renderedItems: Array<JSX.Element> = results.map((value: Result) => {
        return (
            <div key={value.pageid} className="item">
                <div className="right floated content"><a href={`https://en.wikipedia.org?curid=${value.pageid}`} className="ui button"  target="blank" >Go</a></div>
                <div className="content">
                    <div className="header">
                        {value.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: value.snippet }} />

                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form ">
                <div className="field">
                    <label htmlFor="searchInput"> Eneter search term</label>
                    <input name="searchInput" type="text" className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>

            </div>
            <div className="ui list">
                {renderedItems}
            </div>

        </div>)
};
export default Search;