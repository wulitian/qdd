import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework ,Application} from '@midwayjs/koa';

describe('正常登录', () => {
  let app: Application;
  beforeAll(async () => {
    try {
      app = await createApp<Framework>();
    } catch (err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });
  afterAll(async () => {
    // close app
    await close(app);
  });

  it('正常登录',
    async () => {
      const result = await createHttpRequest(app)
        .post('/api/user/login')
        .send({username: '1', password: '1'});
      expect(result.status).toBe(200);
      expect(result.body.code).toBe(200);
      expect(result.body.result).toBe('success');
      expect(result.body.message).toBe('登录成功');
      await close(app);
    });

  it('异常登录',
    async () => {
      const result = await createHttpRequest(app)
        .post('/api/user/login')
        .send({username: '2', password: '1'});
      expect(result.status).toBe(200);
      expect(result.body.code).toBe(400);
      expect(result.body.result).toBe('error');
      expect(result.body.message).toBe('账号或密码不正确');
      await close(app);
    });

  it('超时',
    async () => {
      const result = await createHttpRequest(app)
        .post('/api/user/login')
        .send({username: '1', password: '1'})
        .set('x-timeout', '1000');
      expect(result.status).toBe(200);
    });

  it('返回格式',
    async () => {
      const result = await createHttpRequest(app)
        .post('/api/user/login')
        .send({username: '1', password: '1'})
      expect(result.body.code).toBeDefined();
      expect(result.body.result).toBeDefined();
      expect(result.body.message).toBeDefined();
      expect(result.body.data).toBeDefined();
    });
});



