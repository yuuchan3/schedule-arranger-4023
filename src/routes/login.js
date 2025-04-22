const { Hono } = require('hono');
const { html } = require('hono/html');
const { setCookie } = require('hono/cookie');
const layout = require('../layout');

const app = new Hono();

app.get('/', (c) => {
  const form = c.req.query('form');
  if(form){
    setCookie(c,'loginForm',form,{maxAge:1000*60*10});
  }
  return c.html(
    layout(
      c,
      'Login',
      html`
        <a href="/auth/github" class="btn btn-primary my-3">
          GitHub でログイン
        </a>
      `,
    ),
  );
});

module.exports = app;
