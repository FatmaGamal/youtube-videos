import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        //TODO: Add callback from parent component
        onFormSubmit(term);
    }

    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}/* defaultValue={this.state.term} */></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;