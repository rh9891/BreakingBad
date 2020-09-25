import React, { useState } from "react";

const Search = () => {
    const [text, setText] = useState("")

    return (
        <section className="search">
            <form>
                <input type="text" 
                className="form-control" 
                placeholder="Enter name of Breaking Bad character"
                value={text} 
                onChange={(event) => setText(event.target.value)}
                autoFocus />
            </form>
        </section>
    );
};

export default Search;
