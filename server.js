import express from 'express';
import 'dotenv/config'
import { loginRoute } from './Routes/loginRoute.js';
import { postRoute } from './Routes/postRoute.js';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/login', loginRoute);
app.use('/posts', postRoute);
app.listen(PORT, (error) => {
	console.log("Server is Successfully Running, and App is listening on port " + PORT);
}
); 
