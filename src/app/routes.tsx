import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ProductsPage } from "./pages/Products";
import { SustainabilityPage } from "./pages/Sustainability";
import { CertificationsPage } from "./pages/Certifications";
import { ContactPage } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "products", Component: ProductsPage },
      { path: "sustainability", Component: SustainabilityPage },
      { path: "certifications", Component: CertificationsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
