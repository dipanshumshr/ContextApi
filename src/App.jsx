import { useEffect, useState } from "react";
import { ThemeContextProvide } from "./context/theme";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = (status) => {
    
    if(status ==="light")
      setMode("light")
    else if(status === "dark")
      setMode("dark")
  }

  useEffect(() => {
    const themeElement = document.querySelector('html')
    themeElement.classList.remove("dark","light");
    themeElement.classList.add(mode);
  },[mode]);

   return (

   <ThemeContextProvide value={{mode, toggleMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
   </ThemeContextProvide>


  );
}

export default App;
