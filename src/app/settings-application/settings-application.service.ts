import { Injectable } from '@angular/core';
import { DataService } from '../common/api';
import { SettingsApplication } from './settings-application';

@Injectable()
export class SettingsApplicationService  extends DataService<SettingsApplication> {
    guardar(record: SettingsApplication) {
      if (record.application_id !== null) {
        return this.update(record);
      } else {
          return this.save(record);
      }
  }
}
