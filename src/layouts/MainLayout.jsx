import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "./LeftAside";
import RightAisde from "./RightAisde";

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
      <main className="grid md:grid-cols-12 gap-5 mt-10">
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        <section className="col-span-6">
          <Outlet />
        </section>

        <aside className="col-span-3">
          <RightAisde />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
