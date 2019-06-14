export const decimalAbreviate = (e) => {
    let value = Math.floor(e);
    if (value / 1000000 >= 1000) {
      return `${(value / 1000000000).toFixed(1)}Bi`
    }
    if (value / 1000 >= 1000) {
      return `${(value / 1000000).toFixed(1)}Mi`
    }
    if (value / 1000 < 1000 && value / 1000 >= 1) {
      return `${(value / 1000).toFixed(1)}k`
    }
    return `${(value).toFixed(1)}`
  }