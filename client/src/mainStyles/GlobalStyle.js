import { createGlobalStyle } from "styled-components";
import bgImg from "../images/bg-home.jpg";

export const GLobalStyle = createGlobalStyle`
    ${"" /* Reset default */}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    ${"" /* Custom styles */}
    body {
        font-family: 'Marcellus', serif;
        height: 100vh;
        background-image: url(${bgImg});
        background-color: rgba(179, 113, 9,0.4);
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        background-size: 100% auto;
    }


    h2 {
        font-family: 'Libre Baskerville', serif;
        font-size: 32px;
        color: ${({ theme }) => theme.$gold}
    }

    .article-container {
        padding: 30px;
        background-color: ${({ theme }) => theme.$bgContainerColor};
        border-radius: 10px;
        line-height: 145%;
        color: #fff;
    }

    .article-container p {
        font-size: 18px;
    }
`;
