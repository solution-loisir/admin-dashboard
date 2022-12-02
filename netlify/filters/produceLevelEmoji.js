module.exports = (level) => {
  let emoji = "";
  switch(level) {
    case "initiation":
        emoji = "🐢";
        break;
    case "niveau1":
        emoji = "🐟";
        break;
    case "niveau2":
        emoji = "🐳";
        break;
    case "niveau3":
        emoji = "🐸";
        break;
    case "niveau4":
        emoji = "🦈";
        break;
    case "niveau5":
        emoji = "🐬";
        break;
    default: 
        // Default `emoji` is an empty string.
        emoji;  
  }
  return emoji;
}