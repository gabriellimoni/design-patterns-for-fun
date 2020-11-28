const screenElement = document.getElementById('my-screen')

import TypeCommand from './TypeCommand.js'
import BackspaceCommand from './BackspaceCommand.js'

const commands = []

// handle input typing
document.onkeypress = function ({ key, ctrlKey }) {
    if (ctrlKey) return
    if (key === 'Enter') return
    
    const typeCommand = new TypeCommand(screenElement, key)
    typeCommand.execute()
    commands.push(typeCommand)
}

// handle CTRL+Z action
document.onkeyup = function ({ key, ctrlKey }) {

    if (!ctrlKey) return
    if (key.toLowerCase() !== 'z') return
    if (commands.length === 0) return

    const lastCommand = commands.pop()
    lastCommand.undo()
}

// handle Backspace action
document.onkeydown = function ({ key, ctrlKey }) {
    if (ctrlKey) return
    if (key !== 'Backspace') return
    
    const backspaceCommand = new BackspaceCommand(screenElement)
    backspaceCommand.execute()
    commands.push(backspaceCommand)
}
