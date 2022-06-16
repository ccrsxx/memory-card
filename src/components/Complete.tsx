import { Back } from './Back';
import { GiPartyPopper, FaSkull, VscError } from '../common';

interface CompleteProps {
  won?: boolean;
  lost?: boolean;
  error?: boolean;
  resetGame: () => void;
}

export function Complete({ won, lost, error, resetGame }: CompleteProps) {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div
        className={`${
          won ? 'text-green-400' : lost ? 'text-red-400' : 'text-yellow-400'
        } flex animate-fade-up-fast flex-col items-center gap-4`}
      >
        <i className='text-6xl'>
          {won ? <GiPartyPopper /> : lost ? <FaSkull /> : <VscError />}
        </i>
        <h2 className='text-5xl font-medium uppercase'>
          {!error ? `You ${won ? 'win' : 'lose'}` : 'Error when getting images'}
        </h2>
      </div>
      <Back resetGame={resetGame} />
    </div>
  );
}
