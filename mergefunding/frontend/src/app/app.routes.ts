import { Routes } from "@angular/router";
import { BlankComponent } from "./layouts/blank/blank.component";
import { FullComponent } from "./layouts/full/full.component";
import { AppSalesOverviewComponent } from "./components/sales-overview/sales-overview.component";
import { AppDailyActivitiesComponent } from "./components/daily-activities/daily-activities.component";

export const routes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "",
        redirectTo: "/",
        pathMatch: "full",
      },
      {
        path: "",
        loadChildren: () =>
          import("./pages/authentication/authentication.routes").then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: "home",
    component: FullComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/pages.routes").then((m) => m.PagesRoutes),
      },
      {
        path: "fund",
        component: AppSalesOverviewComponent,
      },
      {
        path: "service",
        component: AppDailyActivitiesComponent,
      },
      {
        path: "ui-components",
        loadChildren: () =>
          import("./pages/ui-components/ui-components.routes").then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./pages/pages.routes").then((m) => m.PagesRoutes),
      },

      {
        path: "extra",
        loadChildren: () =>
          import("./pages/extra/extra.routes").then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "authentication/error",
  },
];
