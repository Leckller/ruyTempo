import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchAutoComplete } from '../services/endPoints';
import { SearchComplete } from '../types';
import LinkSearchComp from '../components/LinkSearchComp';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Home() {
  const [search, setSearch] = useState('');
  const [locais, setLocais] = useState<SearchComplete[]>();
  useEffect(() => {
    if (search !== '') searchAutoComplete(search).then((resp) => setLocais(resp));
  }, [search]);

  return (
    <div className="h-screen">
      <header
        className="h-[6%] mt-3 w-full flex flex-row flex-nowrap items-center
      justify-around"
      >

        <h1>RuyTempo</h1>

        <label
          className=""
          htmlFor="search"
        >
          <input
            placeholder="Pesquisar"
            type="text"
            className="border rounded-lg outline-none text-black pl-1"
            value={ search }
            onChange={ ({ target: { value } }) => setSearch(value) }
          />
        </label>

      </header>

      <main
        className=" flex flex-col gap-5 flex-wrap w-full h-[90%]
        items-center mt-5
      "
      >
        <h2>{!locais ? 'Últimas Pesquisas' : `Resultados para "${search}"`}</h2>

        <section
          className="flex w-full flex-row flex-wrap"
        >
          {locais && locais.map((loc) => (
            <LinkSearchComp key={ loc.id } loc={ loc } />
          ))}
        </section>

      </main>

      <footer className="text-center">
        created by ruy
      </footer>

    </div>
  );
}

export default Home;
