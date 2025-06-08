import type {
    DfConnectorPosition,
    DfPoint,
} from '../../../../../../ng-draw-flow.interfaces';
import {getEdgeCentre} from '../helpers/edge-centre';
import {getPrimaryDirection} from '../helpers/get-primary-direction';
import {CONNECTOR_DIRECTIONS, MIN_SEGMENT_LENGTH} from '../smooth-step.consts';

interface ComputePointsParams {
    source: DfPoint;
    sourcePos: DfConnectorPosition;
    target: DfPoint;
    targetPos: DfConnectorPosition;
    offset?: number;
    centreOverride?: Partial<DfPoint>;
}

/**
 * Returns all points that form the polyline **before** the bezier smoothing is
 * applied. Additionally returns the centre of the longest straight segment –
 * handy for label placement.
 */
export function computeWaypoints(
    pointsParams: ComputePointsParams,
): [DfPoint[], number, number] {
    /**
     * Unpack input, apply fall-backs
     */
    const {
        source,
        sourcePos,
        target,
        targetPos,
        offset = MIN_SEGMENT_LENGTH,
        centreOverride = {},
    } = pointsParams;

    /**
     * Compute the unit directions for each connector
     */
    const sourceDir = CONNECTOR_DIRECTIONS[sourcePos];
    const targetDir = CONNECTOR_DIRECTIONS[targetPos];

    /**
     * Create “gap points” that leave a small offset straight out
     * of each connector so the edge never starts/ends inside a node
     */
    const sourceGap: DfPoint = {
        x: source.x + sourceDir.x * offset,
        y: source.y + sourceDir.y * offset,
    };
    const targetGap: DfPoint = {
        x: target.x + targetDir.x * offset,
        y: target.y + targetDir.y * offset,
    };

    /**
     * Decide whether the first long segment should run horizontally
     * or vertically.  This is the “primary axis” chosen so that we
     * head *towards* the target rather than backwards.
     */
    const firstStep = getPrimaryDirection(sourceGap, sourcePos, targetGap);
    const primaryAxis: 'x' | 'y' = firstStep.x !== 0 ? 'x' : 'y';
    const axisSign = firstStep[primaryAxis]; //  +1 or -1

    /**
     * Fallback geometric centre used for label placement
     */
    const [fallbackCX, fallbackCY] = getEdgeCentre({source, target});
    let labelCentreX = centreOverride.x ?? fallbackCX;
    let labelCentreY = centreOverride.y ?? fallbackCY;

    /**
     * Build the elbow(s) — the intermediate waypoints
     */
    let elbows: DfPoint[] = [];
    const sourceOpposesTarget = sourceDir[primaryAxis] * targetDir[primaryAxis] === -1; // true for Left→Right, Top→Bottom

    // Case A ─ Opposite sides
    if (sourceOpposesTarget) {
        const verticalSplit: DfPoint[] = [
            {x: labelCentreX, y: sourceGap.y},
            {x: labelCentreX, y: targetGap.y},
        ];
        const horizontalSplit: DfPoint[] = [
            {x: sourceGap.x, y: labelCentreY},
            {x: targetGap.x, y: labelCentreY},
        ];

        const keepDirection = sourceDir[primaryAxis] === axisSign;

        if (primaryAxis === 'x') {
            elbows = keepDirection ? verticalSplit : horizontalSplit;
        } else {
            elbows = keepDirection ? horizontalSplit : verticalSplit;
        }
    }
    // Case B ─ Same / mixed
    else {
        const sourceToTarget = [{x: sourceGap.x, y: targetGap.y}];
        const targetToSource = [{x: targetGap.x, y: sourceGap.y}];

        if (primaryAxis === 'x') {
            elbows = sourceDir.x === axisSign ? targetToSource : sourceToTarget;
        } else {
            elbows = sourceDir.y === axisSign ? sourceToTarget : targetToSource;
        }

        /** Detect & flip elbow to avoid overlap with the nodes */
        if (sourcePos !== targetPos) {
            const crossAxis: 'x' | 'y' = primaryAxis === 'x' ? 'y' : 'x';
            const sameCardinal = sourceDir[primaryAxis] === targetDir[crossAxis];

            const mustFlip =
                (sourceDir[primaryAxis] === 1 &&
                    ((!sameCardinal && sourceGap[crossAxis] > targetGap[crossAxis]) ||
                        (sameCardinal &&
                            sourceGap[crossAxis] <= targetGap[crossAxis]))) ||
                (sourceDir[primaryAxis] === -1 &&
                    ((!sameCardinal && sourceGap[crossAxis] < targetGap[crossAxis]) ||
                        (sameCardinal && sourceGap[crossAxis] >= targetGap[crossAxis])));

            if (mustFlip) {
                elbows = primaryAxis === 'x' ? sourceToTarget : targetToSource;
            }
        }

        /** Re-compute label centre so it sits on the longest straight leg */
        const longestX = Math.max(
            Math.abs(sourceGap.x - elbows[0]!.x),
            Math.abs(targetGap.x - elbows[0]!.x),
        );
        const longestY = Math.max(
            Math.abs(sourceGap.y - elbows[0]!.y),
            Math.abs(targetGap.y - elbows[0]!.y),
        );

        if (longestX >= longestY) {
            labelCentreX = (sourceGap.x + targetGap.x) / 2;
            labelCentreY = elbows[0]!.y;
        } else {
            labelCentreX = elbows[0]!.x;
            labelCentreY = (sourceGap.y + targetGap.y) / 2;
        }
    }

    /**
     * Assemble the full polyline: connector-centre ➜ gap ➜ elbows
     */
    const polyline: DfPoint[] = [
        source, // 0. start at connector centre
        sourceGap, // 1. leave the node
        ...elbows, // 2. one or two elbows
        targetGap, // 3. enter the target node
        target, // 4. finish at connector centre
    ];

    /**
     * Return: [polyline points, labelCentreX, labelCentreY]
     */
    return [polyline, labelCentreX, labelCentreY];
}
