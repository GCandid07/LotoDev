import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage/Homepage";
import { LotoDev } from "../pages/LotoDev/LotoDev"
import { ErrorPage } from "../pages/ErrorPage/ErrorPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/LotoDev"} element={<LotoDev/>}/>
        <Route path={"*"} element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
};
