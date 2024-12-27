const http = require("http");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Hello = require("./Component1"); // Import the Hello component


/*
From server side rendering we only rendered the static component to render data manipulation feature on dynamic update like onClick it should be done on client side
*/
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Render the React component to HTML
    const html = ReactDOMServer.renderToString(React.createElement(Hello));

    // Send the HTML content as the response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    // Handle other routes or requests
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

/*
    renderToString:  

    The renderToString method is part of the react-dom/server module and is used to render a React component to an HTML string. This is commonly used for server-side rendering (SSR) of React applications.


    import { renderToString } from 'react-dom/server';

    const htmlString = renderToString(<YourReactComponent />);


    Use Case:

    This method is useful for server-side rendering because it generates an HTML string that can be sent to the client as part of the initial response. This improves performance and SEO for React applications.

    Example


*/
