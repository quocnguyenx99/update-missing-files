
const themeBtn = document.getElementById('theme-button')
const backgroundBtn = document.getElementById('bg-image')

const darkTheme = 'dark-theme'

// const darkThemeImage = 'assets/icon-sun.svg'
// const lightThemeImage = 'assets/icon-moon.svg'

// const darkBackground = 'assets/bg-desktop-dark.jpg'
// const lightBackground = 'assets/bg-desktop-light.jpg'

const selectedTheme = localStorage.getItem('selected-theme')

let currentTheme = selectedTheme

updateTheme(currentTheme);

function updateTheme(currentTheme) {
    document.body.classList[currentTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    if(currentTheme === 'dark') {
        themeBtn.style.backgroundImage = "url('./assets/icon-sun.svg')"
    } else {
        themeBtn.style.backgroundImage = "url('./assets/icon-moon.svg')"
    }
    
}

themeBtn.addEventListener('click', () => {
    console.log('cikck');
    if(currentTheme === 'dark') {
        currentTheme = 'light'
    } else {
        currentTheme = 'dark'
    }
    updateTheme(currentTheme)
    localStorage.setItem('selected-theme', currentTheme)

})

// Drag and drop 
// const remove = document.querySelector('.draggable')
// var dragSrcEl

// function dragStart(e) {
//   this.style.opacity = '0.4';
//   dragSrcEl = this;
//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.innerHTML);
// };

// function dragEnter(e) {
//   this.classList.add('over');
  
// }
// function dragOver(e) {
//   e.preventDefault();

//   e.dataTransfer.dropEffect = 'move';
//   return false;
// }

// function dragLeave(e) {
//   e.stopPropagation();

//   this.classList.remove('over');
// }

// function dragDrop(e) {
//   if (dragSrcEl != this) {
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }

//   return false;
// }

// function dragEnd(e) {
//   var listItems = document.querySelectorAll('.draggable');
//   [].forEach.call(listItems, function(item) {
//     item.classList.remove('over');
//   });
//   this.style.opacity = '1';
// }

// function addEventsDragAndDrop(el) {
//   el.addEventListener('dragstart', dragStart, false);
//   el.addEventListener('dragenter', dragEnter, false);
//   el.addEventListener('dragover', dragOver, false);
//   el.addEventListener('dragleave', dragLeave, false);
//   el.addEventListener('drop', dragDrop, false);
//   el.addEventListener('dragend', dragEnd, false);
// }

// var listItems = document.querySelectorAll('.draggable');
// [].forEach.call(listItems, function(item) {
//   addEventsDragAndDrop(item);
// });







