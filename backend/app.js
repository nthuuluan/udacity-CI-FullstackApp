// app.js
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Server is running');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app; // export for testing
