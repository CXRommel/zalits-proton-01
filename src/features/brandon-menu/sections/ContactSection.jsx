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
    <div>
      <h2>{langContact[lang]}</h2>
      <p>Email: {contact.email}</p>
      <p>{langPhone[lang]}: {contact.phone}</p>
      <h2>{langSocialMedia[lang]}</h2>
      <a href={contact.social.instagram} target="_blank">
        <img
          src="https://pngimg.com/uploads/instagram/instagram_PNG10.png"
          alt="instagram logo"
        />
      </a>

      <a href={contact.social.facebook} target="_blank">
        <img
          src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png"
          alt="facebook logo"
        />
      </a>
    </div>
  );
}

export default ContactSection;
