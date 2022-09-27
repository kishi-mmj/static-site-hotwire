import * as Turbo from '@hotwired/turbo';

type Main = () => void
export const turbo: Main = () => {
    Turbo.start();
}

