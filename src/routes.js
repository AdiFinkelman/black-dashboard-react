import Dashboard from "views/Dashboard.js";
import Strategies from "views/Strategies.js";
import SelfTrading from "views/SelfTrading.js";
import TradeTable from "views/MyTrades.js";
import RTL from "views/Rtl.js";
import TableList from "views/TableList.js";
import Backtesting from "views/Backtesting.js";
import TradesManage from "views/BotManager.js";

var routes = [
  {
    path: "/dashboard",
    name: "Live Chart",
    rtlName: "גרפים",
    icon: "tim-icons icon-chart-bar-32",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/strategies",
    name: "Strategies",
    rtlName: "אסטרטגיות",
    icon: "tim-icons icon-book-bookmark",
    component: <Strategies />,
    layout: "/admin",
  },
  {
    path: "/self-trading",
    name: "Individual Trading",
    rtlName: "מסחר עצמאי",
    icon: "tim-icons icon-user-run",
    component: <SelfTrading />,
    layout: "/admin",
  },
  {
    path: "/trades-table",
    name: "Trades Table",
    rtlName: "עסקאות",
    icon: "tim-icons icon-coins",
    component: <TradeTable />,
    layout: "/admin",
  },
  {
    path: "/bots-manager",
    name: "Bot Manager",
    rtlName: "ניהול עסקה",
    icon: "tim-icons icon-wallet-43",
    component: <TradesManage />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Prices List",
    rtlName: "מחירי מטבעות",
    icon: "tim-icons icon-bold",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/Backtesting",
    name: "Backtesting",
    rtlName: "בדיקה לאחור",
    icon: "tim-icons icon-zoom-split",
    component: <Backtesting />,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "אנגלית",
    icon: "tim-icons icon-world",
    component: <RTL />,
    layout: "/rtl",
  },
];
export default routes;
