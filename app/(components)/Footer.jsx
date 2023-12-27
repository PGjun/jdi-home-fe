export const Footer = () => {
  return (
    <footer className="h-[500px] flex flex-col items-center justify-center text-slate-300 bg-slate-600 w-full">
      <div className="grid grid-cols-5  w-[1170px]">
        <div className="w-full h-[200px] col-span-2">
          <div>(주) 제이디아이</div>
          <div className="whitespace-pre-line text-[14px] mt-[20px]">
            {`사업자등록번호 : 844-81-02620
            대표 : 김세호 
            주소 : 광주광역시 동구 금남로 193-22, 2층(금남로4가, 유오빌딩) 
            이메일 : jdi@jdi-global.com`}
          </div>
        </div>
        {[1, 2, 3].map((item) => {
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
