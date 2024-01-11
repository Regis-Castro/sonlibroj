export const GeneralFilters: string[] = ['a-z', 'z-a', 'plej novaj', 'plej malnovaj']

export const CategoryFilters: string[] = ['aventuro', 'fabelo', 'feinrakonto', 'suspenso', 'teruro']


export type menuItemProps = {
  id: number;
  name: string;
  iconLink: string;
  link: string;
}

export const menuItems:menuItemProps[] = [
  { id: 1, name: 'Hejmo', iconLink: 'solar:home-outline', link: '/' },
  { id: 2, name: 'Libraro', iconLink: 'guidance:library', link: '/library'}, 
  { id: 3, name: 'Pri ni', iconLink: 'mdi:about', link: '/about-us' },
  { id: 4, name: 'Subteno', iconLink: 'nimbus:money', link: '/support'}
]

export type BookProps = {
  id: number, 
  title: string, 
  slug: string, 
  categories: string[],
  date: string;
  description: string,
  alt: string, 
  urlCover: string,
  urlAudio: string,
  urlDownload: string
}

export const Books:BookProps[] = [ 
  {
    id: 1, 
    title: 'Ursa felo',
    slug: 'ursa-felo',
    categories: ['fikcio', 'fabelo', 'feinrakonto'],
    date: '12/01/2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “Ursa felo”',
    urlCover: '/covers/ursa-felo.svg',
    urlAudio: '/audios/ursa-felo.mp3',
    urlDownload: '/pdf/ursa-felo.pdf'
  },

  {
    id: 2, 
    title: 'La princino sur pizo',
    slug: 'la-princino-sur-pizo',
    categories: ['fikcio', 'fabelo', 'feinrakonto'],
    date: '12/01/2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “La princino sur pizo”',
    urlCover: '/covers/la-princino-sur-pizo.svg',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/la-princino-sur-pizo.pdf'
  }, 
  {
    id: 3, 
    title: 'Robinsono Kruso',
    slug: 'Robinsono-Kruso',
    categories: ['fikcio', 'romano', 'aventuro'],
    date: '12/02/2024',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “Robinsono Kruso”',
    urlCover: '/covers/robinsono-kruso.svg',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/robinsono-kruso.pdf'
  },

  {
    id: 4, 
    title: 'La falo de Uŝero-Domo',
    categories: ['fikcio', 'fabelo', 'teruro', 'suspenso'],
    date: '12/03/2024',
    slug: 'la-falo-de-uŝero-domo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “La falo de Uŝero-Domo”',
    urlCover: '/covers/la-falo-de-uŝero-domo-estontece.png',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/la-falo-de-uŝero-domo.pdf'
  }, 

  {
    id: 5, 
    title: 'La falo de Uŝero-Domo',
    categories: ['fikcio', 'fabelo', 'teruro', 'suspenso'],
    date: '12/03/2024',
    slug: 'la-falo-de-uŝero-domo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “La falo de Uŝero-Domo”',
    urlCover: '/covers/la-falo-de-uŝero-domo-estontece.png',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/la-falo-de-uŝero-domo.pdf'
  },

  {
    id: 6, 
    title: 'La falo de Uŝero-Domo',
    categories: ['fikcio', 'fabelo', 'teruro', 'suspenso'],
    date: '12/03/2024',
    slug: 'la-falo-de-uŝero-domo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “La falo de Uŝero-Domo”',
    urlCover: '/covers/la-falo-de-uŝero-domo-estontece.png',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/la-falo-de-uŝero-domo.pdf'
  }, 

  {
    id: 7, 
    title: 'La falo de Uŝero-Domo',
    categories: ['fikcio', 'fabelo', 'teruro', 'suspenso'],
    date: '12/03/2024',
    slug: 'la-falo-de-uŝero-domo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “La falo de Uŝero-Domo”',
    urlCover: '/covers/la-falo-de-uŝero-domo-estontece.png',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/la-falo-de-uŝero-domo.pdf'
  },

  {
    id: 8, 
    title: 'La falo de Uŝero-Domo',
    categories: ['fikcio', 'fabelo', 'teruro', 'suspenso'],
    date: '12/03/2024',
    slug: 'la-falo-de-uŝero-domo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, possimus quibusdam. Obcaecati eveniet sunt perferendis explicabo dolorem possimus, quo reiciendis illo nobis numquam libero ducimus quas, sequi inventore atque sed',
    alt: 'Kovrilo de la libro “La falo de Uŝero-Domo”',
    urlCover: '/covers/la-falo-de-uŝero-domo-estontece.png',
    urlAudio: '/audios/la-princino-sur-pizo.mp3',
    urlDownload: '/pdf/la-falo-de-uŝero-domo.pdf'
  }
]