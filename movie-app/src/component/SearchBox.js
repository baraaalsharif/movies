import React from 'react';

const  SearchBox = (props) => {
    return (
        <div className='col col-sm-4'>
            <input className='form-control'
            value = {props.value}
            oneChange={ (event) => props.setSearchValue(event.target.value)}  
             placeholder ='Search a Movie ...'>

             </input>
            
        </div>
    );
};

export default SearchBox;
