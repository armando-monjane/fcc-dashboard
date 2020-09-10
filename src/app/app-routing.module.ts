import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ProductsListComponent } from './components/pages/products-list/products-list.component'
import { CategoriesListComponent } from "./components/pages/categories-list/categories-list.component";
import { AddCategoryComponent } from './components/pages/add-category/add-category.component';

const routes: Routes = [

{path: '', component: HomeComponent},
{path: 'menu-catalogue', component: MenuCatalogueComponent},
{path: 'menu-list', component: MenuListComponent},
{path: 'menu-grid', component: MenuGridComponent},
{path: 'add-product', component: AddProductComponent},
{path: 'product-detail', component: ProductDetailComponent},
{path: 'order', component: OrdersComponent},
{path: 'customer-review', component: CustomersReviewComponent},
{path: 'customer-list', component: CustomersListComponent},
{path: 'social-activity', component: SocialActivityComponent},
{path: 'sales', component: SalesComponent},
{path: 'pagination', component: PaginationComponent},
{path: 'rating', component: RatingComponent},
{path: 'tour', component: TourComponent},
{path: 'cropper', component: CropperComponent},
{path: 'range-sliders', component: RangeSliderComponent},
{path: 'form-elements', component: FormElementsComponent},
{path: 'form-layouts', component: FormLayoutsComponent},
{path: 'form-validation', component: FormValidationComponent},
{path: 'form-wizard', component: FormWizardComponent},
{path: 'morris-chart', component: MorrisChartComponent},
{path: 'materialize', component: MaterializeComponent},
{path: 'web-analytics', component: WebAnalyticsComponent},
{path: 'stock-management', component: StockManagementComponent},
{path: 'client-management', component: ClientManagementComponent},
{path: 'default-login', component: DefaultLoginComponent},
{path: 'modal-login', component: ModalLoginComponent},
{path: 'default-register', component: DefaultRegisterComponent},
{path: 'modal-register', component: ModalRegisterComponent},
{path: 'lock-screen', component: LockScreenComponent},
{path: 'coming-soon', component: ComingSoonComponent},
{path: 'error-404', component: ErrorComponent},
{path: 'faq', component: FaqComponent},
{path: 'user-profile', component: UserProfileComponent},
{path: 'chat', component: ChatComponent},
{path: 'email', component: EmailComponent},
{path: 'to-do-list', component: TodoListComponent},
{path: 'products-list', component: ProductsListComponent},
{path: 'categories-list', component: CategoriesListComponent},
{path: 'add-category', component: AddCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
