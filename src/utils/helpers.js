// clean to filter through and find trails with a decent greater than ?

export const filteredTrailData = trails => {
  return trails.map(trail => ({
    id: trail.id,
    name: trail.name,
    stars: trail.stars,
    summary: trail.summary,
    decent: trail.decent,
    difficulty: trail.difficulty,
    conditonDate: trail.conditonDate,
    conditionStatus: trail.conditionStatus,
    latitude: trail.latitude,
    longitude: trail.longitude
  }))
}
