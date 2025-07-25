import React from "react";

const Residence = () => {
  return (
    <div className="residence-route">
      {/* Main Content */}
      <main className="main-content text-start text-[rgb(133,114,114)] px-4 sm:px-6 lg:px-8">
        <section className="residents-section">
          <div className="flex flex-col gap-y-2 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              RESIDENTS EXPERIENCE & BENEFITS
            </h2>
            <p className="text-sm sm:text-base">
              At AssureSpace we prioritize comfort, convenience, and community.
              As a valued resident, you enjoy exclusive benefits that go beyond
              just a place to live.
            </p>
            <p className="text-sm sm:text-base">
              We offer residents access to our managed property portfolio and we
              provide a fair, transparent, and easy renting experience. Here's
              what makes our properties feel like home:
            </p>
          </div>

          <div className="benefits flex flex-col sm:flex-row gap-6 mt-10 mb-8">
            <div className="w-full sm:w-1/3">
              <img
                src="https://img1.wsimg.com/isteam/ip/9db50811-200d-40ec-a93c-497f29ebe8ec/rental-benefits.jpg/:/cr=t:0%25,l:16.75%25,w:66.5%25,h:66.5%25/rs=w:400,cg:true,m/qt=q:25"
                alt="Rental Benefits"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-2/3">
              <div className="benefit-item">
                <h3 className="font-bold text-lg sm:text-xl">
                  💼 Professional Management Team
                </h3>
                <p className="text-sm sm:text-base">
                  Enjoy peace of mind with a dedicated, responsive property
                  management team committed to creating a smooth and respectful
                  living experience.
                </p>
              </div>
              <div className="benefit-item">
                <h3 className="font-bold text-lg sm:text-xl">
                  🧹 Move-In Ready Homes
                </h3>
                <p className="text-sm sm:text-base">
                  Every unit is professionally cleaned and inspected before
                  move-in, ensuring a fresh, welcoming space from day one.
                </p>
              </div>
              <div className="benefit-item">
                <h3 className="font-bold text-lg sm:text-xl">
                  🧾 Simple Lease Renewals
                </h3>
                <p className="text-sm sm:text-base">
                  Flexible renewal options and proactive communication make it
                  easy to continue your stay without stress.
                </p>
              </div>
              <div className="benefit-item">
                <h3 className="font-bold text-lg sm:text-xl">
                  💰 Security Deposit Protection
                </h3>
                <p className="text-sm sm:text-base">
                  Your deposit is safeguarded with clear policies and fair
                  handling. We ensure full transparency and timely processing,
                  giving you confidence and peace of mind.
                </p>
              </div>
              <div className="benefit-item">
                <h3 className="font-bold text-lg sm:text-xl">
                  🤝 Trust and Prompt Response Time
                </h3>
                <p className="text-sm sm:text-base">
                  We believe in building lasting relationships based on trust.
                  Our team is committed to quick, reliable communication and
                  resolving resident concerns with urgency and care.
                </p>
              </div>
              <div className="benefit-item">
                <h3 className="font-bold text-lg sm:text-xl">
                  🏠 Property Inspections
                </h3>
                <p className="text-sm sm:text-base">
                  Routine property inspections help us ensure high living
                  standards, catch maintenance issues early, and maintain the
                  overall quality of your home.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-start text-gray-500 text-sm mt-8 px-4 sm:px-6 lg:px-8 py-4">
        <p>COPYRIGHT © 2025 ASSURESPACE - ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Residence;
