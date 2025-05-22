import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import { Group, Vector3, Color } from 'three';
import { motion } from 'framer-motion-3d';

const MODEL_PATH = '/Mystery_box.glb';

const MysteryBox = ({ scrollY = 0 }) => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);
  const particles = useRef<Group[]>([]);
  const lastPosition = useRef(new Vector3());
  const boxColor = new Color('#DC143C');
  
  useEffect(() => {
    // Initialize particle system
    for (let i = 0; i < 20; i++) {
      const particle = new Group();
      particle.userData.life = 0;
      particle.userData.maxLife = 2;
      particle.userData.velocity = new Vector3();
      particles.current.push(particle);
      group.current?.add(particle);
    }
    
    if (group.current) {
      lastPosition.current.copy(group.current.position);
    }
    
    return () => {
      particles.current.forEach(particle => {
        group.current?.remove(particle);
      });
    };
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    // Base rotation and position
    group.current.rotation.y = clock.getElapsedTime() * 0.1;
    const scrollEffect = scrollY * 0.001;
    group.current.rotation.x = Math.sin(scrollEffect) * 0.2;
    group.current.position.y = Math.sin(scrollEffect) * 0.1;

    // Calculate movement direction
    const currentPos = group.current.position.clone();
    const movement = currentPos.sub(lastPosition.current);
    
    // Update particles
    particles.current.forEach(particle => {
      particle.userData.life += 0.016;
      if (particle.userData.life >= particle.userData.maxLife) {
        // Reset particle
        particle.position.copy(group.current!.position);
        particle.userData.life = 0;
        particle.userData.velocity.set(
          (Math.random() - 0.5) * 0.1,
          Math.random() * 0.2,
          (Math.random() - 0.5) * 0.1
        );
      }
      
      // Update particle position
      particle.position.add(particle.userData.velocity);
      
      // Fade out
      const opacity = 1 - (particle.userData.life / particle.userData.maxLife);
      particle.scale.setScalar(opacity * 0.5);
    });
    
    lastPosition.current.copy(group.current.position);
  });

  return (
    <group ref={group} scale={[20, 20, 20]}>
      <primitive object={scene} />
      
      {/* "SPIN ME" text */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.5}
        color="#DC143C"
        font="/Rubik/static/Rubik-Medium.ttf"
        anchorX="center"
        anchorY="middle"
      >
        SPIN ME
      </Text>
      
      {/* Particle system representation */}
      {particles.current.map((_, index) => (
        <motion.mesh
          key={index}
          scale={0.1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color={boxColor} transparent opacity={0.5} />
        </motion.mesh>
      ))}
    </group>
  );
};

export default MysteryBox;