import { useEffect, useState } from 'react';
import { GET } from '../services/ApiRequest';

export const useRequest = () => {
  useEffect(() => {
    dataRequested();
  }, []);

  const [acumulou, setAcumulou] = useState(Boolean);
  const [dataConcurso, setDataConcurso] = useState("");
  const [dezenas, setDezenas] = useState([]);
  const [ganhadores, setGanhadores] = useState(0);
  const [nome, setNome] = useState("");
  const [numeroConcurso, setNumeroConcurso] = useState(0);
  const [valor, setValor] = useState(0);

  const dataRequested = async() => {
    const data = await GET('lotofacil');
    
    setAcumulou(data.acumulou);
    setDataConcurso(data.data_concurso);
    setDezenas(data.dezenas);
    setGanhadores(data.local_ganhadores.length);
    setNome(data.nome);
    setNumeroConcurso(data.numero_concurso);
    setValor(data.valor_estimado_proximo_concurs);

    return {
      acumulou,
      dataConcurso,
      dezenas,
      ganhadores,
      nome,
      numeroConcurso,
      valor
    };
  };
};
