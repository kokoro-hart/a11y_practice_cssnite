import type { SpotData, Area } from "@/types"
import { getPath } from "@/utils"

export const useFormatSpotsForArea = (spotsData: SpotData[], area: Area) => {
  const filteredSpots = spotsData.filter((spot) => spot.area === area)

  const categories = [...new Set(filteredSpots.map(({ category }) => category).filter(Boolean))]

  const areaIndices: { [key: string]: number } = {}

  const formattedSpots = filteredSpots.map(({ title, thumbnails, category, area }) => {
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
