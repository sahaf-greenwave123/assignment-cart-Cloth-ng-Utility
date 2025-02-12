import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Welcome to <span className="font-bold">Clothing & Utility Store</span>,
          your one-stop destination for high-quality clothing and everyday
          utility items. We are passionate about providing our customers with
          stylish, comfortable, and affordable products that cater to their
          lifestyle needs.
        </p>
        <p className="text-lg mb-6">
          Our mission is to make shopping a seamless and enjoyable experience.
          Whether you're looking for trendy apparel, essential utilities, or
          unique gifts, we've got you covered. We carefully curate our collection
          to ensure that every item meets our standards of quality and
          durability.
        </p>
        <p className="text-lg mb-6">
          At <span className="font-bold">Clothing & Utility Store</span>, we
          believe in sustainability and ethical practices. We work closely with
          our suppliers to ensure that our products are sourced responsibly and
          produced with minimal environmental impact.
        </p>
        <p className="text-lg mb-6">
          Thank you for choosing us. We are committed to delivering exceptional
          customer service and creating a positive shopping experience for you.
          If you have any questions or feedback, feel free to reach out to us!
        </p>

        {/* Meet Our Team Section */}
        <section id="meetup" className="meetone mt-12">
          <h1 className="text-4xl font-bold text-center mb-8">MEET OUR TEAM</h1>

          <div className="meetourteam grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold">Mr. Ermin Murati</h4>
              <h5 className="text-lg text-blue-600 font-medium">CEO</h5>
              <p className="text-lg text-yellow-600 mb-4">
                erminmurati@clothing-utility-store.com
              </p>
              <p className="text-lg">
                The main objective set for a CEO is to ensure the sustainability,
                profitability, and development of the company, as well as setting
                and giving the main strategic orientations of the company.
              </p>

              <h4 className="text-2xl font-semibold mt-8">Ms. Emily Carter</h4>
              <h5 className="text-lg text-blue-600 font-medium">Head of Fashion Design</h5>
              <p className="text-lg text-yellow-600 mb-4">
                emilycarter@clothing-utility-store.com
              </p>
              <p className="text-lg">
                With over a decade of experience in the fashion industry, Emily
                leads our design team to create trendy and timeless clothing
                collections that resonate with our customers.
              </p>

              <h4 className="text-2xl font-semibold mt-8">Mr. Akhil Roy</h4>
              <h5 className="text-lg text-blue-600 font-medium">Financial Adviser</h5>
              <p className="text-lg text-yellow-600 mb-4">
                akhilroy@clothing-utility-store.com
              </p>
              <p className="text-lg">
                They help clients manage their money. Often, this means managing
                a client's investment portfolio and providing consulting
                services.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold">Mr. Franck Bloch</h4>
              <h5 className="text-lg text-blue-600 font-medium">CFO</h5>
              <p className="text-lg text-yellow-600 mb-4">
                franckbloch@clothing-utility-store.com
              </p>
              <p className="text-lg">
                Attached to the CEO, a senior executive responsible for managing
                the financials of the company, investors, and clients.
              </p>

              <h4 className="text-2xl font-semibold mt-8">Ms. Sarah Johnson</h4>
              <h5 className="text-lg text-blue-600 font-medium">Head of Customer Experience</h5>
              <p className="text-lg text-yellow-600 mb-4">
                sarahjohnson@clothing-utility-store.com
              </p>
              <p className="text-lg">
                Sarah ensures that every customer has a seamless and enjoyable
                shopping experience. She leads our customer support and feedback
                teams to maintain high satisfaction levels.
              </p>

              <h4 className="text-2xl font-semibold mt-8">Mr. Joseph Zeidan</h4>
              <h5 className="text-lg text-blue-600 font-medium">Consulting Business</h5>
              <p className="text-lg text-yellow-600 mb-4">
                josephzeidan@clothing-utility-store.com
              </p>
              <p className="text-lg">
                Expert in his field, offers recommendations to the client company
                to transform a functional or operational direction or a business
                process.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold">Ms. Laura Martinez</h4>
              <h5 className="text-lg text-blue-600 font-medium">Head of Product Sourcing</h5>
              <p className="text-lg text-yellow-600 mb-4">
                lauramartinez@clothing-utility-store.com
              </p>
              <p className="text-lg">
                Laura is responsible for sourcing high-quality materials and
                products from ethical suppliers worldwide. She ensures that our
                products meet our sustainability and quality standards.
              </p>

              <h4 className="text-2xl font-semibold mt-8">Mr. David Kim</h4>
              <h5 className="text-lg text-blue-600 font-medium">Head of Marketing</h5>
              <p className="text-lg text-yellow-600 mb-4">
                davidkim@clothing-utility-store.com
              </p>
              <p className="text-lg">
                David leads our marketing efforts, creating campaigns that
                connect with our audience and drive brand awareness. He is
                passionate about storytelling and digital innovation.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold">Ms. Priya Sharma</h4>
              <h5 className="text-lg text-blue-600 font-medium">Sustainability Officer</h5>
              <p className="text-lg text-yellow-600 mb-4">
                priyasharma@clothing-utility-store.com
              </p>
              <p className="text-lg">
                Priya ensures that our operations and products align with our
                commitment to sustainability. She works closely with suppliers
                and partners to reduce our environmental footprint.
              </p>

              <h4 className="text-2xl font-semibold mt-8">Izabel Teles</h4>
              <h5 className="text-lg text-blue-600 font-medium">
                Secretary & Executive Assistant
              </h5>
              <p className="text-lg text-yellow-600 mb-4">
                izabelteles@clothing-utility-store.com
              </p>
              <p className="text-lg">
                Accountant & tax advisor, a financial professional who reviews
                and analyses financial records and keeps track of a company's or
                individual's income, expenditures, and liabilities with a decade
                of experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;