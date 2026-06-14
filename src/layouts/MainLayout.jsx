import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
	return (
		<>
			<div className="grid grid-cols-6">
				<Navbar />
				<div className="col-span-6 md:col-span-5">
					<div className="px-3">
						<Outlet />
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
