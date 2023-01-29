import {Counter} from "./components/Counter.js"
import {Timer} from "./components/Timer.js"
import {Toggle} from "./components/Toggle.js"

function changeApp(isChecked){
    if(isChecked){
        console.log("Timer");
    }else{
        console.log("Counter");
    }
}
const root = document.getElementById("root");
const toggle = new Toggle({on:"Timer",off:"Counter"},changeApp);
toggle.mount(root);
