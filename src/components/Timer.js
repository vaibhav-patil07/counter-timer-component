import { UniqueId } from "./UniqueId.js";
class Timer{
    #seconds;
    #isTimerRunnig = false;
    #isMounted = false;
    #displayFlex = "display--flex";
    #flexDirectionCol = "flex-direction--col";
    #justifyCenter = "justify-content--center";
    #alignCenter = "align-items--center";
    constructor(){
        setInterval(this.tick.bind(this),100);
        this.#seconds = 0;
        this.hourTimerId = UniqueId.generateUniqueId({prefix: "hour-timer"});
        this.minuteTimerId = UniqueId.generateUniqueId({prefix: "minute-timer"});
        this.secondTimerId = UniqueId.generateUniqueId({prefix: "second-timer"});
        this.resetButtonId = UniqueId.generateUniqueId({prefix: "reset-button"});
        this.playPauseButtonId = UniqueId.generateUniqueId({prefix: "play-pause-button"});
    }
    tick(){
        if(!this.#isTimerRunnig) return;
        this.#seconds++;
        this.updateTimer();
    }
    playPauseTimer(){
        this.#isTimerRunnig = !this.#isTimerRunnig;
        this.updateTimer();
    }
    resetTimer(){
        this.#isTimerRunnig = false;
        this.#seconds = 0;
        this.updateTimer();
    }
    updateTimer(){
        let hour = Math.trunc(this.#seconds / 3600);
        let minute = Math.trunc(this.#seconds / 60);
        let second = Math.trunc(this.#seconds % 60);
        document.getElementById(this.hourTimerId)
        .innerText = hour;
        document.getElementById(this.minuteTimerId)
        .innerText = minute;
        document.getElementById(this.secondTimerId)
        .innerText = second;
        const playPauseButton = document.getElementById(this.playPauseButtonId);
        if(this.#isTimerRunnig){
            playPauseButton.innerText = "Pause";
        }else{
            playPauseButton.innerText = "Play";
        }
    }
    render(){
        const container = document.createElement('div');
        const heading = document.createElement('h1');
        const timerContainer = document.createElement('div');
        const hrMinContainer =  document.createElement('div');
        const secContainer =  document.createElement('div');
        const buttonsContainer =  document.createElement('div');
        const hourCircle =  document.createElement('div');
        const minuteCircle =  document.createElement('div');
        const secondCircle =  document.createElement('div');
        const hourTimer =  document.createElement('div');
        const minuteTimer =  document.createElement('div');
        const secondTimer =  document.createElement('div');
        const hourHeading =  document.createElement('div');
        const minuteHeading =  document.createElement('div');
        const secondHeading =  document.createElement('div');
        const resetButton = document.createElement('button');
        const playPauseButton = document.createElement('button');

        hourTimer.id = this.hourTimerId;
        minuteTimer.id = this.minuteTimerId;
        secondTimer.id = this.secondTimerId;
        resetButton.id = this.resetButtonId;
        playPauseButton.id = this.playPauseButtonId;
        
        container.classList.add(...["container",this.#displayFlex, this.#justifyCenter, this.#alignCenter,this.#flexDirectionCol]);
        heading.classList.add("timer-heading");
        timerContainer.classList.add(...["timer-container",this.#displayFlex, this.#flexDirectionCol, this.#justifyCenter, this.#alignCenter]);
        hrMinContainer.classList.add(...["hr-min-container",this.#displayFlex,this.#justifyCenter,this.#alignCenter]);
        secContainer.classList.add(...["sec-container",this.#displayFlex,this.#justifyCenter,this.#alignCenter]);
        buttonsContainer.classList.add(...["button-container",this.#displayFlex,this.#justifyCenter,this.#alignCenter]);
        hourCircle.classList.add(...["circle","wave-animation",this.#displayFlex,this.#flexDirectionCol,this.#alignCenter,this.#justifyCenter]);
        minuteCircle.classList.add(...["circle","wave-animation",this.#displayFlex,this.#flexDirectionCol,this.#alignCenter,this.#justifyCenter]);
        secondCircle.classList.add(...["circle","wave-animation",this.#displayFlex,this.#flexDirectionCol,this.#alignCenter,this.#justifyCenter]);
        hourTimer.classList.add("timer");
        minuteTimer.classList.add("timer");
        secondTimer.classList.add("timer");
        hourHeading.classList.add("time-heading");
        minuteHeading.classList.add("time-heading");
        secondHeading.classList.add("time-heading");
        resetButton.classList.add("timer--button");
        playPauseButton.classList.add("timer--button");

        heading.innerText = "TIMER";
        hourTimer.innerText = 0;
        minuteTimer.innerText = 0;
        secondTimer.innerText = 0;
        hourHeading.innerText = "HOUR";
        minuteHeading.innerText = "MINUTE";
        secondHeading.innerText = "SECOND";
        resetButton.innerText = "Reset";
        playPauseButton.innerText = "Start";

        resetButton.onclick = this.resetTimer.bind(this);
        playPauseButton.onclick = this.playPauseTimer.bind(this);

        container.appendChild(heading);
        container.appendChild(timerContainer);
        timerContainer.appendChild(hrMinContainer);
        timerContainer.appendChild(secContainer);
        hrMinContainer.appendChild(hourCircle);
        hrMinContainer.appendChild(minuteCircle);
        secContainer.appendChild(secondCircle);
        hourCircle.appendChild(hourHeading);
        minuteCircle.appendChild(minuteHeading);
        secondCircle.appendChild(secondHeading);
        hourCircle.appendChild(hourTimer);
        minuteCircle.appendChild(minuteTimer);
        secondCircle.appendChild(secondTimer);
        container.appendChild(buttonsContainer);
        buttonsContainer.appendChild(resetButton);
        buttonsContainer.appendChild(playPauseButton);

        return container;
    }
    mount(el){
        if(this.#isMounted) return;
        this.#isMounted = true;
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
    }
}

export {Timer};