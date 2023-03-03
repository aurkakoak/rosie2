import { AppProps } from "$fresh/server.ts";
import {Nav} from "../components/Nav.tsx";
import { getCookies } from "std/http/cookie.ts";

export const handler: Handlers = {
    GET(req, ctx){
        const cookies = getCookies(req.headers); 
        return ctx.render!({isAllowed: cookies.auth === 'bar'})
    }
}

export default function App({ Component, ...rest }: AppProps) {
    console.log(rest); 
    return (
    <>
      <Nav />
      <Component />
      {/* You currently {data.isAllowed ? "are" : "are not"} logged in. */}
    </>
  );
}