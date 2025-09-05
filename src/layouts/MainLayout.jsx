import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "./LeftAside";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      {/* Header */}
      <header>
        <Header />
        <LatestNews />
      </header>

      {/* Navbar */}
      <nav>
        <Navbar />
      </nav>

      {/* Main */}
      <main className="grid md:grid-cols-12 gap-3 mt-10">
        <aside className="col-span-3"><LeftAside/></aside>
        <main className="col-span-6">Main Section</main>
        <aside className="col-span-3">Right Aside</aside>
      </main>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
