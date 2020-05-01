/*
 * Server-related tasks
 *
 */
import { Application } from '@curveball/core';
import { bodyParser } from '@curveball/bodyparser';
import * as fs from 'fs';
import * as handlers from 'handlers';

const app = new Application();
app.use(bodyParser());
app.use('/account/create, handlers.accountCreate);

 // Export the module
module.exports = {
  init: () => {
    server.listen(config.httpPort);
    console.log('\x1b[36m%s\x1b[0m','The HTTP server is running on port '+config.httpPort);

    const http2Server = http2.createSecureServer({
      key: fs.readFileSync('server-key.pem'),
      cert: fs.readFileSync('server-cert.pem')
    }, app.callback());

    http2Server.listen(config.httpsPort);
    console.log('\x1b[35m%s\x1b[0m','The HTTPS server is running on port '+config.httpsPort);

  }
 }
