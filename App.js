import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { useGLTF } from '@react-three/drei/native'
import modelPath from './path/to/model.glb'

function Model(props) {
  const gltf = useGLTF(modelPath)
  return <primitive {...props} object={gltf.scene} />
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Works on everything ! Web ! Android ! iOS !</Text>
      <Text>Horus Mabia</Text>
      <StatusBar style="auto" />
      <Canvas>
        <ambientLight />
        <Suspense>
          <Model />
        </Suspense>
    </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
