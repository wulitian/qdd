import {Inject, Controller, Post, Body} from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import {Validate} from "@midwayjs/validate";
import {UserLoginDTO} from "../dto/user.dto";
import { JwtService } from '@midwayjs/jwt';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/user/login')
  @Validate({
    locale: 'zh_CN',
  })
  async login(
    @Body() user: UserLoginDTO,
  ) {
    const state = await this.userService.getUser(user);
    if(state){
      return {
        code: 200,
        result: "success",
        message: "登录成功",
        data:{
          token: await this.jwt.sign({ user: user }),
        }
      };
    }else{
      return {
        code: 400,
        result: "error",
        message: "账号或密码不正确",
        data: null
      };
    }
  }
}
