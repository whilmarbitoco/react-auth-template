import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import Provider from "./utils/provider/Provider";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
