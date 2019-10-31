export const filteredTrailData = trails => {
  return trails.map(trail => ({
    decent: trail.decent,
    difficulty: trail.difficulty,
    id: trail.id,
    name: trail.name,
    stars: trail.stars,
    conditonDate: trail.conditonDate,
    conditionStatus: trail.conditionStatus,
    latitude: trail.latitude,
    summary: trail.summary
  }))
}
