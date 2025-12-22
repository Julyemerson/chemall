import { Outlet } from "@tanstack/react-router";
import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { AdminTopbar } from "@/components/layout/admin-topbar";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-secondary/20">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar />
        
        <main className="flex-1 p-2 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}