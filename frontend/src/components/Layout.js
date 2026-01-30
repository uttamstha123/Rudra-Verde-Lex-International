import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div data-testid="layout-wrapper" className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};
