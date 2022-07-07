import { Inject, Provide } from '@midwayjs/decorator';
import { UserOptions } from '../interface';
import { UserModel } from '../model/user.model';
import { UserEntity } from '../entity/user.entity';

@Provide()
export class UserService {
  @Inject()
  userModel: UserModel;

  /**
   * 根据用户名密码获取用户信息
   * @param options
   */
  async getUser(options: UserOptions): Promise<UserEntity> {
    return await this.userModel.getUserByUsernameAndPassword(options);
  }
}
