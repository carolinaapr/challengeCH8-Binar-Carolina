import React from "react";

const SearchBar = ({ data, setFilteredData }) => {
    const [search, setSearch] = useState('');
  
    const handleSearch = (e) => {
      const { value } = e.target;
      setSearch(value);
  
      if (value === '') {
        setSearch('');
        setFilteredData(data);
      } else {
        const searchData = data.filter(
          (item) =>
            item.username.toLowerCase().includes(value.toLowerCase()) ||
            item.email.toLowerCase().includes(value.toLowerCase()) ||
            item.level.toString().toLowerCase().includes(value.toLowerCase()) ||
            item.experience.toString().toLowerCase().includes(value.toLowerCase())
        );
  
        setFilteredData(searchData);
      }
    };
  
    return (
      <div className="w-full">
        <h1 className="font-semibold mb-3">Search</h1>
        <input
          className="px-3 py-2 rounded-lg shadow w-full"
          type="text"
          placeholder="Search by username, email, level, or experience.."
          value={search}
          onChange={handleSearch}
        />
      </div>
    );
  };
  
  export default SearchBar;
  