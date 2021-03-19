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
            <div>
                <div className="search-bar ui segment search">
                    <form onSubmit={onSubmit} className="ui form">
                        <div className="field">
                            <input 
                            type="text" 
                            value={term.busqueda} 
                            onChange={onInputChange} 
                            placeholder="Buscar"
                            />
                        </div>
                    </form>
                </div>
            </div>
    );
}
 
export default SearchBar;