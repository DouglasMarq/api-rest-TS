import jwt from 'jsonwebtoken';
import config from 'config';

export function extractJwt(token: string) {
  let data = <any>jwt.verify(token, config.get('secrets.jwt_secret'), {
    ignoreExpiration: true,
  });
  console.log(data);
  return {
    payload: data,
  };
}
