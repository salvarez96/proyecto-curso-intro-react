import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/Provider";
import { GlobalStyles } from "./globalStyles";
import Modal from "./modal/Modal";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <GlobalStyles />
    <Provider>
      <App />
      {createPortal(<Modal />, document.getElementById('modal'))}
    </Provider>
  </>
);