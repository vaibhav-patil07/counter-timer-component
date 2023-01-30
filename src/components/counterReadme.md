<h1>Counter Readme</h1>
<p>This component provides a standalone counter application. To use Counter component you can use following code.</p>

```javascript
import {Counter} from "Counter.js"
const myCounter = new Counter();
myCounter.mount(node); //Here node represents a DOM element where you want to add Counter.
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
        <h3>increamentCounter() / decrementCounter()</h3>
        <p>These functions increment/decrement the counter value.</p>
    </li>
    <li>
        <h3>updateCounterUI()</h3>
        <p>This function updates UI after any change in counter value.</p>
    </li>
    <li>
        <h3>addCounter()</h3>
        <p>This function adds a div for each digit in the count value.</p>
    </li>
</ul>


