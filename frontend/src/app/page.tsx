import OptionsMenu from "@/components/OptionsMenu";
import UserTable from "@/components/UserTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="w-full h-screen bg-brand-color/20 flex items-center">
      <OptionsMenu />
      <UserTable />
      <ToastContainer />
    </div>
  );
}
