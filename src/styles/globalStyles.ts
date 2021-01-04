import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
}

body {
    font-size: 1.6rem;
    position: relative;
}

body, html {
    height: 100%;
    max-height: 100%;
}

*{
box-sizing: border-box;
}
`;
