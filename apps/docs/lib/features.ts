// In a real use case, this would be persisted somewhere (filesystem, db)
const features = {
  userProgress: true,
};

export type Features = typeof features;

export function loadFeatures() {
  return features;
}
