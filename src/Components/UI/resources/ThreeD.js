// function ThreeD() {

  
//     return (
//      <div><h1>3D show</h1></div>
//     );
//   }
  
//   export default ThreeD;
import {Canvas} from "@react-three/fiber"
import {useGLTF,Stage, PresentationControls} from "@react-three/drei";
//import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from "three";
import { useEffect } from "react";
import React, { Suspense } from 'react';
import Loader from "../../Loader/Loader"

// npm install three
// npm install @react-three/fiber @react-three/drei

function Model(props){
  //const {scene} =useGLTF("./tooth.glb")
   //const {scene} =useGLTF("https://firebasestorage.googleapis.com/v0/b/vitual-patient.appspot.com/o/files%2Ftooth.glb?alt=media&token=cc923058-a9c8-4c03-9d97-ff45f720774c")
   const {scene} =useGLTF("https://firebasestorage.googleapis.com/v0/b/vitual-patient.appspot.com/o/files%2Ffinal.glb?alt=media&token=fd1dc43f-590d-45eb-85bc-773d87a0a99d")
  return <primitive object={scene} {...props} />
}

function download(){
  fetch('tooth2.glb').then(response => {
    response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'SamplePDF.pdf';
        alink.click();
    })
})
}


function ThreeD() {

  
  return (

<Suspense fallback={<Loader />}>
   <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position":"absolute"}}>
    <color attach="background" args={["#101010"]} />
    <PresentationControls speed={.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}> 
      <Stage environment={null}>
        {/* <Model scale={0.01}/> */}
        
        <Model scale={1.0}/>
        
      </Stage>

    </PresentationControls>
   </Canvas>
   </Suspense>
  );
}

export default ThreeD;
