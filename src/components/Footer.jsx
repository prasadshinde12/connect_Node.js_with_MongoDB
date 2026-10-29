export default function Footer() {
  const services = [
    "Electricity",
    "Land Line",
    "Piped Gas",
    "eChallan",
    "Cable TV",
  ];

  const footerColumns = [
    "Services",
    "Customer Support",
    "About Us",
    "Shopping",
    "Policies",
    "Follow Us",
  ];

  return (
    <>
      {/* Footer */}
      <footer className="bg-black pt-4 pb-4 text-white">
        <div className="w-sm lg:w-6xl mx-auto pt-2 pb-2 grid grid-cols-2 lg:grid-cols-6">
          {footerColumns.map((heading) => (
            <div key={heading} className="p-2">
              <h2 className="text-2xl pt-2 pb-2">{heading}</h2>

              <ul>
                {services.map((service) => (
                  <li key={service}>
                    <a href="#contact" className="hover:text-gray-400">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Copyright */}
      <div
        id="contact"
        className="text-center pt-5 pb-5 bg-gray-500 text-xl text-white"
      >
        &copy; 2026 MET-CDAC NASHIK <i className="fa-brands fa-instagram"></i>
      </div>
    </>
  );
}
