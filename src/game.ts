
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const floorbasegrass = new Entity('floorbasegrass')
engine.addEntity(floorbasegrass)
floorbasegrass.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
floorbasegrass.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorbasegrass.addComponentOrReplace(transform2)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(7.5, 3.5, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 2.25, 1)
})
nft.addComponentOrReplace(transform3)
const nftShape = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/1060911")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)
