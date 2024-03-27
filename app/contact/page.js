import React from "react";
import "./contact.css";
import Button from "@/components/button/Button";

function Contact() {
  return (
    <main className="bg-light-50 text-dark-900 h-[100vh]">
      <section className="flex flex-col h-[100vh] justify-between pb-12">
        <div className="containerRaw pt-[160px] w-full">
          <h1 className="c-font-4xl text-right">
            <span className="block">Want to reach out?</span>
            <span className="block">Find me here</span>
          </h1>
          <div className="inline-block float-end pt-16">
            <Button label="contact@lucasgeshef.be" />
          </div>
        </div>
        <div className="containerRaw w-full">
          <p className="c-font-base text-right">Or check my socials</p>
          <ul className="flex justify-end">
            <li>
              <span>Social icon</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Contact;
