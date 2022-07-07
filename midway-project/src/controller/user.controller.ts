import { Inject, Controller, Query, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/user/login')
  async login(@Query('username') username, @Query('password') password) {
    const user = await this.userService.getUser({ username, password });
    return { success: true, message: 'OK', data: user };
  }
}
