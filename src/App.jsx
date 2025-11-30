import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App(){
  return <div>
    <Header />

    <div>
      <Outlet />
    </div>
  </div>
}