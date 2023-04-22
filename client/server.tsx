// @ts-nocheck
import express from 'express';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';
import fs from 'fs';
import App from './src/App';

const app = express();

app.use(express.static('./dist', { index: false }));

app.get('/*', (req, res) => {
  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  const templateFile = path.resolve('./dist/index.html');
  fs.readFile(templateFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      data.replace('<body></body>', `<body><div id="root">${reactApp}</div></body>`)
      .replace('<title>Webpack App</title>', `<title>fabHotels</title>${sheet.getStyleTags()}`)
    );
  })

});

app.listen(8080, () => {
  console.log('server is listening on port 8080');
});