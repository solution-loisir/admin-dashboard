module.exports = string => {
  let level = "niveau-default";

  if(string.includes("Niveau 1")) {
    level = "niveau1"; 
  } else if(string.includes("Niveau 2")) {
    level = "niveau2";
  } else if(string.includes("Niveau 3")) {
    level = "niveau3";
  } else if(string.includes("Niveau 4")) {
    level = "niveau4";
  } else if(string.includes("Niveau 5")) {
    level = "niveau5";
  } else if(string.includes("initiation")) {
    level = "initiation";
  }

  return level;
} 