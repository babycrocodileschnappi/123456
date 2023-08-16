export const typeColors: { [key: string]: string } = {
    fire: 'bg-red-300',
    grass: 'bg-green-300',
    electric: 'bg-yellow-300',
    water: 'bg-blue-300',
    ground: 'bg-yellow-200',
    rock: 'bg-yellow-200',
    fairy: 'bg-purple-200',
    poison: 'bg-purple-300',
    bug: 'bg-green-400',
    dragon: 'bg-indigo-300',
    psychic: 'bg-pink-200',
    flying: 'bg-blue-200',
    fighting: 'bg-red-200',
    normal: 'bg-gray-200',
    ghost: 'bg-indigo-400',
    steel: 'bg-gray-300',
    ice: 'bg-blue-100',
    dark: 'bg-indigo-500',
};

export const getPokemonBackgroundColor = (type: string) => {
    if (type && type.length > 0) {
        const color = typeColors[type];
        return color || 'bg-gray-300'; // 默认灰色背景
    }
    return 'bg-gray-300'; // 默认灰色背景
};
