import { AppProps } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div class="container mx-auto">
      <Nav />
      <div className="container mx-auto">
        <Component />
      </div>
      <Footer />
    </div>
  );
}
