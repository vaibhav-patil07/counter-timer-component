import { UniqueId } from "./UniqueId.js";
class Toggle{
    constructor(){
        this.toggleId = UniqueId.generateUniqueId({prefix:"toggle-input"});
    }
    render(){
        const container = document.createElement("label");
        const input = document.createElement("input");
        const span = document.createElement("span");
        input.id = this.toggleId;
        input.type = "checkbox";
        container.classList.add("switch");
        input.classList.add("checkbox");
        span.classList.add("slider","round");
        container.appendChild(input);
        container.appendChild(span);
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