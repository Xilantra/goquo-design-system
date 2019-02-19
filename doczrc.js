export default {
    title: '💺 GoQuo Design System',
    description: 'Collection of reusable components guided with clear standards.',
    // theme: './docs/docz-theme-default',
    public: '.docz/public',
    themeConfig: {
        // logo: {
        //     src: './docs/media/icon-gds.png',
        //     width: 120
        // },
        colors: {
            primary: 'mediumvioletred',
        },
    },
    htmlContext: {
        favicon: '/public/favicon.png',
        head: {
          raw: `
          <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134140717-1"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-134140717-1');
            </script>
          <style>
            #root > div > div:first-of-type {
            //   background: rgba(199, 21, 133, 0.04);
              background: #fff6fc;
            }
            // #root > div > div:first-of-type > div:first-of-type {
            //   padding: 30px;
            //   width: 350px;
            //   min-width: 350px;
            // }
            #root > div > div:first-of-type > div:first-of-type > div:last-of-type {
              display: none;
            }
            // #root > div > div:first-of-type > div:first-of-type > div:nth-child(2):before {
            //   background: transparent;
            // }
            #root > div > div:first-of-type > div:first-of-type > div:nth-child(2) h1,
            #root > div > div:first-of-type > div:first-of-type > div:nth-child(1) h1 {
                font-size: 20px;
                transition: color 250ms ease-in-out;
            }
            #root > div > div:first-of-type > div:first-of-type > div:nth-child(2):hover h1 {
                color: mediumvioletred
            }
            @media (min-width: 920px) {
              #root > div:first-of-type > div:nth-of-type(3) > div:first-of-type {
                width: 90% !important;
              }
            }
            #root > div > div:nth-of-type(3) > div:first-of-type > a:first-of-type {
              display: none;
            }
            #root > div > div > div > div:nth-of-type(3) {
                display: none;
            }
            #root > div > div:nth-of-type(3) > div > div > h2 {
                border-bottom: 1px solid #e8e7e7;
            }
            .react-live > div > div {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
            }
            .react-live div > div > span > div > div {
                width: 27px;
                height: 100%;
            }
            #root > div > div:first-of-type > div:first-of-type > div:nth-child(3) {
                border-top: 0;
                box-shadow: inset 0 -4px 8px 0 rgba(0,0,0,.05);
                border-bottom: 1px solid #dedede;
            }
            #root > div > div:first-of-type > div:first-of-type > nav dl a:hover {
                font-weight: normal;
            }
            .scrollbar-container {
              max-height: unset!important;
            }
            table thead th {
                font-weight: bold !important;
                color: #727272;
            }
            // .CodeMirror {
            //   font-size: 14px;
            //   height: 100%!important;
            // }
            // .CodeMirror pre {
            //   line-height: 20.8px!important;
            // }
            // .CodeMirror-line {
            //   padding: 0 10px!important;
            // }
            // .CodeMirror-lines {
            //   padding: 10px 0!important;
            // }
            // .CodeMirror-linenumber {
            //   padding: 0 7px 0 5px!important;
            // }
            // .code-table {
            //   display: flex;
            // }
            // .code-table {
            //   margin-bottom: 1em;
            // }
            // .code-table > div:first-of-type {
            //   flex: 1.5;
            // }
            // .code-table > div:last-of-type {
            //   flex: 1;
            // }
            // .code-table > div:last-child {
            //   position: relative;
            //   display: flex;
            //   align-items: center;
            //   justify-content: center;
            //   background: #f4f6f9;
            //   font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
            // segoe ui, arial, sans-serif;
            //   font-size: 4em;
            //   font-weight: 600;
            //   color: white;
            // }
            // .highlight {
            //   background: #ea567c;
            //   color: white;
            //   margin: 0 3px;
            //   padding: 4px 6px;
            //   border-radius: 3px;
            // }
            // .grommetux-meter {
            //   height: 70px;
            // }
            // .grommetux-meter__graphic {
            //   fill: transparent;
            //   stroke-linecap: round;
            //   stroke-linejoin: round;
            //   stroke-width: 15px;
            //   width: 70px;
            //   height: 70px;
            // }
            // .grommetux-meter__tracks {
            //   stroke: white;
            // }
            // .grommetux-meter__values {
            //   stroke: rgb(45, 55, 71);
            // }
            // code {
            //   background: #f4f6f9;
            //   color: #7D899C;
            //   margin: 0 3px;
            //   padding: 4px 6px;
            //   border-radius: 3px;
            //   font-family: "Source Code Pro",monospace;
            //   font-size: 14px;
            // }
            // #root > div > div:nth-of-type(3) a,
            // #root > div > div:nth-of-type(3) a:visited,
            // #root > div > div:nth-of-type(3) a:active {
            //   color: rgb(31, 182, 255)!important;
            //   text-decoration: none!important;
            //   cursor: pointer!important;
            // }
          </style>
          `,
        },
      },
}