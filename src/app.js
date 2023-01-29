import {Counter} from "./components/Counter.js"
import {Timer} from "./components/Timer.js"
import {Toggle} from "./components/Toggle.js"

const root = document.getElementById("root");

// const counter = new Counter();
// counter.mount(root);
// const timer = new Timer();
// timer.mount(root);

const toggle = new Toggle();
toggle.mount(root);
