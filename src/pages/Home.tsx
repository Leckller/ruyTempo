/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
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
        <h2 className="text-2xl">
          {!locais ? localStorage.getItem('lastSearch') ? 'Últimas Pesquisas' : 'Bem Vindo ao ruyTempo!'
            : `Resultados para "${search}"`}

        </h2>

        <section
          className="flex w-full flex-row flex-wrap"
        >
          {locais ? (
            locais.map((loc) => (
              <LinkSearchComp key={ loc.id } loc={ loc } />
            ))
          ) : (
            localStorage.getItem('lastSearch') ? (
              JSON.parse(localStorage.getItem('lastSearch') as string).map((locate: SearchComplete) => (
                <LinkSearchComp loc={ locate } key={ locate.id } />
              ))
            ) : (
              <div className="p-5 text-center flex flex-col gap-3">

                <h2>
                  Digite no campo a cima uma cidade/país/estado para saber o Tempo na região
                </h2>

                <h2>
                  Caso não encontre a região desejada tente pesquisar sem utilizar caracteres especiais e acentos.
                </h2>

              </div>)
          )}
        </section>

      </main>

      <footer className="text-center">
        created by ruy
      </footer>

    </div>
  );
}

export default Home;
