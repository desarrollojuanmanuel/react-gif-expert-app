import {createRoot} from "react-dom/client";
import GifExpertApp from './GifExpertApp';
import './index.css'

const divRoot = document.querySelector("#root")
const root = createRoot(divRoot);
root.render(
  <GifExpertApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//