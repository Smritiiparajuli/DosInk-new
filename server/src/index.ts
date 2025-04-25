import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8000;

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening to port http://localhost:${PORT}`);
});
