import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';

import EventInfoContext from '../../contexts/EventInfoContext';

import useSignUp from '../../hooks/api/useSignUp';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  const { eventInfo } = useContext(EventInfoContext);

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }
  function redirectGitHub() {
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';
    const CLIENT_ID = 'f86930e0554bb54e190d';
    const params = new URLSearchParams({
      response_type: 'code',
      scope: 'user',
      client_id: CLIENT_ID,
      redirect_uri: 'http://localhost:3000/auth/github/callback'
    });

    const authURL = `${GITHUB_URL}?${params.toString()}`;
    window.location.href = authURL;
  }
  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>
            Inscrever
          </Button>
        </form>
        <Button onClick={redirectGitHub}>
          <AiFillGithub /> Entre com GitHub
        </Button>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
