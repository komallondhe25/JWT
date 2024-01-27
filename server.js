import express from 'express';
import { loginRoute } from './Routes/loginRoute.js';
const app = express();
const PORT = 3000;


app.use('/login', loginRoute)
app.listen(PORT, (error) => {
	console.log("Server is Successfully Running, and App is listening on port " + PORT);
}
); 
