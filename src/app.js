import {Counter} from "./components/Counter.js"

const root = document.getElementById("root");

let counter = new Counter();
counter.mount(root);