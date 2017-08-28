import { Component, OnInit, Input } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';


@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  @Input() tieneSideMenu: boolean;
  sidemenu: boolean;
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.sidemenu = this.tieneSideMenu;
    this.items = [
            {
                label: 'Settings',
                icon: 'fa-cog ',
                items: [
                        {
                          label: 'Application',
                          icon: 'fa-plus',
                          routerLink: ['/main/settings-application']
                        },
                        { label: 'Open' },
                        { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            }
        ];
  }

}
