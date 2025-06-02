import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

const isProd = process.env.NODE_ENV === 'production';

app.post('/api/web-to-lead', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      req.body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    res.status(response.status).send(response.data);
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    res.status(error.response?.status || 500).send(error.message);
  }
});

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
