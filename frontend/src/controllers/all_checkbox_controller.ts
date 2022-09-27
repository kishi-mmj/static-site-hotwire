import {Controller} from '@hotwired/stimulus';
// @ts-ignore
import CheckboxSelectAll from 'stimulus-checkbox-select-all'

export class AllCheckboxController extends Controller<CheckboxSelectAll> {
    static targets = ["checkboxDeleteButton"];

    declare checkboxTargets: HTMLInputElement[]
    declare checkboxAllTarget: HTMLInputElement
    declare checkboxDeleteButtonTarget: HTMLInputElement

    initialize() {
        super.initialize();

        this.toggleDeleteButton = this.toggleDeleteButton.bind(this);
    }

    connect() {
        super.connect();

        // Get all checked checkboxes
        // this.checked;

        // Get all unchecked checkboxes
        // this.unchecked;

        this.checkboxTargets.forEach((checkbox) =>
            checkbox.addEventListener("change", this.toggleDeleteButton)
        );

        this.checkboxAllTarget.addEventListener("change", this.toggleDeleteButton);
    }

    toggleDeleteButton() {
        if (this.checkboxAllTarget.checked) {
            this.checkboxDeleteButtonTarget.hidden = false;
        } else {
            this.checkboxDeleteButtonTarget.hidden = true;
        }
    }
}

// export class AllCheckboxController extends CheckboxSelectAll {
//     connect() {
//         super.connect()
//         console.log('Do what you want here.')
//
//         // Get all checked checkboxes
//         this.checked
//
//         // Get all unchecked checkboxes
//         this.unchecked
//     }
// }