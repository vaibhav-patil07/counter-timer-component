import { UniqueId } from "./UniqueId.js";

class Counter{
    #count;
    #containerClasses = ["container","height--90vh","display--flex","flex-direction--col","justify-content--center","align-items--center"];
    #counterContainerClasses = ["counter-container","display--flex","flex-direction--col","justify-content--center","align-items--center"];
    #counterDivClasses = ["counter-div","display--flex","justify-content--center","align-items--center"];
    #counterClasses = ["counter","display--flex","justify-content--center","align-items--center"];
    #buttonDivClasses = ["button-div", "display--flex","justify-content--center","align-items--center" ];
    #counterButtonClasses = ["counter--button"];

    constructor(count){
        this.#count = count || 0;
        this.incrementButtonId = UniqueId.generateUniqueId({config:"increment"});
        this.decrementButtonId = UniqueId.generateUniqueId({config:"decrement"});
        this.countersIds = new Array();
    }
    incrementCounter(){
        this.#count++;
    }

    decrementCounter(){
        this.#count--;
    }

    updateCounter(){}

    render(){
        const container = document.createElement('div');
        const counterContainer = document.createElement('div');
        const counterHeading = document.createElement("h1");
        const counterDiv = document.createElement('div');
        const buttonDiv = document.createElement("div");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");

        container.classList.add(...this.#containerClasses);
        counterContainer.classList.add(...this.#counterContainerClasses)
        counterDiv.classList.add("counter-div");
        counterHeading.classList.add("coounter-heading");
        counterDiv.classList.add(...this.#counterDivClasses);
        buttonDiv.classList.add(...this.#buttonDivClasses);
        incrementButton.classList.add(...this.#counterButtonClasses);
        decrementButton.classList.add(...this.#counterButtonClasses);
        counterDiv.id = "counterDiv";
        incrementButton.id="increment-bt";
        decrementButton.id="decrement-bt";

        counterHeading.innerText = "COUNTER";
        incrementButton.innerText = "+";
        decrementButton.innerText = "-"; 

        incrementButton.onclick = this.incrementCounter.bind(this);
        decrementButton.onclick = this.decrementCounter.bind(this);

        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterDiv);
        counterContainer.appendChild(buttonDiv);
        buttonDiv.appendChild(decrementButton);
        buttonDiv.appendChild(incrementButton);
        container.appendChild(counterContainer);
        
        return container;
    }

    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
    }
}

export {Counter};