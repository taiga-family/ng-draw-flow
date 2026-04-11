export interface DfPanZoomBounds {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
}

export interface DfPanZoomTrackedBounds extends DfPanZoomBounds {
    readonly id: string;
}

export class PanZoomBoundsTracker<T extends DfPanZoomBounds = DfPanZoomTrackedBounds> {
    private readonly items = new Set<T>();
    private bounds = {minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity};
    private boundaryItems = {
        minX: new Set<T>(),
        minY: new Set<T>(),
        maxX: new Set<T>(),
        maxY: new Set<T>(),
    };

    public has(item: T): boolean {
        return this.items.has(item);
    }

    public add(item: T): void {
        this.items.add(item);

        if (this.hasValidBounds(item)) {
            this.updateBoundsIncremental(item);
        }
    }

    public update(item: T, nextBounds: Partial<T>): void {
        if (!this.items.has(item)) {
            this.add(item);

            return;
        }

        const previousBounds = {...item};

        Object.assign(item, nextBounds);

        if (!this.hasValidBounds(item)) {
            this.removeFromBoundaryTracking(item, previousBounds);

            if (this.needsRecalculation(previousBounds)) {
                this.recalculateBounds();
            }

            return;
        }

        this.removeFromBoundaryTracking(item, previousBounds);

        if (this.needsRecalculation(previousBounds)) {
            this.recalculateBounds();
        } else {
            this.updateBoundsIncremental(item);
        }
    }

    public remove(item: T): void {
        if (!this.items.delete(item)) {
            return;
        }

        const wasBoundaryItem = this.isOnBoundary(item);

        this.removeFromBoundaryTracking(item);

        if (wasBoundaryItem) {
            this.recalculateBounds();
        }
    }

    public clear(): void {
        this.items.clear();
        this.bounds = {minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity};
        this.boundaryItems = {
            minX: new Set<T>(),
            minY: new Set<T>(),
            maxX: new Set<T>(),
            maxY: new Set<T>(),
        };
    }

    public toJSON(): DfPanZoomBounds & {length: number} {
        if (!this.items.size) {
            return {length: 0, minX: 0, minY: 0, maxX: 0, maxY: 0};
        }

        if (this.bounds.minX === Infinity || this.bounds.maxX === -Infinity) {
            return {
                length: this.items.size,
                minX: 0,
                minY: 0,
                maxX: 0,
                maxY: 0,
            };
        }

        return {
            length: this.items.size,
            ...this.bounds,
        };
    }

    private updateBoundsIncremental(item: T): void {
        if (!this.hasValidBounds(item)) {
            return;
        }

        if (this.bounds.minX === Infinity || item.minX <= this.bounds.minX) {
            if (item.minX < this.bounds.minX) {
                this.boundaryItems.minX.clear();
                this.bounds.minX = item.minX;
            }

            this.boundaryItems.minX.add(item);
        }

        if (this.bounds.minY === Infinity || item.minY <= this.bounds.minY) {
            if (item.minY < this.bounds.minY) {
                this.boundaryItems.minY.clear();
                this.bounds.minY = item.minY;
            }

            this.boundaryItems.minY.add(item);
        }

        if (item.maxX >= this.bounds.maxX) {
            if (item.maxX > this.bounds.maxX) {
                this.boundaryItems.maxX.clear();
                this.bounds.maxX = item.maxX;
            }

            this.boundaryItems.maxX.add(item);
        }

        if (item.maxY >= this.bounds.maxY) {
            if (item.maxY > this.bounds.maxY) {
                this.boundaryItems.maxY.clear();
                this.bounds.maxY = item.maxY;
            }

            this.boundaryItems.maxY.add(item);
        }
    }

    private recalculateBounds(): void {
        this.bounds = {minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity};
        this.boundaryItems = {
            minX: new Set<T>(),
            minY: new Set<T>(),
            maxX: new Set<T>(),
            maxY: new Set<T>(),
        };

        for (const item of this.items) {
            this.updateBoundsIncremental(item);
        }
    }

    private isOnBoundary(item: T): boolean {
        return (
            this.boundaryItems.minX.has(item) ||
            this.boundaryItems.minY.has(item) ||
            this.boundaryItems.maxX.has(item) ||
            this.boundaryItems.maxY.has(item)
        );
    }

    private removeFromBoundaryTracking(item: T, bounds: DfPanZoomBounds = item): void {
        if (bounds.minX === this.bounds.minX) {
            this.boundaryItems.minX.delete(item);
        }

        if (bounds.minY === this.bounds.minY) {
            this.boundaryItems.minY.delete(item);
        }

        if (bounds.maxX === this.bounds.maxX) {
            this.boundaryItems.maxX.delete(item);
        }

        if (bounds.maxY === this.bounds.maxY) {
            this.boundaryItems.maxY.delete(item);
        }
    }

    private needsRecalculation(previousBounds: DfPanZoomBounds): boolean {
        return (
            (previousBounds.minX === this.bounds.minX &&
                this.boundaryItems.minX.size === 0) ||
            (previousBounds.minY === this.bounds.minY &&
                this.boundaryItems.minY.size === 0) ||
            (previousBounds.maxX === this.bounds.maxX &&
                this.boundaryItems.maxX.size === 0) ||
            (previousBounds.maxY === this.bounds.maxY &&
                this.boundaryItems.maxY.size === 0)
        );
    }

    private hasValidBounds(item: T): boolean {
        return (
            Number.isFinite(item.minX) &&
            Number.isFinite(item.minY) &&
            Number.isFinite(item.maxX) &&
            Number.isFinite(item.maxY)
        );
    }
}
