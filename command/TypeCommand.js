import Command from './core/Command.js'

export default class TypeCommand extends Command {
    constructor(element, text) {
        if (!(element instanceof Element)) throw new Error("Must receive Element object")
        super()
        this.state.element = element
        this.state.text = text
    }

    execute() {
        this.state.element.innerHTML += this.state.text
    }

    undo() {
        const fullText = this.state.element.innerHTML
        const fullTextSize = fullText.length
        const typedTextSize = this.state.text.length

        this.state.element.innerHTML = fullText.slice(
            0,
            fullTextSize - typedTextSize
        )
    }
}