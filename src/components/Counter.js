import { UniqueId } from "./UniqueId.js";

class Counter{
    #count;
    #containerClasses = ["container","height--90vh","display--flex","flex-direction--col","justify-content--center","align-items--center"];
    #counterContainerClasses = ["counter-container","display--flex","flex-direction--col","justify-content--center","align-items--center"];
    #counterDivClasses = ["counter-div","display--flex","justify-content--center","align-items--center"];
    #counterClasses = ["counter","display--flex","justify-content--center","align-items--center"];
    #buttonDivClasses = ["button-div", "display--flex","justify-content--center","align-items--center" ];
    #counterButtonClasses = ["counter--button"];
    #isMounted = false;
    constructor(){
        this.#count = 0;
        this.containerId = UniqueId.generateUniqueId({prefix:"counter-container"});
        this.incrementButtonId = UniqueId.generateUniqueId({prefix:"increment"});
        this.decrementButtonId = UniqueId.generateUniqueId({prefix:"decrement"});
        this.countersIds = new Array();
        this.counterDivId = UniqueId.generateUniqueId({prefix:"counterDiv"})
    }

    incrementCounter(){
        this.#count++;
        this.addCounter(this.#count-1,this.#count);
    }
    
    decrementCounter(){
        this.#count--;
        this.addCounter(this.#count+1,this.#count);
    }

    updateCounterUI(){
        const countString = this.#count.toString();
        let digitCounter = 0;
        [...countString].forEach((digit) => {
            document.
            getElementById(this.countersIds[digitCounter])
            .innerText = digit;
            digitCounter++;
        });
    }

    playBounceAnimation(){
        const counter = document.getElementById(this.countersIds[0]);
        counter.className = this.#counterClasses.join(" ");
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                counter.classList.add("bouncy-animation");
            });
        });
    }
    addCounter(oldCount, newCount){
        let oldLength = oldCount.toString().length;
        let newLength = newCount.toString().length;
        let difference = newLength - oldLength;
        
        const counterDiv = document.getElementById(this.counterDivId);
        if(difference > 0){
            while(oldLength < newLength){
                oldLength++;
                const counter = document.createElement("div");
                const counterId= UniqueId.generateUniqueId({prefix:"counter"});
                counter.id = counterId;
                this.countersIds.push(counterId);
                counter.classList.add(...this.#counterClasses);
                counterDiv.appendChild(counter);
                this.playBounceAnimation();
            }
        }
        else if(difference < 0){
            while(difference < 0){
                counterDiv.removeChild(counterDiv.lastElementChild);
                this.countersIds.pop();
                difference++;
            }
        }
        this.updateCounterUI();
    }

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
        container.id = this.containerId;
        counterDiv.id = this.counterDivId;
        incrementButton.id= this.incrementButtonId;
        decrementButton.id=this.decrementButtonId;

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
        if(this.#isMounted) return;
        this.#isMounted = true;
        if(el){
            el.appendChild(this.render());
            this.addCounter("",(this.#count || 0));
            return;
        }
        document.body.appendChild(this.render());
        this.addCounter("",(this.#count || 0));
        return;
    }
    unmount(){
        if(!this.#isMounted) return;
        document.getElementById(this.containerId).remove();
        this.countersIds = new Array();
        this.#isMounted=false;
    }
}

export {Counter};