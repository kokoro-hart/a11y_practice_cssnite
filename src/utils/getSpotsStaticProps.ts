import type { Area, SpotData } from "@/types"

export const getSpotsStaticProps = (spotData: SpotData[], area: Area) => {
  const filteredSpots = spotData.filter((spot) => spot.area === area)

  const areaIndices: { [key: string]: number } = {}

  const spotProps = filteredSpots.map((spot) => {
    if (areaIndices[spot.area]) {
      areaIndices[spot.area]++
    } else {
      areaIndices[spot.area] = 1
    }
    const spotIndex = areaIndices[spot.area]

    return {
      params: { spot: `spot${spotIndex}` },
      props: {
        ...spot,
        spotIndex,
      },
    }
  })

  return {
    spotProps,
  }
}
