import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Nav } from '../components/Nav.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="my-6 text-3xl">
        Welcome to Rosie Davies
      </h1>
      <p class="my-6">Fresh ideas everyday</p>
    </div>
    </>
  );
}
