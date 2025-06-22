import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prisma:PrismaService){}

    async validateLocalUser({userName,password}:CreateAuthInput)
    {
      const user=await this.prisma.user.findUnique({
        where:{
            userName
        },
      });

     if(!user) {
      console.log("User not found")
      throw new UnauthorizedException("User not found")} 

     const passwordMatched=await verify( user.password,password)

     if(!passwordMatched) throw new UnauthorizedException("invalid password ")

     return user
    }

  
}
