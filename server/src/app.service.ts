import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  private meta = this.getAccessToken(process.env.CLIENT_ID); // Client id set up in .env

  constructor(private configService: ConfigService) { }

  async getAccessToken(clientId: string) {
    const res = await axios.get(
      `https://test.gnzs.ru/oauth/get-token.php`,
      {
        headers: {
          "X-Client-Id" : clientId
        }
      }
    );

    return res.status === 204 ? null : await res.data;
  }

  async createLead() {
    const { access_token, base_domain } = await this.meta;
    console.log(`https://${base_domain}/api/v4/leads`);
    let res = await axios.post(
      `https://${base_domain}/api/v4/leads`,
      {
        headers: {
          'User-Agent': 'amoCRM-oAuth-client/1.0',
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
      },
    );
    console.log(res);
    return res.data._embedded.leads[0];
  }
}