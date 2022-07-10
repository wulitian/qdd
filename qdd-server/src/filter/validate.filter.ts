import { Catch } from '@midwayjs/decorator';
import { MidwayValidationError } from '@midwayjs/validate';
import { Context } from '@midwayjs/koa';

@Catch(MidwayValidationError)
export class ValidateErrorFilter {
  async catch(err: MidwayValidationError, ctx: Context) {
    return {
      code: 20002,
      message: '校验参数错误,' + err.message
    }
  }
}
