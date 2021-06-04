
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
  position: new Vector3(8.5, 1.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft.addComponentOrReplace(transform3)
const nftShape = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/1060911")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(7, 1.5, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft2.addComponentOrReplace(transform4)
const nftShape2 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/78979483044653520767016641538033326323124770848481558434044152646294392799233")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const lightYellowSycamoreTree = new Entity('lightYellowSycamoreTree')
engine.addEntity(lightYellowSycamoreTree)
lightYellowSycamoreTree.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(12.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lightYellowSycamoreTree.addComponentOrReplace(transform5)
const gltfShape2 = new GLTFShape("models/TreeSycamore_02/TreeSycamore_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
lightYellowSycamoreTree.addComponentOrReplace(gltfShape2)

const smoothLog = new Entity('smoothLog')
engine.addEntity(smoothLog)
smoothLog.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smoothLog.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("models/Log_01/Log_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
smoothLog.addComponentOrReplace(gltfShape3)
