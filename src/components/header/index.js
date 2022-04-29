import { useGlobal } from "../../context/context";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu.jsx";
import { Link } from "react-router-dom";
import './style.css';
import SearchbarContent from "../searchbar";

const HeaderComponent = () => {
    const { dataBucket, searchInput, setSearchInput } = useGlobal();
    const [filteredData, setFilteredData] = useState([]);

    const searchKeyword = (target) => {
        setSearchInput(target.value);
        const key = target.value.toLowerCase();
        const search = dataBucket && dataBucket?.filter(data => {
            if (data.title?.toLowerCase().includes(key) || data.name?.toLowerCase().includes(key)) return data;
        })
        setFilteredData(search);
    }

    return (
        <header className="home-header">
            <Link to="/home" className="marvel-logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png' width='150' alt="thumbnail"></img>
            </Link>
            <DropdownMenu />
            <div className='search-bar'>
                <input placeholder="Search" value={searchInput} onChange={(event) => searchKeyword(event.target)} />
                <span onClick={() => setSearchInput("")} aria-hidden="true">Clear</span>
            </div>
            <div className="">

                <ul className="search-content">
                    <SearchbarContent recipient={filteredData} />
                </ul>

            </div>
        </header>
    )
}

export default HeaderComponent;