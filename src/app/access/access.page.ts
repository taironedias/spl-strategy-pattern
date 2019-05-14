import { Component, OnInit } from '@angular/core';
import { AcessoSystem } from './acesso';
import { AccessWithLoginStudant } from './access-variability';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const testeStrategy = new AcessoSystem('tairone', new AccessWithLoginStudant());
    testeStrategy.begin();
  }


}
