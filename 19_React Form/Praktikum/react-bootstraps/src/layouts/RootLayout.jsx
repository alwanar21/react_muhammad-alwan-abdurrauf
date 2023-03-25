import { Outlet } from "react-router-dom";
import NavbarHome from "../components/Navbar";


const RootLayout = () => {
    return (
        <div className="root-layout">
            <NavbarHome />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;