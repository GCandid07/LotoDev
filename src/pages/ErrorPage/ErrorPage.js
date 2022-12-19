import * as Styles from './Styles';
import { goToLotoDev } from '../../router/Coordinator'
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <Styles.Container>
      <Styles.Content>
        <h1>Ooops, não foi possível o acesso no endereço solicitado!</h1>
        <p>Verifique o endereço digitado, ou tente novamente mais tarde.</p>
        <p>Volte à <span onClick={() => goToLotoDev(navigate)}>Página Inicial</span></p>
      </Styles.Content>
    </Styles.Container>
  );
};
