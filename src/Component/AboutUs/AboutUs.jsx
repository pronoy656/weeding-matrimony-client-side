const AboutUs = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center mt-16 text-3xl font-extrabold">
        About Our Website
      </h1>
      <div className="flex space-x-14 mt-9">
        <div className="w-1/2 border grid grid-cols-3">
          <img
            className="h-36"
            src="https://i.ibb.co/YX6TMZ3/23577-istockgetty-images-plusnadtochiy-1.jpg"
            alt=""
          />
          <img
            className="h-36 w-60"
            src="https://i.ibb.co/2cy0NhJ/images-3.jpg"
            alt=""
          />
          <img
            className="h-36"
            src="https://i.ibb.co/tcqt5pb/images-2.jpg"
            alt=""
          />
          <img
            className="h-36 w-60"
            src="https://i.ibb.co/Qc0GMrH/wedd.jpg"
            alt=""
          />
          <img
            className="h-36"
            src="https://i.ibb.co/k1MVC3H/couple-holding-hands-with-basket-flowers.jpg"
            alt=""
          />
          <img
            className="h-36"
            src="https://i.ibb.co/Yjy4L6v/Adobe-Stock-119450625-Preview.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 border">
          <h1 className="text-center text-2xl font-bold mb-3">
            About Our Website
          </h1>
          <h1 className="text-center text-xl font-bold">
            About Our Wedding Matrimony
          </h1>
          <h1 className="text-lg font-semibold mt-6">
            "Are you searching for love and a lasting commitment? At [Your
            Website Name], we understand the importance of finding that perfect
            partner who shares your values and dreams. We've created a welcoming
            platform that fosters genuine connections between like-minded
            individuals seeking marriage. With our user-friendly interface,
            advanced search features, and commitment to security, we empower you
            to take control of your love life and embark on a fulfilling journey
            towards happily ever after."
          </h1>
        </div>
      </div>
      <h1 className="text-3xl font-extrabold text-center mt-14">
        Feel Free to Ask Question
      </h1>
      <div className="collapse collapse-arrow bg-base-200 mt-10">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          I'm on your matrimonial website but I'm feeling overwhelmed by the
          number of profiles. How can I narrow down my search and find the right
          person?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Utilize our advanced search filters to narrow down results based on
            specific criteria like age, location, education, religion, and
            lifestyle preferences.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          I'm new to online dating and a bit nervous. Is your matrimony website
          safe and secure?
        </div>
        <div className="collapse-content">
          <p>
            We understand your concern! At [Your Website Name], your safety is
            our top priority. We use advanced security measures to protect your
            information. All profiles are screened, and we have a team dedicated
            to monitoring activity and removing any suspicious accounts. You can
            also control who sees your profile and information, and we have
            resources available to help you practice safe online dating.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          I've been on other dating sites and haven't had much luck. What makes
          your matrimony website different
        </div>
        <div className="collapse-content">
          <p>
            focuses specifically on users seeking marriage-minded relationships.
            This means our members are serious about finding a lifelong partner.
            We also go beyond just basic profiles by offering features like
            personality tests and compatibility matching algorithms to help you
            connect with those who share your values and goals for the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
