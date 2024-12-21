import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
        <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminHeader/>
        <main className="flex-1 flex bg-mited/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
