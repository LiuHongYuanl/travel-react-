import Express from 'express';
import bodyParser from 'body-parser';
import config from '../config';


const port = config.apiPort;
const app = new Express();

app.use(bodyParser.json());

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  API Listening on port %s. ', port);
  }
});
