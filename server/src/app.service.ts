import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  private meta = this.getAccessToken(process.env.CLIENT_ID); // Client id set up in .env

  constructor(private configService: ConfigService) { }

  async getAccessToken(clientId: string): Promise<any> {
    const res = await axios.get(
      `https://test.gnzs.ru/oauth/get-token.php`,
      {
        headers: {
          "X-Client-Id": clientId
        }
      }
    );

    return res.status === 204 ? null : await res.data;
  }

  async create(type, ename): Promise<any> {
    const { access_token, base_domain } = await this.meta;
    console.log(type, ename);
    let res = await axios.post(
      `https://${base_domain}/api/v4/${type}`,
      [{ name: ename}],
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
      },
    );
    return res.data._embedded;
  }
}