import express from 'express';

import Handler from './handler.js';
import ClassicLoveHelper from './calculators/helpers/classicLoveHelper.js';
import ClassicLove from './calculators/classicLove.js';
import fakeCalculator2 from './calculators/fake/fake_calculator2.js';
import fakeCalculator3 from './calculators/fake/fake_calculator3.js';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const calculators = [
  { weight: 0.2, fn: new ClassicLove(new ClassicLoveHelper()) },
  { weight: 0.5, fn: fakeCalculator2 },
  { weight: 0.3, fn: fakeCalculator3 },
];

const myHandler = new Handler(calculators);

app.use(express.json());

app.post('/', (req, res) => {
  const { personOne } = req.body;
  const { personTwo } = req.body;
  res.json(myHandler.handlePost(personOne, personTwo));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
