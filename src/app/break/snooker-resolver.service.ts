import { SnookerDataService } from './snooker-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Break } from './break.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SnookerResolver implements Resolve< Break > {
    constructor(private snookerService: SnookerDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Break> {
        return this.snookerService.getBreak(route.params['id']);
    }
}
