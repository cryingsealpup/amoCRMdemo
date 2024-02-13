import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import { ContactQuery } from './dtos/contact.dto';
import { ConfigService } from '@nestjs/config';
// import jwtDecode, { JwtPayload } from 'jwt-decode';


@Injectable()
export class AppService {
  private meta = this.getAccessToken();

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

    let res = await axios.post(
      `${base_domain}/api/v4/leads`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return res.data._embedded.leads[0];
  }
  // private accessToken = this.configService.get('ACCESS_TOKEN');
  // private refreshToken = this.configService.get('REFRESH_TOKEN');
  // private clientId = this.configService.get('CLIENT_ID');
  // private clientSecret = this.configService.get('CLIENT_SECRET');
  // private redirectUrl = this.configService.get('REDIRECT_URL');

  // constructor(private configService: ConfigService) {}

  // async findContact(query: string) {
  //   await this.refreshTokenIfNeeded();
  //   let res = await axios.get(
  //     `https://andreydelovitiy871632.amocrm.ru/api/v4/contacts?query=${query}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${this.accessToken}`,
  //       },
  //     },
  //   );
  //   if (res.status == 204) {
  //     return null;
  //   } else {
  //     return res.data._embedded.contacts[0];
  //   }
  // }

  // async createContact(contactQuery: ContactQuery) {
  //   let json = [
  //     {
  //       name: contactQuery.name,
  //       custom_fields_values: [
  //         {
  //           field_code: 'PHONE',
  //           values: [
  //             {
  //               value: contactQuery.phone,
  //             },
  //           ],
  //         },
  //         {
  //           field_code: 'EMAIL',
  //           values: [
  //             {
  //               value: contactQuery.email,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ];

  //   let res = await axios.post(
  //     `https://andreydelovitiy871632.amocrm.ru/api/v4/contacts`,
  //     json,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${this.accessToken}`,
  //       },
  //     },
  //   );

  //   return res.data._embedded.contacts[0];
  // }
  // async updateContact(contactId: number, contactQuery: ContactQuery) {
  //   let json = {
  //     name: contactQuery.name,
  //     custom_fields_values: [
  //       {
  //         field_code: 'PHONE',
  //         values: [
  //           {
  //             value: contactQuery.phone,
  //           },
  //         ],
  //       },
  //       {
  //         field_code: 'EMAIL',
  //         values: [
  //           {
  //             value: contactQuery.email,
  //           },
  //         ],
  //       },
  //     ],
  //   };

  //   let res = await axios.patch(
  //     `https://andreydelovitiy871632.amocrm.ru/api/v4/contacts/${contactId}`,
  //     json,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${this.accessToken}`,
  //       },
  //     },
  //   );

  //   return res.data;
  // }

  // async createLead(contactId: number) {
  //   let json = [
  //     {
  //       name: 'Сделка для примера 1',
  //       price: 10000,
  //       _embedded: {
  //         contacts: [
  //           {
  //             id: contactId,
  //           },
  //         ],
  //       },
  //     },
  //   ];

  //   let res = await axios.post(
  //     `https://andreydelovitiy871632.amocrm.ru/api/v4/leads`,
  //     json,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${this.accessToken}`,
  //       },
  //     },
  //   );

  //   return res.data._embedded.leads[0];
  // }

  // async refreshTokenIfNeeded() {
  //   const decoded = jwtDecode<JwtPayload>(this.accessToken);
  //   const now = Math.round(new Date().getTime() / 1000);

  //   if (now >= decoded.exp) {
  //     let json = {
  //       client_id: this.clientId,
  //       client_secret: this.clientSecret,
  //       grant_type: 'refresh_token',
  //       refresh_token: this.refreshToken,
  //       redirect_uri: this.redirectUrl,
  //     };

  //     let res = await axios.post(
  //       `https://andreydelovitiy871632.amocrm.ru/oauth2/access_token`,
  //       json,
  //     );

  //     this.accessToken = res.data.access_token;
  //     this.refreshToken = res.data.refresh_token;
  //   }
  // }
}