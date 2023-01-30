<h1>Toggle Readme</h1>
<p>This component provides a toggle button. To use toggle component you can use following code.</p>

```javascript
import {Toggle} from "Toggle.js"
const myToggleButton = new Toggle(toggleHeadings,togglefunction);
myToggleButton.mount(node); //Here node represents a DOM element where you want to add Counter.
```

<samp>toggleHeadings = {off:"text switching to off state", on: "text switching to on state" }
toggleFunction = It is a callback function called after the click event. It takes state of click event as parameter i:e on(true)/off(false).</samp>

<h2>Functions</h3>
<ul>
    <li>
        <h3>render()</h3>
        <p>This function creates all elements of counter and return a container encapsulating all the elements.</p>
    </li>
    <li>
        <h3>mount()</h3>
        <p>This function takes node element as an argument. If node exists it adds container returned by the render() to the node else it adds container to the body.</p>
    </li>
</ul>


