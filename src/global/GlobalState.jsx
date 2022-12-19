import { useEffect, useState } from 'react';
import { GET } from '../services/ApiRequest';
import { Format } from '../utils/Format';
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {

  // States
  const [lotoName, setLotoName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [acumulou, setAcumulou] = useState(false);
  const [dataConcurso, setDataConcurso] = useState("");
  const [dezenas, setDezenas] = useState([]);
  const [ganhadores, setGanhadores] = useState(0);
  const [nome, setNome] = useState("");
  const [numeroConcurso, setNumeroConcurso] = useState(0);
  const [valor, setValor] = useState(0);

  // UseEffects
  useEffect(() => {
    !lotoName 
    ? dataRequested("Mega-Sena")
    : dataRequested(lotoName)
  }, [lotoName])

  // Functions

  // Requests
  const dataRequested = async(option) => {

    const optionFormated = Format(option).toLowerCase();

    setIsLoading(true)
    const data = await GET(optionFormated);
    
    setAcumulou(await data.acumulou);
    setDataConcurso(await data.data_concurso);
    setDezenas(await data.dezenas);
    setGanhadores(await data.local_ganhadores && data.local_ganhadores.length);
    setNome(await data.nome);
    setNumeroConcurso(await data.numero_concurso);
    setValor(await data.valor_estimado_proximo_concurso);
    setIsLoading(false)
  };

  // Constants
  const states = {lotoName, isLoading, acumulou, dataConcurso, dezenas, ganhadores, nome, numeroConcurso, valor};
  const setters = {setLotoName, setIsLoading, setAcumulou, setDataConcurso, setDezenas, setGanhadores, setNome, setNumeroConcurso, setValor};
  const requests = {dataRequested};
  const functions = {};

  return (
    <GlobalStateContext.Provider value={{states, setters, requests, functions}}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
