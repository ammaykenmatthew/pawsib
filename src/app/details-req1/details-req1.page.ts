import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RequestSrv } from '../Services/api.schema';
import { LoaderService } from '../Services/loader.service';
import { RequestService } from '../Services/requestSrv.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-details-req1',
  templateUrl: './details-req1.page.html',
  styleUrls: ['./details-req1.page.scss'],
})
export class DetailsReq1Page implements OnInit {
  @Input() req : RequestSrv;

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
    private ionLoader: LoaderService,
    public requestSrv : RequestService,
  ) { }


  ngOnInit() {
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  async onDeletePet(){
    const loading = await this.ionLoader.showLoader();


    this.requestSrv
      .deleteRequest(this.req.id)
      .pipe(take(1))
      .subscribe(()=>{
      this.closeModal('delete');
    });
  }
}
