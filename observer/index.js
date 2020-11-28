import ClockTimer from './ClockTimer.js'
import DigitalClock from './DigitalClock.js'

const digitalClockElement = document.getElementById('digital-clock')
const triggerBtn = document.getElementById('trigger-btn')

const timer = new ClockTimer() // Subject
const digitalClock = new DigitalClock(digitalClockElement) // Objserver

// Every 100ms ticks the timer Subject
setInterval(() => {
    timer.tick()
}, 100)

const state = {
    isAttached: false,
}

triggerBtn.onclick = function () {
    if (state.isAttached) {
        timer.detach(digitalClock)

        triggerBtn.innerHTML = 'Attach'
        digitalClockElement.innerHTML = '##:##:##.###'
    } else {
        timer.attach(digitalClock)
        
        triggerBtn.innerHTML = 'Detach'
    }

    state.isAttached = !state.isAttached
}