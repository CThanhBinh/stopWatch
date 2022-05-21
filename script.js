const m = document.querySelector('#minute')
const s = document.querySelector('#second')
const start = document.querySelector('#start')
const btnstop = document.querySelector('#stop')
const para = document.querySelector('#para')
document.querySelector('#card').style.backgroundColor = '#ffb700'

let m1 = 0
let s1 = 0

const setTime = () => {
    const time = setInterval(() => {
        s1++
        s.innerText = `0${s1}`
        if (s1 > 9) {
            s.innerText = s1
        } if (s1 > 59) {
            s1 = 0
            m1++
            m.innerText = `0${m1}`
        } if (m1 > 9) {
            m.innerText = m1
        }
    }, 10)
    btnstop.addEventListener('click', () => clearInterval(time))
    reset.addEventListener('click', () => {
        clearInterval(time)
        s1=0
        m1=0
        s.innerText = '00'
        m.innerText = '00'
    })
}
start.addEventListener('click', setTime);










