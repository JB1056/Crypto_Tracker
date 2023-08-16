import Select from 'react-select';

const options = [
  { label: 'Coin Name (A-Z)', value: 0, key: 'name', direction: 'asc' },
  { label: 'Market Position (Low-High)', value: 1, key: 'market_cap_rank', direction: 'desc' },
  { label: 'Price (Low-High)', value: 2, key: 'current_price', direction: 'asc' },
  { label: 'Coin Name (Z-A)', value: 3, key: 'name', direction: 'desc' },
  { label: 'Market Position (High-Low)', value: 4, key: 'market_cap_rank', direction: 'asc' },
  { label: 'Price (High-Low)', value: 5, key: 'current_price', direction: 'desc' }
]; // array containing dropdown menu options and key information

export function SelectDropdown({ onChangeCallback }) {
  return (
    <div className="dropdown">
      <Select
        options={options}
        defaultValue={options[4]}
        onChange={(e) => onChangeCallback(options, e.value)}
      />
    </div>
  );
}

export function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="searchBar">
        <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          onFocus={() => setSearchQuery("")}
          type="text"
          id="coinSearch"
          placeholder="Search Coins"
          name="filter"
          className="searchField"
        />
    </div>
  );
}