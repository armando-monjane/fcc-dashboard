import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { SideNavbarComponent } from './components/layouts/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './components/layouts/top-navbar/top-navbar.component';
import { QuickBarComponent } from './components/layouts/quick-bar/quick-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuCatalogueComponent } from './components/pages/menu-catalogue/menu-catalogue.component';
import { MenuListComponent } from './components/pages/menu-list/menu-list.component';
import { MenuGridComponent } from './components/pages/menu-grid/menu-grid.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { CustomersReviewComponent } from './components/pages/customers-review/customers-review.component';
import { CustomersListComponent } from './components/pages/customers-list/customers-list.component';
import { SocialActivityComponent } from './components/pages/social-activity/social-activity.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { PaginationComponent } from './components/pages/pagination/pagination.component';
import { RatingComponent } from './components/pages/rating/rating.component';
import { TourComponent } from './components/pages/tour/tour.component';
import { CropperComponent } from './components/pages/cropper/cropper.component';
import { RangeSliderComponent } from './components/pages/range-slider/range-slider.component';
import { FormElementsComponent } from './components/pages/form-elements/form-elements.component';
import { FormLayoutsComponent } from './components/pages/form-layouts/form-layouts.component';
import { FormValidationComponent } from './components/pages/form-validation/form-validation.component';
import { FormWizardComponent } from './components/pages/form-wizard/form-wizard.component';
import { MorrisChartComponent } from './components/pages/morris-chart/morris-chart.component';
import { MaterializeComponent } from './components/pages/materialize/materialize.component';
import { WebAnalyticsComponent } from './components/pages/web-analytics/web-analytics.component';
import { StockManagementComponent } from './components/pages/stock-management/stock-management.component';
import { ClientManagementComponent } from './components/pages/client-management/client-management.component';
import { DefaultLoginComponent } from './components/pages/default-login/default-login.component';
import { ModalLoginComponent } from './components/pages/modal-login/modal-login.component';
import { DefaultRegisterComponent } from './components/pages/default-register/default-register.component';
import { ModalRegisterComponent } from './components/pages/modal-register/modal-register.component';
import { LockScreenComponent } from './components/pages/lock-screen/lock-screen.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { EmailComponent } from './components/pages/email/email.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { CategoriesListComponent } from "./components/pages/categories-list/categories-list.component";
import { AddCategoryComponent } from './components/pages/add-category/add-category.component';

import { ToastrService } from "./shared/toastr.service";

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    SideNavbarComponent,
    TopNavbarComponent,
    QuickBarComponent,
    HomeComponent,
    MenuCatalogueComponent,
    MenuListComponent,
    MenuGridComponent,
    AddProductComponent,
    ProductDetailComponent,
    OrdersComponent,
    CustomersReviewComponent,
    CustomersListComponent,
    SocialActivityComponent,
    SalesComponent,
    PaginationComponent,
    RatingComponent,
    TourComponent,
    CropperComponent,
    RangeSliderComponent,
    FormElementsComponent,
    FormLayoutsComponent,
    FormValidationComponent,
    FormWizardComponent,
    MorrisChartComponent,
    MaterializeComponent,
    WebAnalyticsComponent,
    StockManagementComponent,
    ClientManagementComponent,
    DefaultLoginComponent,
    ModalLoginComponent,
    DefaultRegisterComponent,
    ModalRegisterComponent,
    LockScreenComponent,
    ComingSoonComponent,
    ErrorComponent,
    FaqComponent,
    UserProfileComponent,
    ChatComponent,
    EmailComponent,
    TodoListComponent,
    ProductsListComponent,
    CategoriesListComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
