export const filteredTrailData1 = trails => {
  return trails.map(trail => ({
    decent: trail.decent,
    difficulty: trail.difficulty,
    id: trail.id,
    name: trail.name,
    stars: trail.stars
  }))
}

export const filteredTrailData2 = trails => {
  return 
}
