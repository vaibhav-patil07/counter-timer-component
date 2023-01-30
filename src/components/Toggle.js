import { UniqueId } from "./UniqueId.js";
class Toggle{
    constructor(toggleHeadings,toggleFunction){
        if(toggleHeadings){
            const {off,on} = toggleHeadings;
            if(off && on){
                this.off = off;
                this.on = on;
            }
        }
        this.toggleId = UniqueId.generateUniqueId({prefix:"toggle-input"});
        this.toggleHeadingId = UniqueId.generateUniqueId({prefix:"toggle-heading"});
        this.toggleFunction = toggleFunction;
    }
    render(){
        const container = document.createElement('div');
        const heading = document.createElement('label');
        const label = document.createElement("label");
        const input = document.createElement("input");
        const span = document.createElement("span");

        input.id = this.toggleId;
        heading.id = this.toggleHeadingId;
        input.type = "checkbox";
        
        container.classList.add("toggle-container","display--flex","flex-direction--col");
        heading.classList.add("toggle-heading");
        label.classList.add("switch");
        input.classList.add("checkbox");
        span.classList.add("slider","round");
        
        heading.innerText = `Switch to ${this.on}`;

        input.addEventListener("click",(event)=>{
            if(event.target.checked){
                heading.innerText = `Switch to ${this.off}`;
            }else{
                heading.innerText = `Switch to ${this.on}`;
            }
            this.toggleFunction(event.target.checked);
        });

        label.appendChild(input);
        label.appendChild(span);
        container.appendChild(heading);
        container.appendChild(label);
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

export {Toggle}