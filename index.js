// davaleba 1

const openModalButts = document.querySelectorAll('[data-modal-target]')
const closeModalButts = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButts.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals= document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButts.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal === null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// davaleba 2

const form = document.querySelector (".form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const color = document.querySelector('input[name="color"]')
    
    if(color.value === "red"){
        document.body.style.background = 'red'
        return  
    }
    if(color.value === "blue"){
        document.body.style.background = 'blue'
        return  
    }
    if(color.value === "green"){
        document.body.style.background = 'green'
        return  
    }
    if(color.value === "black"){
        document.body.style.background = 'black'
        return  
    }
    if(color.value === "white"){
        document.body.style.background = 'white'
        return  
    }

    alert('WE ONLY HAVE LIMITED COLORS!')

    color.value = ''
})


// davaleba 3

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const averageButton = document.getElementById("average-button");
    const result = document.getElementById("result");

    averageButton.addEventListener("click", () => {
      const numbers = input.value.split(":");

      let sum = 0;
      for (const number of numbers) {
        sum += Number(number);
      }

      const average = sum / numbers.length;

      result.textContent = `Average: ${average}`;
    });
  });