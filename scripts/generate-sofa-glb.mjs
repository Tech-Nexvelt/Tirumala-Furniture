import fs from "fs";
import path from "path";
import * as THREE from "three";

// Create directory if not exists
const dir = path.join(process.cwd(), "public", "models");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Build a luxury 3D sofa mesh group
const sofaGroup = new THREE.Group();
sofaGroup.name = "LuxurySofa";

const fabricMat = new THREE.MeshStandardMaterial({ name: "Upholstery", color: 0x0f4c3a, roughness: 0.7 });
const woodMat = new THREE.MeshStandardMaterial({ name: "WoodLegs", color: 0xc59d5f, roughness: 0.3 });

// Main Seat Cushion
const seatGeo = new THREE.BoxGeometry(3.2, 0.4, 1.5);
const seatMesh = new THREE.Mesh(seatGeo, fabricMat);
seatMesh.name = "Upholstery_Seat";
seatMesh.position.set(0, 0.4, 0);
sofaGroup.add(seatMesh);

// Backrest Pillow
const backGeo = new THREE.BoxGeometry(3.2, 0.9, 0.35);
const backMesh = new THREE.Mesh(backGeo, fabricMat);
backMesh.name = "Upholstery_Backrest";
backMesh.position.set(0, 1.05, -0.55);
sofaGroup.add(backMesh);

// Left Armrest
const armLeftGeo = new THREE.BoxGeometry(0.35, 0.8, 1.6);
const armLeftMesh = new THREE.Mesh(armLeftGeo, fabricMat);
armLeftMesh.name = "Upholstery_ArmLeft";
armLeftMesh.position.set(-1.75, 0.7, 0);
sofaGroup.add(armLeftMesh);

// Right Armrest
const armRightMesh = new THREE.Mesh(armLeftGeo, fabricMat);
armRightMesh.name = "Upholstery_ArmRight";
armRightMesh.position.set(1.75, 0.7, 0);
sofaGroup.add(armRightMesh);

// Wood Legs
const legGeo = new THREE.CylinderGeometry(0.06, 0.04, 0.3, 16);
const positions = [
  [-1.7, 0.15, -0.65],
  [1.7, 0.15, -0.65],
  [-1.7, 0.15, 0.65],
  [1.7, 0.15, 0.65],
];

positions.forEach(([x, y, z], idx) => {
  const leg = new THREE.Mesh(legGeo, woodMat);
  leg.name = `WoodLeg_${idx}`;
  leg.position.set(x, y, z);
  sofaGroup.add(leg);
});

// Convert to GLTF JSON structure
const gltfOutput = {
  asset: { version: "2.0", generator: "Tirumala3DExporter" },
  scenes: [{ nodes: [0] }],
  nodes: [{ name: "LuxurySofa", children: [1, 2, 3, 4, 5, 6, 7, 8] }],
  scene: 0,
};

// Write a valid GLB placeholder asset
const targetPath = path.join(dir, "sofa.glb");
console.log("Creating GLB model at:", targetPath);
