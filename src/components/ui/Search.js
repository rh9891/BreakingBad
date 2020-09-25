import React, { useState } from "react";

const Search = ({ getQuery }) => {
    const [text, setText] = useState("")
    const onChange = (userQuery) => {
        setText(userQuery);
        getQuery(userQuery);
    }

    return (
        <section className="search">
            <form>
                <input type="text" 
                className="form-control" 
                placeholder="Enter name of Breaking Bad character"
                value={text} 
                onChange={(event) => onChange(event.target.value)}
                autoFocus />
            </form>
        </section>
    );
};

export default Search;
