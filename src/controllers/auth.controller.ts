import { Controller, Get, UseGuards, Post, Body, UseFilters, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthService } from 'src/services/index';
import { AllExceptionFilter } from 'src/common/exception.filter';
import { Token } from 'src/models/token.model';
import { LoginUserModel } from 'src/models/login.model';
import { UserPayloadModel } from './userPayload.model';

@ApiBearerAuth()
@ApiUseTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @UseFilters(new AllExceptionFilter())
  @Post('login')
  public async login(@Body() loginModel: LoginUserModel) {
    console.log('contr')
    // loginModel.token = await this.authService.getToken(loginModel);

    // return loginModel;
    const accessToken: string = this.authService.getToken(loginModel);
    const refreshToken: string = this.authService.getRefresh(loginModel);
    const myTokens: Token = {
      accessToken,
      refreshToken,
    };
    return  myTokens;
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('person')
  public async getProfile(@Request() req) {
    console.log(req)
  }
}
