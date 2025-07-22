"use client";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <div className="border-l-4 border-red-500 pl-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About us.</h2>
            <p className="text-red-600 font-semibold mt-1">who we are</p>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Advice me cousin an spring of needed. Tell use paid law ever yet new.
            Meant to learn of vexed if style allow he there. Tiled man stand tears
            ten joy there terms any widen. Procuring continued suspicion its ten.
            Pursuit brother are had fifteen distant has. Early had add equal china
            quiet visit. Appear an manner as no limits either praise in. In in written
            on charmed justice is amiable farther besides. Law insensible middletons
            unsatiable for apartments boy delightful unreserved.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src="/assets/trialabout.jpg"
            alt="About us image"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Bottom 3 Columns */}
      <div className=" grid md:grid-cols-3 gap-10 mt-16">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Who we are</h3>
          <p className="text-gray-600 text-sm">
            Supplied directly pleasant we ignorant ecstatic of jointure so if. These spoke house of we. Ask put yet excuse person see change.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Our philosophy</h3>
          <p className="text-gray-600 text-sm">
            Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">How we work</h3>
          <p className="text-gray-600 text-sm">
            Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
