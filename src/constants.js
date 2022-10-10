import { createGlobalStyle } from 'styled-components';

export function toEm(size, base = 16) {
    return size / base + 'em';
}

export const GlobalStyles = createGlobalStyle`
    :root {
        --font-heading: Ogg, serif;
        --font-primary: proxima-nova, sans-serif;
        --heading-1: ${toEm(80)};
        --heading-2: ${toEm(64)};
        --heading-3: ${toEm(48)};
        --heading-4: ${toEm(28)};
        --heading-weight: 400;
        --space-lg-padding: 100px 0;
        --text-body: ${toEm(20)};
        --text-color: #fff;
        --width-full: min(1280px, 90%);
        --width-md: min(900px, 90%);
    }

    @media (max-width:767px) {
        :root {
            --heading-1: ${toEm(40)};
            --heading-2: ${toEm(48)};
            --heading-3: ${toEm(36)};
            --heading-4: ${toEm(18)};
        }
    }
`;
