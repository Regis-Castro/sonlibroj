import { BookProps } from '~/utils/data';

export const handleSortAToZ = (current:BookProps, next:BookProps ) => {
  if(current.title > next.title ) return 1
  if(current.title < next.title ) return -1
  return 0
}

export const handleSortZToA = (current:BookProps, next:BookProps ) => {
  if(current.title < next.title ) return 1
  if(current.title > next.title ) return -1
  return 0
}

export const handleSortNewDate = (current:BookProps, next:BookProps ) => {
  if(current.date < next.date ) return 1
  if(current.date > next.date ) return -1
  return 0
}

export const handleSortOldDate = (current:BookProps, next:BookProps ) => {
  if(current.date < next.date ) return -1
  if(current.date > next.date ) return 1
  return 0
}