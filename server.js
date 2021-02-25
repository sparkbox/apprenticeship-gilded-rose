// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import { htmlListItems } from './src/item_list';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(htmlListItems);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
