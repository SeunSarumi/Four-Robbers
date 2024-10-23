import { Outlet } from "react-router-dom";
import "../styles/AppLayout.css";

function AppLayout() {
  return (
    <div className="applayout">
      <img src="/images/nav-image.png" alt="" />
      <div className="layout">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
