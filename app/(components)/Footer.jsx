export const Footer = () => {
  return (
    <footer className="h-[500px] flex flex-col items-center justify-center text-slate-300 bg-slate-600 w-full">
      <div className="grid grid-cols-6  w-[1170px]">
        <div className="w-[400px] h-[200px] col-span-2">
          <div>(주) 제이디아이</div>
        </div>
        {[1, 2, 3, 4].map((item) => {
          return (
            <div className="w-[200px] h-[200px]">
              <div>title</div>
              <div>contents</div>
              <div>contents</div>
              <div>contents</div>
              <div>contents</div>
              <div>contents</div>
            </div>
          );
        })}
      </div>
      <code className="w-[1170px] flex">© 2023 JDI, Inc.</code>
    </footer>
  );
};
