import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')
    
    const onInputChange = (event) => {
        setTerm({busqueda: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()

        onFormSubmit(term.busqueda)
    }

    return (  
            <div className="search-bar ui segment">
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                        <label><h1>Buscar video</h1></label>
                        <input type="text" value={term.busqueda} onChange={onInputChange} />
                    </div>
                </form>
            </div>
    );
}
 
export default SearchBar;