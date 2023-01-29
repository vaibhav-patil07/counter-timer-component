import {Counter} from "./components/Counter.js"
import {Timer} from "./components/Timer.js"
import {Toggle} from "./components/Toggle.js"

const timer =new Timer();
const counter =new Counter();
const root = document.getElementById("root");

function changeApp(isChecked){
    if(isChecked){
        counter.unmount();
        timer.mount(root);
    }else{
        timer.unmount();
        counter.mount(root);
    }
}
const toggle = new Toggle({on:"Timer",off:"Counter"},changeApp);
toggle.mount(root);
counter.mount();
