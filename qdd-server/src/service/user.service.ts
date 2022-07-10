import { Inject, Provide } from '@midwayjs/decorator';
import { UserOptions } from '../interface';
import { UserModel } from '../model/user.model';

@Provide()
export class UserService {

  @Inject()
  userModel: UserModel;

  /**
   * 根据用户名密码获取用户信息
   * @param options
   */
  async getUser(options: UserOptions) {
    let data = await this.userModel.getUserByUsernameAndPassword(options);
    console.log(data)
    return !!data;
  }
}
