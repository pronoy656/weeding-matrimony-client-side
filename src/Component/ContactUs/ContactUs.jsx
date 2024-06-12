const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mt-10 text-center mb-10">
        Get in touch
      </h1>
      <img
        className="w-full h-[300px] rounded-2xl"
        src="https://i.ibb.co/XVJWXcK/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-dark-blue.jpg"
        alt=""
      />
      <div className="flex justify-between mt-8">
        <div>
          <h1 className="text-2xl font-extrabold mb-3">HOURS OF OPERATION</h1>
          <h1 className="text-lg font-semibold">
            9:00 to 17:00, Mon-Fri (Excluding Holidays)
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold mb-3">PHONE</h1>
          <h1 className="text-lg font-semibold">+31 208915387</h1>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold mb-3">GENERAL INQUIRIES</h1>
          <h1 className="text-lg font-semibold">Info.eu@brixton.com</h1>
        </div>
      </div>
      <h1 className="text-center mt-10 mb-16 text-lg font-semibold">
        Our customer service team is waiting to assist <br /> you Please allow
        up to 2-Business days response time in order for us <br /> to fully
        address your inquiries. You can also check your order status through our
        website.
      </h1>
    </div>
  );
};

export default ContactUs;
