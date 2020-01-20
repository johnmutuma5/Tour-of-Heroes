import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {  Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { HasCanDeactivate } from '../../shared/models';
import { CrisisService } from '../crisis.service';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit, HasCanDeactivate {
  crisis: Crisis;
  editName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.service.getCrisis(params.get('id'));
      })
    ).subscribe((crisis: Crisis) => {
        this.crisis = crisis;
        this.editName = crisis.name;
      });
  }

  goToCrises(crisis: Crisis) {
    this.router.navigate(['..', { crisisId: crisis.id }], { relativeTo: this.activatedRoute });
  }

  cancel() {
    this.goToCrises(this.crisis);
  }

  save() {
    this.crisis.name = this.editName;
    this.goToCrises(this.crisis);
  }

  canDeactivate(): Observable<boolean> | boolean {
    console.clear();
    console.log('Returning dialog observable')
    return this.dialogService.confirm('Discard changes?');
  }

}
