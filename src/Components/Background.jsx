const Background = () => {
  return (
    <>
      <div className='absolute  w-full h-screen bg-neutral-900'>
        <div className='absolute text-xl w-full text-zinc-300 bottom-5 py-5   flex  justify-center'>
          Made ❤️ With You !
        </div>
        <h1 className=' absolute text-[300px] font-semibold text-yellow-600 select-none top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] first-letter:text-[#8c73f8] blur-sm  '>
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
