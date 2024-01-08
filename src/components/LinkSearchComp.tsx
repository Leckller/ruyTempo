import { Link } from 'react-router-dom';
import { SearchComplete } from '../types';

function LinkSearchComp({ loc }: { loc: SearchComplete }) {
  return (
    <Link
      to={ `/current/${loc.url}` }
      key={ loc.id }
      className="w-1/2 flex flex-col items-center justify-around mb-10 mt-5"
    >
      <div
        className="border w-[90%] h-full p-3 rounded-lg
      flex flex-col items-center shadow-2xl gap-2"
      >
        <h2 className="scale-105 text-center">{loc.name}</h2>
        <h3 className="text-xs">{`${loc.country} - ${loc.region}`}</h3>
      </div>

    </Link>
  );
}

export default LinkSearchComp;
