import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { LinkService } from "../../services/link.service";
import { ActivatedRoute } from "@angular/router";
import { faDollarSign, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons/faHashtag";
import { User } from "../../interfaces/user";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatSort, Sort } from "@angular/material/sort";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit, AfterViewInit {
  columns: string[] = ['id', 'code', 'count', 'revenue'];
  dataSource = new MatTableDataSource();
  userID!: number;
  dollarIcon = faDollarSign;
  count = faHashtag;
  code = faQrcode;
  user: User | undefined;

  constructor(private linkService: LinkService, private route: ActivatedRoute, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['id'];
    this.linkService.all(this.userID).subscribe({
      next: value => {this.dataSource.data = value;}
    });
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce( `Sorted ${sortState.direction}ending` ).then();
    } else {
      this._liveAnnouncer.announce( 'Sorting cleared' ).then();
    }
  }

  sum(orders: any[]): number {
    return orders.reduce((total, order) => total + order.total, 0);
  }

}
