import { UniqueId } from "./UniqueId.js";

class Counter{
    #count;
    constructor(count){
        this.#count = count || 0;
        this.incrementButtonId = UniqueId.generateUniqueId({config:"increment"});
        this.decrementButtonId = UniqueId.generateUniqueId({config:"decrement"});
        this.countersIds = new Array();
    }
    incrementCounter(){
        this.count++;
    }

    decrementCounter(){
        this.count--;
    }

    updateCounter(){}

    render(){
        const container = document.createElement('div');
        const counterContainer = document.createElement('div');
        const counterHeading = document.createElement("h1");
        const counterDiv = document.createElement('div');
        const counter1 = document.createElement('div');
        const buttonDiv = document.createElement("div");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");

        container.classList.add(...containerClasses);
        counterContainer.classList.add(...counterContainerClasses)
        counterDiv.classList.add("counter-div");
        counterHeading.classList.add("coounter-heading");
        counterDiv.classList.add(...counterDivClasses);
        counter1.classList.add(...counterClasses);
        buttonDiv.classList.add(...buttonDivClasses);
        incrementButton.classList.add(...counterButtonClasses);
        decrementButton.classList.add(...counterButtonClasses);
        counterDiv.id = "counterDiv";
        counter1.id = "counter1";
        incrementButton.id="increment-bt";
        decrementButton.id="decrement-bt";

        counterHeading.innerText = "COUNTER";
        counter1.innerText = count;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-"; 

        incrementButton.onclick = incrementCount;
        decrementButton.onclick = decrementCount;

        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterDiv);
        counterDiv.appendChild(counter1);
        counterContainer.appendChild(buttonDiv);
        buttonDiv.appendChild(decrementButton);
        buttonDiv.appendChild(incrementButton);
        container.appendChild(counterContainer)
        return container;
    }
}

export {Counter};