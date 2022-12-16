import { useNavigate } from 'react-router-dom';
import { goToLotoDev } from '../../router/Coordinator';

export const Homepage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    goToLotoDev(navigate)
  }, 1500);

  return (
    <div>Homepage</div>
  );
};
