import "./SideBar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <ul className="menu">
        <li className="active">Dashboard</li>
        <li>Product</li>
        <li>Customers</li>
        <li>Income</li>
        <li>Promote</li>
        <li>Help</li>
      </ul>
      
      <div className="profile">
        <img src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile" />
        <span>Evano</span>
        <small>Project Manager</small>
      </div>
    </div>
  );
}
export default Sidebar;
