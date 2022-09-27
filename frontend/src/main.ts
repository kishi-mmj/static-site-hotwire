import {Application} from "@hotwired/stimulus"
import * as Turbo from '@hotwired/turbo';
import {AllCheckboxController} from './controllers/all_checkbox_controller';
import {HelloController} from './controllers/hello_controller';
import {CheckboxesController} from './controllers/checkboxes_controller';

const body = document.querySelector('body')
body?.appendChild(document.createTextNode('js で生成されたテキスト'))
console.log('main page')

const main = () => {
    Turbo.start();
    const application = Application.start();
    application.register('hello', HelloController);
    application.register('checkbox-select-all', AllCheckboxController)
    application.register('checkbox-select-all', CheckboxesController)


};

main();


