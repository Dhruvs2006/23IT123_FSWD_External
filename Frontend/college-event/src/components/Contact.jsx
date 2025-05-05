import React from "react";
import { MapPin, Phone, Mail, Clock, Brush } from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: "123 Business Avenue, Suite 100, San Francisco, CA 94107",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "bookstore@company.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Monday - Friday: 9AM to 5PM",
    },
  ];

  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-primary text-center">
            Get In Touch
          </h3>
          <div className="flex justify-center">
            <Link to="/">
              <button className="btn btn-soft btn-primary">Go To Home</button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {contact.icon}
                </div>
                <div>
                  <h4 className="font-medium text-lg">{contact.title}</h4>
                  <p className="text-gray-600">{contact.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-20">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default ContactInfo;
