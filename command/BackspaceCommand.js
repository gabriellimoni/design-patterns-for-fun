import Command from './core/Command.js'

export default class BackspaceCommand extends Command {
    constructor(element, length=1) {
        super()
        this.state.element = element
        this.state.length = length
    }

    execute() {
        const fullText = this.state.element.innerHTML
        const fullTextLength = fullText.length
        
        const deletedText = fullText.slice(
            fullTextLength - this.state.length,
            fullTextLength
        )
        this.state.deletedText = deletedText

        this.state.element.innerHTML = fullText.slice(
            0,
            fullTextLength - this.state.length
        )
    }

    undo() {
        const deletedText = this.state.deletedText
        this.state.element.innerHTML += deletedText
    }
}