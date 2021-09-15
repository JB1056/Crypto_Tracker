# iDU_Challenge
An interactable display, showcasing the top 100 coins by Market Cap.
Coins are shown in a list-like display in a given order on a simple user interface

## Requirements
This project uses react.js
### Dependencies
* react-dom
* react-router-dom
* react-select
* axios
package.json is available for convenience

## How to Install
1. unzip Application.
2. open terminal and install dependencies, this can be easily done by using your preferred *npm install* or *yard add package.json*.
3. start the application from the terminal using your preferred *npm start* or *yarn start*.


## Implementation Notes
### Below is a list of implemented features.

#### Display Top 100 crypto currencies by Market Cap
* Consumes API data to display the top 100 crypto currencies ordered by market cap in an easy to digest list
* Displays required rypto name, current price and current market position
* Includes a rendered image of each currency for quick visual identification
* Hovering the rendered image for each individual currency will display the crypto token identifier
* Hovering the current market cap position will show the current market cap value of the respective coin

#### Sort displayed coins
* A simple and easy to use dropdown menu has been included
* Select any one of 6 options to interactively sort all available coins 
* The default sorting method is by Market Cap, in an ascending manner
* This feature can be used alongside the Search Coins feature

#### Search/Filter displayed coins
* A simple and easy to use search bar
* Live filtering of coins based on input value
* Filter is cleared by re-initiating focus on the search bar
* This feature can be used alongside the Sort Coins feature
