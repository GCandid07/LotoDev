import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MegaSena } from "../pages/MegaSena/MegaSena"
import { Quina } from "../pages/Quina/Quina"
import { Lotofacil } from "../pages/Lotofacil/Lotofacil"
import { Lotomania } from "../pages/Lotomania/Lotomania"
import { Timemania } from "../pages/Timemania/Timemania"
import { DiaDeSorte } from "../pages/DiaDeSorte/DiaDeSorte"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/Mega-sena"} element={<MegaSena/>}/>
        <Route path={"/Quina"} element={<Quina/>}/>
        <Route path={"/Lotofacil"} element={<Lotofacil/>}/>
        <Route path={"/Lotomania"} element={<Lotomania/>}/>
        <Route path={"/Timemania"} element={<Timemania/>}/>
        <Route path={"/Dia-de-sorte"} element={<DiaDeSorte/>}/>
      </Routes>
    </BrowserRouter>
  )
};
