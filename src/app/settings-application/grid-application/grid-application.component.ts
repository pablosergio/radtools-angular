import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsApplication } from '../settings-application';
import { SettingsApplicationService } from '../settings-application.service';
import { LoaderService, PageResponse, DataService, DataTable } from '../../common/api';
import { SelectItem } from 'primeng/primeng';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-grid-application',
  templateUrl: './grid-application.component.html',
  styleUrls: ['./grid-application.component.css']
})

export class GridApplicationComponent extends DataTable<SettingsApplication> implements OnInit {
  databases: SelectItem[];
  application: SettingsApplication;
  constructor(route: ActivatedRoute, router: Router, loaderService: LoaderService,
    dataService: DataService<SettingsApplication>, settingsApplicationService: SettingsApplicationService) {
    super(route, router, dataService, loaderService);
    dataService.endpoint = 'applicationSettings',
    dataService.communication.update$.subscribe(
      result => {
        this.reload();
      });
  }

  ngOnInit() {
    /*this.route.data
      .subscribe((data: { data: PageResponse<SettingApplications> }) => {
          this.applications = data.data.rows,
          this.totalRecords = data.data.total,
          error =>  this.errorMessage = <any>error
    });*/
    this.databases = [];
    this.databases.push({label: 'All databases', value: null});
    this.databases.push({label: 'SIDPROD', value: 'SIDPROD'});
    this.databases.push({label: 'SIDPROD_SIPRE', value: 'SIDPROD_SIPRE'});
    this.databases.push({label: 'SPROD', value: 'SPROD'});
 }

 selectApplication(record: SettingsApplication) {
   this.router.navigate([record.application_id], { relativeTo: this.route });
 }

 newRecord() {
   this.router.navigate(['new'], { relativeTo: this.route });
 }
}
