/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { current } from '../services/endPoints';
import { WeatherData } from '../types';
import Loading from '../components/Loading';

function Current() {
  const [curr, setCurr] = useState<WeatherData>();
  const [isLoading, setIsLoading] = useState(true);
  const { loc } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    current(loc as string, 3).then((resp) => {
      setCurr(resp);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <Loading />;
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

          {/* Top Section */}
          <img
            src={ curr?.current.condition.icon.replace('64x64', '128x128') }
            alt="clima"
          />
          <div className="mt-2 flex flex-col gap-2">
            <h2 className="text-2xl">{curr?.current.condition.text}</h2>

            <h2 className="text-6xl">{`${curr?.current.temp_c} °C`}</h2>

            <div className="flex flex-row items-center justify-center gap-3">

              <span className="flex flex-row items-center">
                <FaLongArrowAltUp className="text-red-600" />
                {curr?.forecast.forecastday[0].day.maxtemp_c}
              </span>

              <span className="flex flex-row items-center">
                <FaLongArrowAltDown className="text-blue-900" />
                {curr?.forecast.forecastday[0].day.mintemp_c}
              </span>

            </div>

            <h2>{`Última atualização às ${curr?.current.last_updated.split(' ')[1]}`}</h2>
          </div>

        </section>

        <section
          className="w-full flex flex-row items-start p-5 text-lg"
        >

          <h2 className="w-1/2">{`Sensação ${curr?.current.feelslike_c} °C`}</h2>

          <h2 className="w-1/2">
            {curr?.current.cloud as number > 15 ? 'Muitas Nuvens'
              : 'Poucas Nuvens'}
          </h2>

        </section>

        <section className="flex flex-row gap-5 items-start p-5 w-full">
          <h2 className="w-1/2">{`Humidade ${curr?.current.humidity}%`}</h2>
          <h2 className="w-1/2">
            {`Chuva ${curr?.forecast.forecastday[0].day.daily_chance_of_rain} %`}
          </h2>
        </section>

      </main>
    </>
  );
}

export default Current;
