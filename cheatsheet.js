// Need to refactor this so that it works with multiple toggle buttons, without necessarily needing to use anything other than an array of event listeners, and probably looking at the target property

// Might need to rethink the css selectors as well

const toggleCheckBox = document.querySelector('#toggle-button-1')
const toggle = document.querySelector('.toggle')
const toggleContainer = document.querySelector('.toggle-container')

toggleContainer.addEventListener('click', () => {
    toggleContainer.classList.toggle('toggle-active')
    if (toggleCheckBox.checked === true) {
        toggleCheckBox.checked = false
    } else {
        toggleCheckBox.checked = true
    }
})