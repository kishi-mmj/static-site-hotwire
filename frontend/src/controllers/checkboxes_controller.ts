import { Controller } from "@hotwired/stimulus"

// https://blog.corsego.com/stimulus-checkboxes-select-all
// Connects to data-controller="checkbox-select-parent"
export class CheckboxesController extends Controller {
    static targets = ["parent", "child"]

    declare childTargets: HTMLInputElement[]
    declare parentTarget: HTMLInputElement

    connect() {
        // set all to false on page refresh
        this.childTargets.map(x => x.checked = false)
        this.parentTarget.checked = false
    }

    toggleChildren() {
        if (this.parentTarget.checked) {
            this.childTargets.map(x => x.checked = true)
            // this.childTargets.forEach((child) => {
            //   child.checked = true
            // })
        } else {
            this.childTargets.map(x => x.checked = false)
        }
    }

    toggleParent() {
        if (this.childTargets.map(x => x.checked).includes(false)) {
            this.parentTarget.checked = false
        } else {
            this.parentTarget.checked = true
        }
    }
}