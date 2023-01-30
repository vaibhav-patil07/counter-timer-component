<h1>Timer Readme</h1>
<p>This component provides a standalone Timer application. To use Timer component you can use following code.</p>

```javascript
import {Timer} from "Timer.js"
const myTimer = new Timer();
myTimer.mount(node); //Here node represents a DOM element where you want to add Counter.
```
<h2>Functions</h2>
<ul>
    <li>
        <h3>render()</h3>
        <p>This function creates all elements of counter and return a container encapsulating all the elements.</p>
    </li>
    <li>
        <h3>mount()</h3>
        <p>This function takes node element as an argument. If node exists it adds container returned by the render() to the node else it adds container to the body.</p>
    </li>
    <li>
        <h3>tick()</h3>
        <p>This function increment second value by one if variable isTimerRunning is true.</p>
    </li>
    <li>
        <h3>playPauseTimer()</h3>
        <p>This function play or pause the timer</p>
    </li>
    <li>
        <h3>resetTimer()</h3>
        <p>This function resets timer to zero.</p>
    </li>
    <li>
        <h3>updateTimer()</h3>
        <p>If timerIsMounted variable is true this function calculates second, minute & hour value and then updates UI.</p>
    </li>
</ul>


