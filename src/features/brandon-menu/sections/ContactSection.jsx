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
  return (
    <div className=" w-full max-w-2xl mx-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md p-6 sm:p-8">
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
        <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <img src="https://pngimg.com/uploads/instagram/instagram_PNG10.png" alt="instagram logo" className="w-8 h-8 object-contain"/>
        </a>

        <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" alt="facebook logo" className="w-8 h-8 object-contain"/>
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
