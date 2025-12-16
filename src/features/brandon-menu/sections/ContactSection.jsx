import React from 'react';

const langContact = {
  "en": "Contact",
  "es": "Contacto"
}

const langPhone = {
  "en": "Phone",
  "es": "Teléfono"
}

const langSocialMedia = {
  "en": "Social Media",
  "es": "Redes sociales"
}

function ContactSection({ contact, lang }) {
  const { social } = contact;

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md p-6 sm:p-8">

      <h2 className="text-2xl font-bold text-white mb-4">
        {langContact[lang]}
      </h2>

      <div className="space-y-2">
        <p className="text-base">
          <span className="font-medium text-white">Email: </span>
          <span className="text-gray-300">{contact.email}</span>
        </p>
        <p className="text-base">
          <span className="font-medium text-white">{langPhone[lang]}: </span>
          <span className="text-gray-300">{contact.phone}</span>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        {langSocialMedia[lang]}
      </h2>

      <div className="flex items-center gap-5">
        {Object.entries(social).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" title={platform.charAt(0).toUpperCase() + platform.slice(1)}>
            <img src={`https://www.google.com/s2/favicons?domain=${platform}.com&sz=128`} alt={`${platform} logo`} className="w-8 h-8 object-contain rounded-lg"/>
          </a>
        ))}
      </div>

    </div>
  );
}

export default ContactSection;
