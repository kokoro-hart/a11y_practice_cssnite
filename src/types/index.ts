export type Area = "tokyo" | "saitama" | "chiba" | "kanagawa" | "yamanashi"

export type SpotData = {
  title: string
  category: string
  area: string
  thumbnails: string
  content: string
  mapLink: string
  infoTitle: string
  infoDesc: string
  websiteLink: string
}

export type PropsWithClassName = {
  className?: string
}
