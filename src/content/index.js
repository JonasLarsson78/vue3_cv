import se from './se'
import en from './en'

export const getContent = (c) => {
  switch (c) {
    case 'se':
      return se
    case 'en':
      return en
    default:
      return se
  }
}
