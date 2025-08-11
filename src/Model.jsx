import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SkeletonHelper } from 'three';

import modelPath from './assets/My_Model/Me_012.glb';


export default function ThreeScene() {
  const containerRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // softer edges

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Attach canvas to container div
    containerRef.current.appendChild(renderer.domElement);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      30,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 28);
    camera.rotation.set(
      THREE.MathUtils.degToRad(-10),
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(0)
    );

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x35227a, 1);
    scene.add(ambientLight);


    const keyLightSun = new THREE.HemisphereLight(0xB76E79, 0x35227a, 3);
    keyLightSun.position.set(5, 5, 50);
    scene.add(keyLightSun);

    const lightRig = new THREE.Object3D();

    const keyLightScreen = new THREE.SpotLight(0xDBE9F4, 3000, -3, Math.PI / 4, .5, 1.8);
    keyLightScreen.position.set(0, 0, 2);
    scene.add(keyLightScreen);

    // const directionaLightHelper = new THREE.DirectionalLightHelper(keyLightScreen, 5);
    // scene.add(directionaLightHelper);
    
    const target = new THREE.Object3D();
    target.position.set(0, 0, 0);
    scene.add(target);

    keyLightScreen.target = target;

    lightRig.add(keyLightScreen);
    lightRig.add(keyLightScreen.target);

    scene.add(lightRig);

    lightRig.position.y -= 2;
    lightRig.position.z += 19;

    keyLightScreen.castShadow = true;
    keyLightScreen.shadow.mapSize.width = 2048; // bigger = softer + smoother
    keyLightScreen.shadow.mapSize.height = 2048;
    keyLightScreen.shadow.radius = 4; // increase for blurrier edges
    keyLightScreen.shadow.bias = -0.0001; // avoid shadow acne

    keyLightScreen.castShadow = true;


    const keyLightNew = new THREE.DirectionalLight(0xffffff, 1);
    keyLightNew.position.set(5, 10, 5);
    scene.add(keyLightNew);

    const rimLight = new THREE.DirectionalLight(0xff4400, 2);
    rimLight.position.set(-10, 10, -10);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x35227a, 0.3);
    fillLight.position.set(-5, 2, 5);
    scene.add(fillLight);

    // Raycaster & mouse setup
    const mousePosition = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const planeNormal = new THREE.Vector3();
    const plane = new THREE.Plane();
    const intersectionPoint = new THREE.Vector3();

    let model = null;
    let mixer = null;
    const clock = new THREE.Clock();
    let wallMesh = null;
    let head = null;

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      function (gltf) {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0);
        console.log(gltf.animations);
        model.traverse((node) => {
          if (node.isLight) {
            node.visible = true;
            node.intensity = 1;
            console.log('Found real light:', node);
          }

          if (node.name === 'Wall_Decor') {
            wallMesh = node;
            console.log('Wall_Decor FOUND:', node);
          }

          if (node.isBone && node.name === 'Head') {
            head = node;
            console.log('Head FOUND:', node);
          }
          
          if(node.isMesh && node.name !== 'Glasses'){
            node.castShadow = true;    // casts shadows
            node.receiveShadow = true; // can display shadows falling on it
          }
        });

        
        const glassesGroup = gltf.scene.getObjectByName('Glasses');
        if (glassesGroup) {
          glassesGroup.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = false;
                child.receiveShadow = false;
            }
          }
        )
        };


         //SkeletonHelper (optional debugging)
         //const skeletonHelper = new SkeletonHelper(model);
         //scene.add(skeletonHelper);

        mixer = new THREE.AnimationMixer(model);
        const rng = Math.round(Math.random());
        console.log("The random number chosen was: ", rng);
        const desiredClip = gltf.animations[1];
        if (desiredClip) {
          const action = mixer.clipAction(desiredClip);
          action.play();
        } else {
          console.warn('No animation found!');
        }
      },
      undefined,
      function (error) {
        console.error('An error occurred while loading the model:', error);
      }
    );

    

    // Handle keyboard input
    function onKeyDown(event) {
      const spinAmount = 0.05;
      if (!wallMesh) return;

      switch (event.key) {
        case 'ArrowLeft':
          wallMesh.rotation.z -= spinAmount;
          break;
        case 'ArrowRight':
          wallMesh.rotation.z += spinAmount;
          break;
        default:
          break;
      }
    }

    containerRef.current.appendChild(renderer.domElement);
    console.log("Container: ", containerRef.current);
    console.log("Canvas: ", renderer.domElement);
    console.log("Canvas rect: ", renderer.domElement.getBoundingClientRect());


    renderer.domElement.setAttribute('tabindex', '0');
    renderer.domElement.focus();

    window.addEventListener('keydown', onKeyDown);

    // Handle mouse movement
    function onMouseMove(event) {
      mousePosition.x = (event.clientX / containerRef.current.clientWidth) * 2 - 1;
      mousePosition.y = -(event.clientY / containerRef.current.clientHeight) * 2 + 1;

      planeNormal.copy(camera.position).normalize();
      plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
      raycaster.setFromCamera(mousePosition, camera);
      raycaster.ray.intersectPlane(plane, intersectionPoint);

      if (head) head.lookAt(intersectionPoint.x, intersectionPoint.y, 20);
    }
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function onResize() {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', onResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      if (renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="threeMain"
      ref={containerRef}
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    />
  );
}
