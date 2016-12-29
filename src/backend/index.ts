
import * as express from 'express';

const app: Express.Application = express();

const router = express.Router();
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000);
