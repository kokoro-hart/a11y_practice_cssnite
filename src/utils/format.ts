export const toUpperCamelCase = (input: string) => {
  const words = input.split(/[ _-]/)

  const upperCamelCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })

  const upperCamelCaseString = upperCamelCaseWords.join("")

  return upperCamelCaseString
}

export const escapeSelector = (selector: string) => {
  return selector.replaceAll(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, "\\$&")
}
