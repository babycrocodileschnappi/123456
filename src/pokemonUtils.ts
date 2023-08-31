export const typeColors: { [key: string]: string } = {
  fire: 'red.300',
  grass: 'green.300',
  electric: 'yellow.300',
  water: 'blue.300',
  ground: 'yellow.200',
  rock: 'orange.200',
  fairy: 'purple.200',
  poison: 'purple.300',
  bug: 'teal.300',
  dragon: 'cyan.300',
  psychic: 'pink.200',
  flying: 'blue.200',
  fighting: 'red.200',
  normal: 'gray.200',
  ghost: 'cyan.400',
  steel: 'gray.300',
  ice: 'blue.100',
  dark: 'cyan.500'
}

export const getPokemonBackgroundColor = (type: string) => {
  if (type && type.length > 0) {
    const color = typeColors[type]
    return color || 'gray.300' // 默认灰色背景
  }
  return 'gray.300' // 默认灰色背景
}
