import { FC } from "react";

const Contact: FC<{ profile: any }> = ({ profile }) => {
  if (!profile.contact || profile.contact.length === 0) {
    return (
      <div id="contact" className="section flex items-center justify-center text-lg font-medium text-gray-600">
        No contact information available.
      </div>
    );
  }

  const contactInfo = profile.contact[0];

  const contactLinks = [
    { label: "Email", url: `mailto:${contactInfo.email}`, value: contactInfo.email },
    { label: "LinkedIn", url: contactInfo.linkedIn, value: contactInfo.linkedIn },
    { label: "Twitter/X", url: contactInfo.twitter, value: contactInfo.twitter },
    { label: "GitHub", url: contactInfo.github, value: contactInfo.github },
    { label: "Instagram", url: contactInfo.instagram, value: contactInfo.instagram },
    { label: "Dribbble", url: contactInfo.dribble, value: contactInfo.dribble },
    { label: "Behance", url: contactInfo.behance, value: contactInfo.behance }
  ].filter(link => link.value); // Remove empty values

  return (
    <div id="contact" className="section w-full flex flex-col md:flex-row items-start md:px-5 md:py-5 md:gap-20">
      {/* Title */}
      <h2 className="text-gray-500 text-sm mb-4">Contact</h2>

      {/* Contact List */}
      <div className="grid items-start grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-12 text-sm max-w-2xl">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:underline transition duration-200"
          >
            {contact.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
