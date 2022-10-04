import { createGlobalStyle } from 'styled-components';

export function toEm(size, base = 16) {
    return size / base + 'em';
}

export const GlobalStyles = createGlobalStyle`
    :root {
        --body-text: ${toEm(20)};
        --heading-1: ${toEm(80)};
        --heading-2: ${toEm(64)};
        --heading-3: ${toEm(64)};
        --heading-4: ${toEm(28)};
        --heading-font: Ogg, serif;
        --heading-weight: 400;
        --primary-font: proxima-nova, sans-serif;
        --site-width: 1200px;
        --text-color: #fff;
    }

    @media (max-width:767px) {
        :root {
            --heading-1: ${toEm(36)};
            --heading-2: ${toEm(28)};
            --heading-3: ${toEm(20)};
            --heading-4: ${toEm(18)};
        }
    }
`;
