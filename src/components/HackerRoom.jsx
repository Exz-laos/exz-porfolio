import  { Suspense } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

const HackerRoom = (props) => {
    // Load the GLTF model
    const { nodes, materials } = useGLTF('/models/scene.gltf');

    const monitorTexture = useTexture('/textures/desk/monitor.png');
    const screenTexture = useTexture('/textures/desk/screenX.png');


    // Log nodes and materials to debug
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);

    // Check if nodes and materials are loaded correctly
    if (!nodes || !materials) {
        console.error('Failed to load nodes or materials');
        return null;
    }

    return (
        <Suspense fallback={null}>
            <group {...props} dispose={null}>
                {nodes.computer_computer_mat_0 && materials.computer_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.computer_computer_mat_0.geometry}
                        material={materials.computer_mat}>

                        <meshMatcapMaterial map={monitorTexture} />
                    </mesh>
                    
                )}
                {/* Add similar checks for other meshes */}
                {nodes.server_server_mat_0 && materials.server_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.server_server_mat_0.geometry}
                        material={materials.server_mat}
                    />
                )}
                {nodes.vhs_vhsPlayer_mat_0 && materials.vhsPlayer_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
                        material={materials.vhsPlayer_mat}
                    />
                )}
                {nodes.shelf_stand_mat_0 && materials.stand_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.shelf_stand_mat_0.geometry}
                        material={materials.stand_mat}
                    />
                )}
                {nodes.keyboard_mat_mat_mat_0 && materials.mat_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.keyboard_mat_mat_mat_0.geometry}
                        material={materials.mat_mat}
                    />
                )}
                {nodes.arm_arm_mat_0 && materials.arm_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.arm_arm_mat_0.geometry}
                        material={materials.arm_mat}
                    />
                )}
                {nodes.Tv_tv_mat_0 && materials.tv_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Tv_tv_mat_0.geometry}
                        material={materials.tv_mat}>

                         <meshMatcapMaterial map={monitorTexture} />
                        </mesh>
                    
                )}
                {nodes.table_table_mat_0 && materials.table_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.table_table_mat_0.geometry}
                        material={materials.table_mat}
                    />
                )}
                {nodes.Cables_cables_mat_0 && materials.cables_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cables_cables_mat_0.geometry}
                        material={materials.cables_mat}
                    />
                )}
                {nodes.props_props_mat_0 && materials.props_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.props_props_mat_0.geometry}
                        material={materials.props_mat}
                    />
                )}
                {nodes.screen_screens_0 && materials.screens && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.screen_screens_0.geometry}
                        material={materials.screens}>
                            <meshMatcapMaterial map={screenTexture} />
                    </mesh>
                    
                )}
                {nodes.screen_glass_glass_0 && materials.glass && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.screen_glass_glass_0.geometry}
                        material={materials.glass}
                    />
                )}
                {nodes.Ground_ground_mat_0 && materials.ground_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ground_ground_mat_0.geometry}
                        material={materials.ground_mat}
                    />
                )}
                {nodes.peripherals_key_mat_0 && materials.key_mat && (
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.peripherals_key_mat_0.geometry}
                        material={materials.key_mat}
                    />
                )}
            </group>
        </Suspense>
    );
};

// Preload the GLTF model
useGLTF.preload('/models/scene.gltf');

export default HackerRoom;