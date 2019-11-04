export const filteredTrailData = (trails) => trails.map((trail) => ({
  id: trail.id,
  name: trail.name,
  stars: trail.stars,
  summary: trail.summary,
  descent: trail.descent,
  difficulty: trail.difficulty,
  conditionDate: trail.conditionDate,
  conditionStatus: trail.conditionStatus,
  latitude: trail.latitude,
  longitude: trail.longitude,
}));
