import { Direction } from "./../Direction/Direction.js";
import { Rect } from "../Utils/Rect/Rect.js";
import { GridCharacter } from "../GridCharacter/GridCharacter.js";
import { CollisionStrategy } from "../Collisions/CollisionStrategy.js";
import { CharLayer } from "../GridEngine.js";
import { Tilemap } from "./Tilemap.js";
import { Vector2 } from "../Utils/Vector2/Vector2.js";
import { LayerVecPos } from "../Utils/LayerPositionUtils/LayerPositionUtils.js";
export declare class GridTilemap {
    private tilemap;
    private collisionTilePropertyName;
    private useTileCollisionCache;
    private static readonly ONE_WAY_COLLIDE_PROP_PREFIX;
    private characters;
    private charBlockCache;
    private transitions;
    private reverseTransitions;
    private collidesPropNames;
    private tileCostPropNames;
    private collisionRelevantLayersFrameCache;
    private tileCollisionCache?;
    constructor(tilemap: Tilemap, collisionTilePropertyName: string, collisionStrategy: CollisionStrategy, collisionGroupRelation?: Map<string, Set<string>> | undefined, useTileCollisionCache?: boolean);
    fixCacheLayer(layer: CharLayer): void;
    unfixCacheLayers(): void;
    addCharacter(character: GridCharacter): void;
    removeCharacter(charId: string): void;
    getCharacters(): GridCharacter[];
    getCharactersAt(position: Vector2, layer?: string): Set<GridCharacter>;
    rebuildTileCollisionCache(rect?: Rect): void;
    hasBlockingTileUncached(pos: Vector2, charLayer: string | undefined, direction?: Direction, ignoreHasTile?: boolean): boolean;
    hasBlockingTile(pos: Vector2, charLayer: string | undefined, direction?: Direction, ignoreHasTile?: boolean): boolean;
    getTransition(pos: Vector2, fromLayer?: string): string | undefined;
    getReverseTransitions(pos: Vector2, targetLayer?: string): Set<CharLayer> | undefined;
    setTransition(pos: Vector2, fromLayer: CharLayer, toLayer: CharLayer): void;
    getTransitions(): Map<CharLayer, Map<CharLayer, CharLayer>>;
    getTileCosts(pos: LayerVecPos, srcDir?: Direction): number;
    private getTileCostsForLayer;
    hasNoTileUncached(pos: Vector2, charLayer?: string): boolean;
    hasNoTile(pos: Vector2, charLayer?: string): boolean;
    hasBlockingChar(pos: Vector2, layer: string | undefined, collisionGroups: string[], exclude?: Set<string>, ignoreCollisionGroups?: Set<string>): boolean;
    isInRange(pos: Vector2): boolean;
    toMapDirection(direction: Direction): Direction;
    fromMapDirection(direction: Direction): Direction;
    isIsometric(): boolean;
    getTilePosInDirection(position: LayerVecPos, direction: Direction): LayerVecPos;
    invalidateFrameCache(): void;
    private isLayerBlockingAt;
    private getCharLayerIndexes;
    private findPrevAndCharLayer;
    private getCollisionRelevantLayers;
    private getLowestCharLayer;
    private getCharLayerNames;
}