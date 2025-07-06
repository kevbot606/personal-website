import express from 'express';
import asynchandler from 'express-async-handler';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'personal-website-react', 'index.html'));
});

app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}...`);
});

