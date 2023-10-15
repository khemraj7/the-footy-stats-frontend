import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  public isCollapsed = true;
  showLoginButton: boolean = true;
  isMobile: boolean = false

  constructor(private router: Router, private route: ActivatedRoute,
    private commonService: CommonService, private renderer: Renderer2, private elementRef: ElementRef) { }


  ngOnInit(): void {
    this.checkScreenSize()
    this.commonService.dashboardActive.subscribe((res: any) => {
      this.exclusive = res
    })

    let userData = localStorage.getItem(JSON.parse('UserData'));
    console.log('User data:', userData);

    if (userData == null) {
      this.showLoginButton = true;
    }
  }

  // ngOnDestroy(): void {
  //   this.commonService.dashboardActive.next(false);
  // }


  register() {
    this.router.navigateByUrl('/register');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  // stats() {
  //   this.router.navigateByUrl('/stats')
  // }

  // matches() {
  //   this.router.navigateByUrl('/matches')
  // }

  // leagues() {
  //   // this.router.navigateByUrl('/leagues')
  // }

  // predictions() {
  //   this.router.navigateByUrl('/predictions')
  // }

  // home() {
  //   this.router.navigateByUrl('/home');

  // }

  goToHome() {
    this.router.navigateByUrl('/home');

  }

  logout() {
    this.commonService.dashboardActive.next(false);
    localStorage.removeItem('Token');
    localStorage.removeItem('registerResponse');
    localStorage.removeItem('UserData');
    this.router.navigateByUrl('/home');
    this.showLoginButton = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  checkScreenSize() {
    console.log('window.innerWidth', window.innerWidth)
    if (window.innerWidth < 992) { // Adjust the breakpoint as needed
      this.isMobile = true;
    } else {
      this.isMobile = false;
      // Close the mobile menu by removing the 'show' class (if it's open)
      this.renderer.removeClass(this.elementRef.nativeElement.querySelector('#navbarNav'), 'show');
    }
  }

  closeNavbar() {
    if (this.isMobile) {
      const navbarButton = this.elementRef.nativeElement.querySelector('#navbarButton');
      if (navbarButton) {
        navbarButton.click();
      }
    }
  }
}
