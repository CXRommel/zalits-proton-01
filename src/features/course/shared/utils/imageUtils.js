import { useState, useCallback } from "react";

const TEAM_POKEMON_ASSIGNMENT = {
  CXRommel: 487, // Giratina - The most badass legendary, Renegade Pokemon that rules the Distortion World
  Ali: 19, // Rattata - Normal type, common low-level Pokemon
  Lenny: 132, // Ditto - Normal type, takes the form of an amorphous purple figure.
  Orlando: 10, // Caterpie - Bug type, one of the most basic Pokemon
  Brandon: 13, // Weedle - Basic bug type, low-level Pokemon
  Alison: 43, // Oddish - Simple grass type, common in early routes
  Vania: 720, // Magikarp - The most humble Pokemon, weak but with potential
};

const POPULAR_POKEMON = [
  1, 25, 6, 9, 3, 94, 150, 448, 445, 144, 145, 146, 249, 250, 384, 383, 382,
  151, 251, 385, 386, 493, 494, 647, 648, 649, 720, 721, 800, 898, 899, 900,
  905, 906, 1010, 1011, 1024,
];

const ANIME_TYPES = [
  "waifu",
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];

export async function getRandomPokemonImage(pokemonId = null) {
  try {
    const id =
      pokemonId ||
      POPULAR_POKEMON[Math.floor(Math.random() * POPULAR_POKEMON.length)];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) throw new Error("Pokemon not found");

    const data = await response.json();

    const imageUrl =
      data.sprites.other["official-artwork"]?.front_default ||
      data.sprites.other.dream_world?.front_default ||
      data.sprites.other["home"]?.front_default ||
      data.sprites.front_default;

    return imageUrl;
  } catch (error) {
    console.warn("Error fetching Pokemon image:", error);
    return getFallbackImage();
  }
}

export async function getRandomAnimeImage(type = null) {
  try {
    const selectedType =
      type || ANIME_TYPES[Math.floor(Math.random() * ANIME_TYPES.length)];
    const response = await fetch(`https://api.waifu.pics/sfw/${selectedType}`);

    if (!response.ok) throw new Error("Anime image not found");

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.warn("Error fetching anime image:", error);
    return getFallbackImage();
  }
}

export function getPixelAvatarImage(seed) {
  return `https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(
    seed
  )}&backgroundColor=transparent`;
}

export function getFallbackImage() {
  return `https://picsum.photos/200/200?random=${Math.floor(
    Math.random() * 1000
  )}`;
}

export async function getFunProfileImage(memberName, preference = "random") {
  const seed = memberName.toLowerCase().replace(/\s+/g, "-");

  try {
    switch (preference) {
      case "pokemon":
        return await getRandomPokemonImage();

      case "anime":
        return await getRandomAnimeImage();

      case "pixel":
        return getPixelAvatarImage(seed);

      case "random":
      default:
        const types = ["pokemon", "anime", "pixel"];
        const randomType = types[Math.floor(Math.random() * types.length)];
        return await getFunProfileImage(memberName, randomType);
    }
  } catch (error) {
    console.warn(`Error getting ${preference} image for ${memberName}:`, error);
    return getPixelAvatarImage(seed);
  }
}

export async function getAssignedPokemonImage(memberName) {
  const pokemonId = TEAM_POKEMON_ASSIGNMENT[memberName];

  if (!pokemonId) {
    console.warn(`No Pokémon assigned for ${memberName}, using fallback`);
    return getRandomPokemonImage();
  }

  return getRandomPokemonImage(pokemonId);
}

export async function assignFunImagesToTeam(members) {
  const updatedMembers = await Promise.all(
    members.map(async (member) => {
      if (member.image && member.image !== null) return member;

      const imageUrl = await getAssignedPokemonImage(member.name);

      return {
        ...member,
        image: imageUrl,
        imageType: "pokemon",
        pokemonId: TEAM_POKEMON_ASSIGNMENT[member.name] || null,
      };
    })
  );

  return updatedMembers;
}

export function useProfileImages(initialMembers) {
  const [members, setMembers] = useState(initialMembers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPokemonImages = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const updatedMembers = await assignFunImagesToTeam(initialMembers);
      setMembers(updatedMembers);
    } catch (err) {
      setError(err.message);
      console.error("Error loading Pokemon images:", err);
    } finally {
      setLoading(false);
    }
  }, [initialMembers]);

  return {
    members,
    loading,
    error,
    loadPokemonImages,
    loadFunImages: loadPokemonImages,
  };
}
