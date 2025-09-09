import {type DfDataConnection, type DfId} from '../../ng-draw-flow.interfaces';

/**
 * Builds an adjacency map from a list of connections
 * @param connections List of graph connections
 * @returns Object with adjacency map and array of unique node IDs
 */
export function buildAdjacencyMap(connections: DfDataConnection[]): {
    adjacencyMap: Map<DfId, Set<DfId>>;
    nodeIds: DfId[];
} {
    const adjacencyMap = new Map<DfId, Set<DfId>>();
    const nodeIdsSet = new Set<DfId>();

    connections.forEach((connection) => {
        const sourceNodeId = connection.source.nodeId;
        const targetNodeId = connection.target.nodeId;

        nodeIdsSet.add(sourceNodeId);
        nodeIdsSet.add(targetNodeId);

        if (!adjacencyMap.has(sourceNodeId)) {
            adjacencyMap.set(sourceNodeId, new Set<DfId>());
        }

        adjacencyMap.get(sourceNodeId)!.add(targetNodeId);
    });

    return {
        adjacencyMap,
        nodeIds: Array.from(nodeIdsSet),
    };
}

/**
 * Iterative function to find cycle nodes
 * @param adjacencyMap Adjacency map
 * @param nodeIds Array of node IDs
 * @returns Array of node IDs that form a cycle, or empty array if no cycle is found
 */
export function findCycleNodes(
    adjacencyMap: Map<DfId, Set<DfId>>,
    nodeIds: DfId[],
): DfId[] {
    // Node states: 0 - not visited, 1 - in current path, 2 - fully processed
    const nodeStates = new Map<DfId, number>();

    // Initialize all nodes as not visited
    nodeIds.forEach((nodeId) => {
        nodeStates.set(nodeId, 0);
    });

    // Check each node as a possible starting point
    for (const nodeId of nodeIds) {
        if (nodeStates.get(nodeId) !== 0) {
            continue;
        }

        const cycleResult = checkNodeForCycle(nodeId, adjacencyMap, nodeStates);

        if (cycleResult.length > 0) {
            return cycleResult;
        }
    }

    return []; // No cycle found
}

/**
 * Helper function to check a specific node for cycles
 * @param startNodeId Starting node ID
 * @param adjacencyMap Adjacency map
 * @param nodeStates Map of node states
 * @returns Array of node IDs that form a cycle, or empty array if no cycle is found
 */
function checkNodeForCycle(
    startNodeId: DfId,
    adjacencyMap: Map<DfId, Set<DfId>>,
    nodeStates: Map<DfId, number>,
): DfId[] {
    // Use a stack for iterative DFS and a path array to track the current path
    const stack: Array<{nodeId: DfId; processed: boolean}> = [
        {nodeId: startNodeId, processed: false},
    ];
    const path: DfId[] = [];

    while (stack.length > 0) {
        const {nodeId, processed} = stack[stack.length - 1]!;

        if (processed) {
            // Node is fully processed
            nodeStates.set(nodeId, 2);
            stack.pop();

            // Remove the node from the current path when backtracking
            if (path.length > 0 && path[path.length - 1] === nodeId) {
                path.pop();
            }

            continue;
        }

        // Mark the node as being in the current path
        nodeStates.set(nodeId, 1);
        stack[stack.length - 1]!.processed = true;
        path.push(nodeId);

        // Process neighbors
        const cycleFound = processNeighbors({
            nodeId,
            adjacencyMap,
            nodeStates,
            path,
            stack,
        });

        if (cycleFound.length > 0) {
            return cycleFound;
        }
    }

    return []; // No cycle found from this starting node
}

interface ProcessNeighborsContext {
    /** Current node ID */
    nodeId: DfId;
    /** Map of adjacency relationships between nodes */
    adjacencyMap: Map<DfId, Set<DfId>>;
    /** Map of node states (0 = unvisited, 1 = visiting, 2 = visited) */
    nodeStates: Map<DfId, number>;
    /** Current path */
    path: DfId[];
    /** DFS stack */
    stack: Array<{nodeId: DfId; processed: boolean}>;
}

/**
 * Processes all neighbors of a given node during DFS.
 *
 * @param context Object containing traversal context, adjacency map and state tracking.
 * @returns Array of node IDs forming a cycle, or empty array if no cycle is found.
 */
function processNeighbors({
    nodeId,
    adjacencyMap,
    nodeStates,
    path,
    stack,
}: ProcessNeighborsContext): DfId[] {
    const neighbors = adjacencyMap.get(nodeId) || new Set<DfId>();

    for (const neighbor of neighbors) {
        const neighborState = nodeStates.get(neighbor);

        if (neighborState === 1) {
            // Cycle found - extract the cycle nodes from the path
            const cycleStartIndex = path.indexOf(neighbor);

            return path.slice(cycleStartIndex).concat([neighbor]);
        }

        if (neighborState === 0) {
            // Add unvisited node to the stack
            stack.push({nodeId: neighbor, processed: false});
        }
    }

    return []; // No cycle found among neighbors
}

/**
 * Generates a hash for an array of connections
 * @param connections Array of connections
 * @returns String hash representing the current state of connections
 */
export function generateConnectionsHash(connections: DfDataConnection[]): string {
    let hash = 0;

    for (const conn of connections) {
        // Create a string representation of the connection
        const connStr = `${conn.source.nodeId}:${conn.source.connectorId}->${conn.target.nodeId}:${conn.target.connectorId}`;

        // Calculate the string hash (simple hash function)
        for (let i = 0; i < connStr.length; i++) {
            const char = connStr.charCodeAt(i);

            hash = (hash << 5) - hash + char;
            hash &= hash; // Convert to 32-bit integer
        }
    }

    return hash.toString(36); // Convert to base-36 string for compactness
}
