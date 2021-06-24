// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import path from 'path';

export const startServer = ({ port }) => {
  const app = express();

  app.use(express.static(path.join(__dirname, 'src')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/html/index.html'));
  });

  app.listen(port, () => {
    console.log(`\nGilded Rose started up at http://localhost:${port}`);
  });
};
