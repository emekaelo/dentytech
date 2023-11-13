import { Header } from "./components/Header/Header.tsx";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { Preloader } from "./components/Preloader/Preloader.tsx";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const removePreloader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  };
  useEffect(() => {
    removePreloader();
  });

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <Header />
          <HomePage />
        </>
      )}
    </>
  );
};
export default App;
