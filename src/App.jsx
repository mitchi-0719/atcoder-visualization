import { Main } from "./components/Main";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import { DataContextProvider } from "./context/DataContext";
import { FilterContextProvider } from "./context/FilterContext";

const App = () => {
  return (
    <DataContextProvider>
      <FilterContextProvider>
        <DarkModeContextProvider>
          <Main />
        </DarkModeContextProvider>
      </FilterContextProvider>
    </DataContextProvider>
  );
};

export default App;
