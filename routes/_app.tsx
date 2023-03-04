import { AppProps, Handlers } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import { getCookies } from "std/http/cookie.ts";

export const handler: Handlers = {
    GET(req, ctx){
        const cookies = getCookies(req.headers); 
        return ctx.render!({isAllowed: cookies.auth === 'bar'})
    }
}

export default function App({ Component }: AppProps) { 
    return (
    <>
      <Nav />
      <div className="container mx-auto">
        <Component />
      </div>
      <Footer/>
      {/* You currently {data.isAllowed ? "are" : "are not"} logged in. */}
    </>
  );
}