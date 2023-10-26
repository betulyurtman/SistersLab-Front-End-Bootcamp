const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
  ];
  
//Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
//Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.
const waterPokemons = pokemons.filter(pokemon => pokemon.type === 'Water');

const waterPokemonCount = waterPokemons.length;

const waterPokemonNames = waterPokemons.map(pokemon => pokemon.name);

console.log(`"Water" türündeki Pokemon sayısı: ${waterPokemonCount}`);
console.log(`"Water" türündeki Pokemon isimleri: ${waterPokemonNames}`);

//Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.
const doubledExperience = pokemons.map(pokemon => ({
  name: pokemon.name,
  experience: pokemon.experience * 2,
}));

console.log(doubledExperience);

//Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
// Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
// Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.

// const waterPokemons = pokemons.filter(pokemon => pokemon.type === 'Water'); Bu kısımda waterPokemons dizisini kullanıyoruz.

// "Water" türündeki Pokemonlar deneyim puanı en az 60 mı?
const allWaterMoreThan60 = waterPokemons.every(pokemon => pokemon.experience >= 60);

// "Fire" türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?
const someFireMoreThan70 = pokemons.some(pokemon => pokemon.type === 'Fire' && pokemon.experience >= 70);

console.log("Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?", allWaterMoreThan60);
console.log("'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?", someFireMoreThan70);

//Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
// kullanarak hesaplamak istiyorsunuz.

const totalElectricExperience = pokemons
.filter(pokemon => pokemon.type === 'Electric')
.reduce((total, pokemon) => total + pokemon.experience, 0);

console.log("Electric türündeki Pokemon'ların toplam deneyim puanı: " + totalElectricExperience);

//Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
const typeAverages = pokemons.reduce((averages, pokemon) => {
  if (!averages[pokemon.type]) {
    averages[pokemon.type] = { totalExperience: 0, count: 0 };
  }
  averages[pokemon.type].totalExperience += pokemon.experience;
  averages[pokemon.type].count += 1;
  return averages;
}, {});

for (const type in typeAverages) {
  typeAverages[type].averageExperience = typeAverages[type].totalExperience / typeAverages[type].count;
}

console.log(typeAverages);