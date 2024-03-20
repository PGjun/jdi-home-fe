export const Footer = () => {
  return (
    <footer className="h-[500px] sm:h-[400px] flex flex-col items-center justify-center text-slate-300 bg-slate-600 w-full">
      <div className="grid sm:grid-cols-5 gap-5">
        <div className="h-[200px] sm:col-span-2">
          <div>{`(주) 제이디아이`}</div>
          <div className="whitespace-pre-line text-[14px] mt-[20px]">
            {`사업자등록번호 : 844-81-02620
            대표 : 이정희 
            주소 : 광주광역시 동구 금남로 193-22, 2층(금남로4가, 유오빌딩) 
            이메일 : jdi@jdi-global.com`}
          </div>
          <div className="mt-[50px]">
            <code className="w-full">© 2023 JDI, Inc.</code>
          </div>
        </div>
        {/* {[1, 2, 3].map((item) => {
          return (
            <div className="sm:w-[200px] w-full h-[200px]">
              <div>title</div>
              <div>contents</div>
              <div>contents</div>
              <div>contents</div>
              <div>contents</div>
              <div>contents</div>
            </div>
          );
        })} */}
      </div>
    </footer>
  )
}
