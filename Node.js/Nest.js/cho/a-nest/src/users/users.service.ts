import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
  getUsers() {}
  async join(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (user) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.'); // return 기능도 함께 수행함
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
