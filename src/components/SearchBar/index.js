import React from "react"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = React.useState("");

    const navigate = useNavigate();

    const retrieveResults = (event) => {
        event.preventDefault();
        navigate(`/search?searchQuery=${searchTerm}`)
    };

    return (
        <form onSubmit={retrieveResults}>
            <label>
                <input
                    type="text"
                    name="searchBar"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
            </label>
            <input type="submit" value="Search" />
        </form>
    );
}

