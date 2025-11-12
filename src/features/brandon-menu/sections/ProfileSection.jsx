function ProfileSection({profile, name, lang}) {
  return(
    <div className="text-center place-items-center">
      <h1>{name}</h1>
      <img src={profile.logo.url} alt={`${name} Logo`}/>
      <h2>{profile.slogan[lang]}</h2>
    </div>
  )
}

export default ProfileSection;
