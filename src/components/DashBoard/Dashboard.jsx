import "./DashBoard.css";
import Sidebar from "../SideBar/SideBar";
import Topbar from "../TopBar/TopBar";
import Overview from "../Overview/OverView";
import Customers from "../Customers/Customers";
import ProductSell from "../ProductsSell/ProductSell";
import MonthlyEarnings from "../MontlyEarning/MontlyEarning";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar />
        <Overview />
        <div className="OverSection">
          <MonthlyEarnings />
          <Customers />
        </div>
        <ProductSell />
      </div>
    </div>
  );
}

export default Dashboard;
