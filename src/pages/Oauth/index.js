import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/Auth';
import { Row, Title } from '../../components/Auth';
import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';
export default function GitHubAuthExchange() {
  const { eventInfo } = useContext(EventInfoContext);
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const url = `${process.env.REACT_APP_API_BASE_URL}github/login`;

  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  useEffect(async() => {
    await axios.post(url, { code }).then((res) => {
      setUserData(res.data);
      navigate('/dashboard');
    });
  }, [navigate]);

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
    </AuthLayout>
  );
}
