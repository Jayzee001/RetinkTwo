import React from 'react'
//styling
import './nav.css'
// icons
import { FaSearch } from 'react-icons/fa'
import {GiSettingsKnobs} from 'react-icons/gi'



const Search = () => {
    const search = `Search for templates, projects, etc`
  return (
    <div className="search">
        <form>
            <span className="iconn">
                <FaSearch />
            </span>
            <input min={2} max={20} required
                // {searchLogo}
                  placeholder={search} />
            <button className="settings"><GiSettingsKnobs />
            </button>
            <button type='submit' className="btnn">
                <FaSearch />
            </button>
        </form>
    </div>
  )
}

export default Search
