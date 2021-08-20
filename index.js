import express from 'express';
import bodyParser from 'body-parser'; //incoming post request
import usersRoutes from './routes/users.js';

const app = express();   //initilise express application
const PORT = 5000; //initialise port
//body parser

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req,res) => {    res.send('Hello from homepage');});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

