import { VscLoading } from '../common';

export function Fetching() {
  return (
    <button type='button' className='animate-spin-gradient text-6xl'>
      <VscLoading />
    </button>
  );
}
