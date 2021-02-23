import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const members = [
      { id: 1, name: '武山 岳大' },
      { id: 2, name: '駒倉 光紀' },
      { id: 3, name: '長田 研太' },
      { id: 4, name: '高藤 友梨香' },
      { id: 5, name: '浜崎 貴之' },
      { id: 6, name: '緑川 睦' },
      { id: 7, name: '森谷 怜奈' },
      { id: 8, name: '大槻 祐大' },
      { id: 9, name: '岩野 紀之' },
      { id: 10, name: '佐々木 小次郎' }
    ];
    return { members };
  }

  //データを作成した際に、Idを付与するメソッド
  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }

}
