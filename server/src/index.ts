import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  const staticPath = path.join(__dirname, '../../client/dist');
  console.log('Serving static files from:', staticPath);
  app.use(express.static(staticPath));
  app.get('*', (req: Request, res: Response) => {
    console.log('Handling wildcard route for:', req.url);
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening to port http://localhost:${PORT}`);
});
