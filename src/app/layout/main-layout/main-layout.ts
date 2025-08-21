import { Component,OnDestroy } from '@angular/core';
import { Footer } from '../components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Navbar } from '../components/navbar/navbar';
@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,Footer,Navbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout implements OnDestroy {

 showAside = false;
  private sub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const deepest = this.getDeepest(this.route);
        this.showAside = !!deepest.snapshot.data['showAside'];
      });
  }

  private getDeepest(r: ActivatedRoute): ActivatedRoute {
    while (r.firstChild) r = r.firstChild;
    return r;
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }
}
