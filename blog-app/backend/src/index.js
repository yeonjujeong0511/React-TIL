const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return;
  }
  next().then(() => {
    console.log('END');
  });
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello world!';
});

// ctx : context의 줄임말, 웹 요청과 응답에 관한 정보를 가지고 있음
// next : 현재 처리중인 미들웨어의 다음 미들웨어를 호출하는 함수(생략가능)

app.listen(4000, () => {
  console.log('4000포트 연결');
});
