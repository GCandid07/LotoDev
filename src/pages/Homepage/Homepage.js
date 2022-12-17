import { useNavigate } from 'react-router-dom';
import { goToLotoDev } from '../../router/Coordinator';
import * as Styles from "./Styles"
import { FourLeafClover } from '../../components/FourLeafClover/FourLeafClover';

export const Homepage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    goToLotoDev(navigate)
  }, 5500);

  return (
    <Styles.Container>
      <Styles.Title>
        <FourLeafClover />
        <h1>Loto<span>D</span>ev</h1>
      </Styles.Title>
      <div>
        <Styles.Typewriter>O seu consultor de loterias.</Styles.Typewriter>
      </div>
    </Styles.Container>
  );
};
