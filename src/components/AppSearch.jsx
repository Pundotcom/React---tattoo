import React from 'react'
import './AppSearch.css'

function AppSearch({searchText , setSearchText}) {
  return (
    <div className="app-search">
        <input 
          type="text" 
          className="app-input" 
          placeholder='Search Tattoo'
          value={searchText}
          onChange={(event) => {setSearchText(event.target.value)}}
        />
      </div>
  )
}

export default AppSearch