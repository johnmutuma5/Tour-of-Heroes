import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[];
  previousCrisisId: number;

  constructor(private crisisService: CrisisService,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCrises();
    this.previousCrisisId = +this.currentRoute.snapshot.paramMap.get('crisisId');
  }

  isPrevioslyViewedCrisis(crisis: Crisis) {
    return this.previousCrisisId === crisis.id;
  }

  getCrises(): void {
    this.crisisService.getCrises()
        .subscribe(crises => this.crises = crises);
  }
}
