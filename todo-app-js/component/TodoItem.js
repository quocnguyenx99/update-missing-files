import html  from "../core.js";
import {connect} from "../store.js"

function TotoItem({todo, index, editIndex}) {
    return html`
        <li draggable="true" class="draggable ${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
            <div class="view">
                <div class="check"                >
                    <div class="check-mark"  onclick="dispatch('toggle', ${index})"> 
                        <img src="./assets/icon-check.svg" alt="icon-check">
                    </div>
                    <div class="todo-text" ondblclick="dispatch('startEdit', ${index})">
                        ${todo.title}
                    </div>
                </div>
            
                <button 
                    class="destroy"
                    onclick="dispatch('deleted', ${index})"
                >
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <input 
                class="edit" 
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit') " 
                onblur="dispatch('endEdit', this.value.trim())"
            >
        </li>
    `
}

export default connect()(TotoItem)