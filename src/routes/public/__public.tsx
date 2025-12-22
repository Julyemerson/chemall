import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Outlet } from "@tanstack/react-router";

export function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}