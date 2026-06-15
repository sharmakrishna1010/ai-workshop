import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Form from "./components/form/Form";

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#FDFDFD] scroll-smooth">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 py-8 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[65%] flex flex-col gap-12">
          <Hero />
        </div>

        <div className="w-full lg:w-[35%] relative">
          <div className="sticky top-10">
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}
