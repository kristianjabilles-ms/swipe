// src/middleware/auth.js
export default function auth({ next }) {
  console.log('middleware')

  return next();
}