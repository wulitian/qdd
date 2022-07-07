import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1657174997906_952',
  koa: {
    port: 7001,
  },
  orm: {
    /**
     * 单数据库实例
     */
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'qcc',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: true,
  },
} as MidwayConfig;
