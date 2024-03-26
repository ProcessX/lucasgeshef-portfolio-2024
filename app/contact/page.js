import React from "react";

function Contact() {
  return (
    <main className="bg-light-50 text-dark-900 h-[100vh]">
      <section>
        <div className="containerRaw pt-[160px] desktop:pt-[192px]">
          <h1 className="c-font-4xl text-right">
            <span className="block">Want to reach out?</span>
            <span className="block">Find me here</span>
          </h1>
        </div>
        <div className="containerRaw">
          <span>Contact button</span>
        </div>
        <div className="containerRaw">
          <p className="c-font-base">Or check my socials</p>
          <ul>
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
