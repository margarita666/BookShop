import { Environment } from './environment.model';

// tslint:disable-next-line: no-var-requires
const fs = require('fs');

export const prod: Environment = {
  conection: 'http',
  mode: 'production',
  tokenSecret: fs.readFileSync('src/secrets/jwtKey.key'),
  tokenLife: 60 * 60,
  tokenExpireIn: 60 * 60 * 24,
  connectionWithMongo: 'mongodb+srv://margo:fDZXnidOTVnSOSAx@cluster0-c1mwm.mongodb.net/printing-ed?retryWrites=true&w=majority',
  serviceMail: 'gmail',
  userMail: 'bookShop@gmail.com',
  passwordMail: 'bookShop',
  emailPort: 587,
  secureMail: false,
 
};
