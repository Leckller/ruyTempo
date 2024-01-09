import { Link } from 'react-router-dom';
import { SearchComplete } from '../types';

function LinkSearchComp({ loc }: { loc: SearchComplete }) {
  return (
    <Link
      onClickCapture={ () => {
        if (!localStorage.getItem('lastSearch')) {
          localStorage.setItem('lastSearch', JSON.stringify([loc]));
        } else {
          localStorage.setItem('lastSearch', JSON
            .stringify([loc,
              ...JSON.parse(localStorage.getItem('lastSearch') as string)
                .filter((l2: SearchComplete) => l2.id !== loc.id)]));
        }
      } }
      to={ `/current/${loc.url}` }
      key={ loc.id }
      className="max-w-[250px] w-[150px] flex flex-col items-center justify-around
       mb-5 mt-5 grow"
    >
      <div
        className="border w-[90%] min-h-[100px] h-full p-3 rounded-lg
      flex flex-col items-center shadow-2xl gap-2"
      >
        <h2 className="scale-105 text-center">{loc.name}</h2>
        <h3 className="text-xs">{`${loc.country} - ${loc.region}`}</h3>
      </div>

    </Link>
  );
}

export default LinkSearchComp;
