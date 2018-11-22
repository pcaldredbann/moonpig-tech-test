
### First, a note on CORS / CORB...

Unfortunately as I was consuming the web API from the front-end, I was hit with all the usual cross origin request blockers. To get around this I used proxying via the `webpack-dev-server`, which is fine from a development perspective, but hosting on S3 became a challenge.

Ideally, I would produce a `express` (or other technology) backend that would act as this proxy for REST requests.

### What's Included?

While there is still so much left that I would like to have completed, the main features provided are:

1. SPA style routing
2. Responsive layout (using Bootstrap), so it scales well on computers and mobile devices alike
3. Extensible React components and stylesheets using babel transpilation and CSS SASS
3. Custom made stack, created from the ground up without leveraging `create-react-app`
4. Product searching via the provided API
5. Basic pagination
6. Product view page showing mutiple available sizes and prices

### How To Get Up & Running

Simply pull this repository down and run:

`npm install && npm start`

This will pull down alll Node dependencies and spin up the webpack-dev-server.

### Testing

There's a **very** lightweight snapshot test included using `jest`. Given more time I would have separated the logic into more isolated components and wrapped with unit tests. Finallly I would have protected the whole thing with an `Enzyme` end-to-end automated integration test.