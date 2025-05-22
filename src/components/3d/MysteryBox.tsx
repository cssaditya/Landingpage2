import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

// Load the GLB model
const MODEL_PATH = '/Mystery_box.glb';

const MysteryBox = ({ scrollY = 0 }) => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);
  
  // Rotate the model based on scroll position
  useFrame(({ clock }) => {
    if (group.current) {
      // Base rotation
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
      // Add parallax effect based on scroll
      const scrollEffect = scrollY * 0.001;
      group.current.rotation.x = Math.sin(scrollEffect) * 0.2;
      group.current.position.y = Math.sin(scrollEffect) * 0.1;
    }
  });

  return (
    <group ref={group} scale={[20, 20, 20]}>
      {/* Render the imported GLB model */}
      <primitive object={scene} />
    </group>
  );
};

export default MysteryBox;