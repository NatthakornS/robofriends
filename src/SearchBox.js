import React from 'react';

// const state = {
//     robots: robot,
//     searchfield: ''
// };

function SearchBox({searchfield, searchChange}) {
    return (
        <div>
            <input 
                class='pa2 bg-b'
                type='search'
                placeholder='Search robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;