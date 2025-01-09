import React from 'react';
import { useGLTF } from '@react-three/drei';

const SchoolBuilding = (props) => {
  const { nodes, materials } = useGLTF('/models/low_poly_80s_computer_v3.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[1.576, 0, 0]} scale={3}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={20}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['ComputerTower-LowPoly003_Old_Computer_V3_0'].geometry}
              material={materials.Old_Computer_V3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['ComputerTower-LowPoly003_Screen001_0'].geometry}
              material={materials['Screen.001']}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/low_poly_80s_computer_v3.glb');

export default SchoolBuilding;