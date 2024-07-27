import { Main } from "./components/Main";
import { DataContextProvider } from "./context/DataContext";
import { FilterContextProvider } from "./context/FilterContext";

const App = () => {
  return (
    <DataContextProvider>
      <FilterContextProvider>
        <Main />
      </FilterContextProvider>
    </DataContextProvider>
  );
};

export default App;
