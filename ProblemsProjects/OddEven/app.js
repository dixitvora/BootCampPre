// function for the odd and even

function oddEven() {

    let no = Number(document.getElementById('number').value)

    if (no % 2 == 0) {
        alert('Number is Even ')
    } else {
        alert('Number is Odd')
    }
}

// Event : on Submit 

document.querySelector('#even-odd').addEventListener('submit', e => {
    
    e.preventDefault()
   
    oddEven()
})