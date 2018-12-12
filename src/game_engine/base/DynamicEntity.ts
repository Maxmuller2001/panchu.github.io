/// <reference path="./Entity.ts" />
abstract class DynamicEntity extends Entity {

    private velocity: Vector2 = new Vector2(0, 0);

    abstract Draw(deltaTime: number): void;

}