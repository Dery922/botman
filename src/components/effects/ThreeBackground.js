// components/effects/ThreeBackground.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const spheresRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x7b2ff7, 1);
    light1.position.set(10, 10, 20);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00d4ff, 0.8);
    light2.position.set(-10, -5, 30);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xff3366, 0.5);
    light3.position.set(20, -10, 10);
    scene.add(light3);

    // Create floating spheres
    const spheres = [];
    const colors = [0x7b2ff7, 0x00d4ff, 0xff3366, 0xffaa33, 0x33ffaa];
    
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.5 + 0.3, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        emissive: 0x220044,
        emissiveIntensity: 0.1,
        transparent: true,
        opacity: 0.6,
        wireframe: Math.random() > 0.7
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      
      sphere.position.x = (Math.random() - 0.5) * 60;
      sphere.position.y = (Math.random() - 0.5) * 60;
      sphere.position.z = (Math.random() - 0.5) * 40 - 20;
      
      sphere.userData = {
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        speedZ: (Math.random() - 0.5) * 0.02,
        rotationSpeed: (Math.random() - 0.5) * 0.01
      };
      
      scene.add(sphere);
      spheres.push(sphere);
    }
    
    spheresRef.current = spheres;

    // Add connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7b2ff7, opacity: 0.1, transparent: true });
    
    for (let i = 0; i < 30; i++) {
      const points = [];
      points.push(new THREE.Vector3((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80));
      points.push(new THREE.Vector3((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80));
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      spheresRef.current.forEach((sphere) => {
        sphere.position.x += sphere.userData.speedX;
        sphere.position.y += sphere.userData.speedY;
        sphere.position.z += sphere.userData.speedZ;
        sphere.rotation.x += sphere.userData.rotationSpeed;
        sphere.rotation.y += sphere.userData.rotationSpeed;
        
        // Wrap around screen
        if (sphere.position.x > 40) sphere.position.x = -40;
        if (sphere.position.x < -40) sphere.position.x = 40;
        if (sphere.position.y > 40) sphere.position.y = -40;
        if (sphere.position.y < -40) sphere.position.y = 40;
        if (sphere.position.z > 40) sphere.position.z = -40;
        if (sphere.position.z < -40) sphere.position.z = 40;
      });
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      spheresRef.current.forEach(sphere => {
        scene.remove(sphere);
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0" />;
};

export default ThreeBackground;