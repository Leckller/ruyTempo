import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Current } from '../types';
import { current } from '../services/endPoints';

function Current() {
  const [curr, setCurr] = useState<Current>();
  const { loc } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    current(loc as string).then((resp) => setCurr(resp));
  }, []);
  return (
    <>
      <header>
        <button onClick={ () => navigate(-1) }>Voltar</button>
      </header>
      <main />
    </>
  );
}

export default Current;
