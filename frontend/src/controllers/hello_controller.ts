import { Controller } from "@hotwired/stimulus"

export class HelloController extends Controller {

    static targets = ['name', 'name2']

    declare nameTarget: HTMLInputElement
    declare name2Target: HTMLInputElement

    greet(): void {
        console.log('this.name', this.name)
        alert(`hello 2 ${this.name ? this.name : 'empty'}`)
    }

    greetWithName(): void {
        console.log('this.name2', this.name2)
        alert(`hello 2 ${this.name2 ? this.name2 : 'empty'}`)
    }

    get name() {
        return this.nameTarget.value
    }

    get name2() {
        return this.name2Target.value
    }

}

