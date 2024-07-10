# Botnance Trading Platform Frontend
This project is a comprehensive trading dashboard that provides various features including trading strategies, a table of trades, real-time coin prices, and historical price charts. The dashboard is built with React and utilizes REST APIs to fetch and manage data.

## Features

### 1. Dashboard
Provides a historical price chart for a selected cryptocurrency and allows users to view data in day, week, or month intervals.

**Components:**
- `Dashboard`: Handles coin searches, fetches historical data, and displays charts with options to switch between day, week, and month views.

### 2. Strategies
Provides explanations of different trading strategies used in the trading system.

**Components:**
- `Strategies`: Lists and explains various trading strategies.

### 3. Trade Table
Displays a comprehensive table of all trades, both open and closed, including details such as symbol, strategy used, start and end prices, and trade status.

**Components:**
- `TradeTable`: Fetches and displays trades data from the backend.
- `CombinedComponent`: Integrates the `TradeTable` with balance display.

### 4. Coin Prices
Shows the current prices of various cryptocurrencies.

**Components:**
- `CoinPrices`: Fetches and displays the latest coin prices from the backend.

### 5. Self Trading
Allows users to perform manual trading operations such as buying and selling assets.

**Components:**
- `SelfTrading`: Provides forms for buying and selling cryptocurrencies, and displays notifications for trade actions.

### 6. Bot Manager
Manages trading bots and their configurations.

### 7. Prices List
Displays a list of prices for different cryptocurrencies.

### 8. Backtesting
Allows users to test trading strategies against historical data.

### 9. RTL Support
Provides support for Right-To-Left languages, such as Hebrew.

#### Features Map
| Live Chart                                                                                                             | Strategies                                                                                                            | Self Trading                                                                                                               | Trades Table                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- 
| [![Dashboard](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/73c65c03-45d1-4bdd-9ecc-15964bd68880)](http://localhost:3000/admin/dashboard) | [![Strategies](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/50bf276c-541f-4f15-a8f3-b386b57a9d14)](http://localhost:3000/admin/strategies) | [![Self Trade](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/f95ecbc3-6dee-4512-9fdb-d2b2a341cbe3)](http://localhost:3000/admin/self-trading) |[![Trades Table](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/00aa5c68-2a43-4bf8-a654-06499d152c5e)](http://localhost:3000/admin/trades-table) |

| Bot Manager                                                                                                             | Prices List                                                                                                            | Backtesting                                                                                                               | RTL Support                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- 
| [![Bot Manager](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/b3fec77c-2cb2-490e-aaf7-172d00a7bc6f)](http://localhost:3000/admin/bots-manager) | [![Prices List](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/4a482283-10cc-4519-a9c7-2a943cbad2b1)](http://localhost:3000/admin/tables) | [![Backtesting](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/133ac3bd-5094-4297-b57f-4aa123626d06)](http://localhost:3000/admin/Backtesting) | [![RTL](https://github.com/AdiFinkelman/black-dashboard-react/assets/126038641/e42cfb6b-4306-477b-a1aa-8af0eef8a5fc)](http://localhost:3000/rtl/rtl-support)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AdiFinkelman/black-dashboard-react.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd black-dashboard-react
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

   The app will be available at `http://localhost:3000`.


## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-react
.
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── RTLNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.js
    │   └── RTL
    │       └── RTL.js
    └── views
        ├── Backtesting.js
        ├── BotManager.js
        ├── Dashboard.js
        ├── Icons.js
        ├── MyTrades.js
        ├── Rtl.js
        ├── SelfTrading.js
        ├── Strategies.js 
        └── TableList.js
```
## API Endpoints

Make sure to have the backend server running on `http://127.0.0.1:5586` for the application to function properly. The following endpoints are used by the frontend:

- **Trades:** `GET /trades`, `POST /trade/buy`, `PUT /trade/:id`
- **Balance:** `GET /balance`
- **Historical Prices:** `GET /binance/<symbol>`
- **Strategies:** `GET /strategy_descriptions`
- **Prices List:** `GET /binance`
- **Backtesting:** `GET /backtest`

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- Demo: https://demos.creative-tim.com/black-dashboard-react/#/dashboard
- Download Page: https://www.creative-tim.com/product/black-dashboard-react

- ## Contributing

We welcome contributions to the project! If you have any suggestions, improvements, or bug fixes, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request from your forked repository to the main repository.

## Licensing

- Copyright 2023 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)
