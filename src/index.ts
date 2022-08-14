import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connect from './mongo.connect';
import UserModel from './models/user.model';


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

connect();

const port = process.env.PORT;
app.get('/', async (req: Request, res: Response) => {
  const user = new UserModel({
    firstName: 'Bill',
    email: 'bill@initech.com',
    lastName: 'Gates',
    gender: 'male',
    address: {
      street: 'Del inca',
      city: 'las condes',
      postCode: 7550000,
    },
  });
  await user.save();
  res.send({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
