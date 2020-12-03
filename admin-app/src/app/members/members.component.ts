import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  // ディペンデンシーインジェクション=DI:依存性の注入
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    // コンストラクタは初期化する際に実行される
    // 外部からデータを取得する際はコンポーネントが初期化されるngOnInitで行う
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers() // Observable
      // ofメソッドで取得してきた値を取得している
      .subscribe(members => this.members = members);
  }

}
