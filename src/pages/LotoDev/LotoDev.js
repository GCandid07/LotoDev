import { ColorThemes } from '../../Constants/Constants';
import { Content } from "../../components/Content/Content"
import { useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';

export const LotoDev = () => {
  const {states} = useContext(GlobalStateContext)

  return (
    <Content theme={ColorThemes[states.lotoName]}/>
  )
}
