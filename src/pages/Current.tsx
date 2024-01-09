/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { current } from '../services/endPoints';
import { CurrentType } from '../types';

function Current() {
  const [curr, setCurr] = useState<CurrentType>();
  const { loc } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    current(loc as string).then((resp) => setCurr(resp));
  }, []);

  return (
    <>
      <header
        className="h-10 flex flex-row items-center pt-5 pl-5"
      >
        <button onClick={ () => navigate(-1) }>Voltar</button>
      </header>

      <main className="flex flex-col items-center text-center mt-6 drop-shadow-2xl">
        <h1 className="text-3xl w-[90%] border-b">

          {`${curr?.location.name} - ${curr?.location.country}`}

        </h1>
        <section
          className="flex flex-row w-full gap-5 p-5"
        >
          <img
            src={ curr?.current.condition.icon.replace('64x64', '128x128') }
            alt="clima"
          />
          <div className="mt-5">
            <h2 className="text-xl">
              {curr?.current.condition.text}
            </h2>
            <h2>
              {`Última atualização às ${curr?.current.last_updated.split(' ')[1]}`}
            </h2>
          </div>
        </section>
        <section
          className="w-full flex flex-col items-start p-5"
        >
          <h2>{`Temperadura de ${curr?.current.temp_c} °C`}</h2>
          <h2>{`Sensação Térmica de ${curr?.current.feelslike_c} °C`}</h2>
        </section>
      </main>
    </>
  );
}

export default Current;
