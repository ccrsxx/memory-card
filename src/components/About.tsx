export function About() {
  return (
    <div className='flex flex-col items-center gap-4 rounded-lg border-4 border-orange-400 p-6'>
      <h2
        className='rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 
                   px-2 py-1 text-2xl font-bold text-white'
      >
        HOW TO PLAY
      </h2>
      <p className='font-medium'>
        Don&apos;t click on the same card more than once!
      </p>
    </div>
  );
}
