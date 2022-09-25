import { createGlobalStyle } from 'styled-components';

export function toEm(size, base = 16) {
    return size / base + 'em';
}

export const GlobalStyles = createGlobalStyle`
    :root {
        --body-text: ${toEm(20)};
        --color-text: #686868;
        --heading-1: ${toEm(60)};
        --heading-2: ${toEm(48)};
        --heading-3: ${toEm(36)};
        --heading-4: ${toEm(28)};
        --primary-font: gtwalsheimproregular, sans-serif;
        --site-width: 1200px;
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
