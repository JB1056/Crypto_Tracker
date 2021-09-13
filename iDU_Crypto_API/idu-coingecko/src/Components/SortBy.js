import React, { useState, Component } from "react";
/* Package to handle dropdown menu */
import Select from 'react-select'

// const Results = ({sortingOptions}) => (
//   <div className="dropdown-list">
//     {sortingOptions.map(x => {
//       return (
//         <a href="#" className="dropdown-item">{x}</a>
//       )
//     })}
//   </div>
// )


const options = [
  { label: 'Coin Name', value: 'nameAsc' },
  { label: 'Market Position', value: 'posAsc' },
  { label: 'Price', value: 'priceAsc' }
];

const MyComponent = () => (
  <div className="dropdown">
    <Select options={options} />
  </div>
)


function SortBy() {
  return (MyComponent())



  // const sortingOptions = ["Coin Name", "Market Position", "Coin Price"];
  // const [viewState, setViewState] = useState(false);
  // const onClick = () => setViewState(true)

  // return (
  //   <div className="dropdown">
  //     <button className="dropdown-btn" onClick={onClick}>Sort By &#9660;</button>
  //     {viewState ? <Results({sortingOptions}) /> : null}
  //   </div>
  // )
}



// const sortingOptions =
//   [{
//     items: [
//       { label: 'Coin Name', value: 'nameAsc' },
//       { label: 'Market Position', value: 'posAsc' },
//       { label: 'Price', value: 'priceAsc' }
//     ], name: 'Ascending'},

//   {
//     items: [
//       { label: 'Coin Name', value: 'nameDesc' },
//       { label: 'Market Position', value: 'posDesc' },
//       { label: 'Price', value: 'priceDesc' }
//     ], name: 'Descending' }
//   ];

// return (
//   <div>
//     <Dropdown
//       placeholder="Sort By"
//       className="dropdown"
//       options={sortingOptions}
//       value="posDesc"
//       onChange={(value) => console.log('change!', value)}
//       onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
//       onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
//       onOpen={() => console.log('open!')} />
//   </div>
// )


export default SortBy;