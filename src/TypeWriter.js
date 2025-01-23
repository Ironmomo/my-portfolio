export default class TypeWriter {
    constructor(txt, speed, id) {
        this.txt = txt
        this.speed = speed
        this.element = document.getElementById(id)
        this.textIdx = 0
        this.wordIdx = 0
        this.toggle = false
    }

    write() {
        this.toggle = !this.toggle
        if (this.toggle) {
            this.element.style.borderRight = '3px solid var(--accent-color)'
        }
        else if (this.textIdx < this.txt[this.wordIdx].length) {
            this.element.style.opacity = '1'
            this.element.style.borderRight = ''
            this.element.innerHTML = (this.textIdx === 0) ? this.txt[this.wordIdx].charAt(this.textIdx) : this.element.innerHTML + this.txt[this.wordIdx].charAt(this.textIdx)
            this.textIdx++
        } else {
            this.element.style.opacity = '0'
            this.element.style.borderRight = ''
            this.textIdx = 0
            this.wordIdx = (this.wordIdx + 1) % this.txt.length
            this.toggle = true
        }
        setTimeout(() => this.write(), this.speed)
    }
}