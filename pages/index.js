import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className="text-1xl font-bold underline">Tailwind</h1>
      <div className="container mx-auto p-4 ">Container</div>
      <div className="columns-3">
        <div className="w-full ">One</div>
        <div className="w-full">two</div>
        <div className="w-full">three</div>
      </div>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="box-content h-30 w-24 p-4 border-4">Box Content</div>

      <div className="flex items-center">
        <p>Img</p>
        <div>
          <strong>wwer</strong>
          <span>fdf</span>
        </div>
      </div>
      <div>
        <img className="float-left sm:float-right" src="/3.avif" />
        <p>
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
      </div>
      <div>
        <img
          className="object-none object-center hover:object-left h-48 w-96 "
          src="/3.avif"
        />
      </div>
      <div className="flex ">
        <img
          className="object-none object-center hover:object-left h-48 w-96 "
          src="/3.avif"
        />
        <img
          className="object-none object-center hover:object-left h-48 w-96 "
          src="/3.avif"
        />
        <img
          className="object-none object-center hover:object-left h-48 w-96 "
          src="/3.avif"
        />
        <img
          className="object-none object-center hover:object-left h-48 w-96 "
          src="/3.avif"
        />
      </div>
    </>
  );
}
