import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { LinkService } from "../../services/link.service";
import { ActivatedRoute } from "@angular/router";
import { faDollarSign, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons/faHashtag";
import { User } from "../../interfaces/user";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  columns: string[] = ['ID', 'code', 'count', 'revenue'];
  dataSource = new MatTableDataSource();
  userID!: number;
  dollarIcon = faDollarSign;
  count = faHashtag;
  code = faQrcode;
  user: User | undefined;

  constructor(private linkService: LinkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['id'];
    this.linkService.all(this.userID).subscribe({
      next: value => {this.dataSource.data = value;}
    });
  }

  sum(orders: any[]): number {
    return orders.reduce((total, order) => total + order.total, 0);
  }

}
