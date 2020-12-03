Angularプロジェクト作成方法
ng new [フォルダ名]

ローカルサーバの立ち上げ方
ng start
package.jsonに記載あり

AngularComponent作成方法
ng generate component [Component名]
以下が作成される
.ts
.spec.ts
.html
.css
ngOnInit:ライフサイクルメソッド
→componentが初期化されるたびに実行されるメソッド


htmlの表示方法
<componentのselector></componentのselector>

・<label>名前:
    <input type="text" [(ngModel)]="member.name" placeholder="名前">
  </label>
　変更するデータmember.nameをinputのValueに設定して、変更があったらmember.nameに反映する
→AngularのForm機能のため警告が出る
 FormsModuleのimportが必要
 app.module.tsに以下を追加
///////////////////////////////////////////////////
 import { FormsModule } from '@angular/forms';
 ~~~~~~~~~~~~~
 imports[
    FormsModule
 ],
///////////////////////////////////////////////////

・Angularのforloop構文
　*ngFor="let member of members"
　membersプロパティをmemberでloopする

・クリックした際に選択できるようにする
　(click)="onSelect(引数)"

・値があれば表示、なければ非表示にする
　*ngIf="判定したい値"

＊大事
・class属性にselectedクラスを付与したい
　→trueなら付与、falseなら削除
　クラスバインディング
　[class.selected]="member === selectedMember"

・AngularService作成方法
ng generate service [Service名]


















