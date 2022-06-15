export function Footer() {
  return (
    <footer className='text-lg'>
      <p className='text-footer-color'>
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️{' '}
        </span>
        by{' '}
        <a
          className='rounded px-1 pb-[2px] font-medium text-blue-400 decoration-transparent underline-offset-2
                     transition-all duration-300 hover:underline hover:decoration-pink-200 hover:brightness-125 
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:brightness-125'
          href='https://github.com/ccrsxx'
        >
          ccrsxx
        </a>
      </p>
    </footer>
  );
}
