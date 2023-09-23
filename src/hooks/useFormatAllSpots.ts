import type { SpotData } from "@/types"
import { getPath } from "@/utils"

export const useFormatAllSpots = (spotsData: SpotData[]) => {
  const categories = [...new Set(spotsData.map(({ category }) => category).filter(Boolean))]

  const areaIndices: { [key: string]: number } = {}

  const formattedSpots = spotsData.map(({ title, thumbnails, category, area }) => {
    if (areaIndices[area]) {
      areaIndices[area]++
    } else {
      areaIndices[area] = 1
    }

    return {
      id: getPath.spot(area, areaIndices[area]),
      title,
      thumbnail: {
        common: `/spots/${thumbnails.split(",")[0]}`,
      },
      category,
      area,
    }
  })

  return {
    spotCards: formattedSpots,
    categories,
  }
}
