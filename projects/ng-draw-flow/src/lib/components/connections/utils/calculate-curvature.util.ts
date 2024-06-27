export function calculateCurvature(distance: number, maxCurvature: number): number {
    const maxDistanceForCurvature = 150;

    return (
        (Math.min(distance, maxDistanceForCurvature) / maxDistanceForCurvature) *
        maxCurvature
    );
}
