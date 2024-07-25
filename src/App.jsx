import { Main } from "./components/Main";
import { DataContextProvider } from "./context/DataContext";
import { FilterContextProvider } from "./context/FilterContext";
import { Test } from "./Test";

const App = () => {
  return (
    <DataContextProvider>
      <FilterContextProvider>
        <Main />
        {/* <Test />; */}
      </FilterContextProvider>
    </DataContextProvider>
  );
};

export default App;
