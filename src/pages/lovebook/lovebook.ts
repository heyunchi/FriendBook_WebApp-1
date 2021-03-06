import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsersService } from '../../providers/users.service';
import {BookdetailPage} from "../bookdetail/bookdetail";

@IonicPage()
@Component({
  selector: 'page-lovebook',
  templateUrl: 'lovebook.html',
  providers: [ UsersService ]
})
export class LovebookPage {
  _books:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage:Storage,
    private userSer:UsersService,
  ) {
  }

  ionViewDidLoad() {
    this.storage.ready().then(() => {
      this.storage.get('user_id').then((val) => {
        this.getLoveBooks(val)
      })
    });
  }

  getLoveBooks(userid){
    let str = '{"user_id":' + userid + '}';
    let user_id = JSON.parse(str);
    this.userSer.getUserBooks(user_id,result=> {
      if(!result.statusCode) {
        this._books = result[0];
      }
      // console.log(this._books);
    });
  }

  back(){
    this.viewCtrl.dismiss();
  }

  toBookDetail(book_id){
    this.navCtrl.push(BookdetailPage,{"book_id":book_id});
  }
}
