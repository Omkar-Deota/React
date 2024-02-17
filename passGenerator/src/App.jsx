import { useEffect, useRef } from "react";
import { useState, useCallback } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [allowedno, setallowedno] = useState(false);
  const [allowedchar, setallowedchar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowedno) {
      str += "0123456789";
    }
    if (allowedchar) {
      str += "!@#$%^&*(){}[]";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, allowedno, allowedchar, setpassword]);
  useEffect(()=>{passwordGenerator()}
  ,[length,allowedchar,allowedno,passwordGenerator])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div
        className={
          "w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black-800 bg-gray-800"
        }
      >
        <h1 className={"text-white text-center mb-5"}>password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password..."
            ref={passwordRef}
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedno}
              id="numberip"
              onChange={() => {
                setallowedno((prev) => !prev);
              }}
            />
            <label htmlFor="numberip" className="text-white">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedchar}
              id="charip"
              onChange={() => {
                setallowedchar((prev) => !prev);
              }}
            />
            <label htmlFor="charip" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
