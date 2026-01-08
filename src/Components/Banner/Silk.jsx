/* eslint-disable react/no-unknown-property */
import React, { forwardRef, useRef, useMemo, useLayoutEffect, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Color } from 'three';

const hexToNormalizedRGB = (hex) => {
	hex = hex.replace('#', '');
	return [
		parseInt(hex.slice(0, 2), 16) / 255,
		parseInt(hex.slice(2, 4), 16) / 255,
		parseInt(hex.slice(4, 6), 16) / 255
	];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
	const { viewport, gl } = useThree();

	useLayoutEffect(() => {
		if (ref.current && ref.current.material) {
			ref.current.scale.set(viewport.width, viewport.height, 1);
		}
	}, [ref, viewport]);

	useFrame((_, delta) => {
		if (!ref.current || !ref.current.material || !ref.current.material.uniforms) return;
		
		// Check if context is still valid
		if (gl && gl.isContextLost()) {
			console.warn('WebGL context lost in SilkPlane');
			return;
		}
		
		try {
			ref.current.material.uniforms.uTime.value += 0.1 * delta;
		} catch (error) {
			console.error('Error updating Silk uniforms:', error);
		}
	});

	return (
		<mesh ref={ref}>
			<planeGeometry args={[1, 1, 1, 1]} />
			<shaderMaterial
				uniforms={uniforms}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
			/>
		</mesh>
	);
});
SilkPlane.displayName = 'SilkPlane';

const Silk = ({
	speed = 5,
	scale = 1,
	color = '#7B7481',
	noiseIntensity = 1.5,
	rotation = 0
}) => {
	const meshRef = useRef();
	const [error, setError] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [contextLost, setContextLost] = useState(false);
	const canvasRef = useRef(null);

	useEffect(() => {
		setIsMounted(true);
		console.log('Silk component mounted');
		
		// Check WebGL support
		const canvas = document.createElement('canvas');
		const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		if (!gl) {
			console.error('WebGL not supported on this device');
			setError(true);
		} else {
			console.log('WebGL supported, initializing Silk shader');
		}

		// Handle WebGL context loss
		const handleContextLost = (event) => {
			event.preventDefault();
			console.warn('WebGL context lost, attempting recovery...');
			setContextLost(true);
		};

		const handleContextRestored = () => {
			console.log('WebGL context restored');
			setContextLost(false);
		};

		if (canvasRef.current) {
			const canvas = canvasRef.current;
			canvas.addEventListener('webglcontextlost', handleContextLost);
			canvas.addEventListener('webglcontextrestored', handleContextRestored);
			
			return () => {
				canvas.removeEventListener('webglcontextlost', handleContextLost);
				canvas.removeEventListener('webglcontextrestored', handleContextRestored);
			};
		}
	}, []);

	const uniforms = useMemo(
		() => ({
			uSpeed: { value: speed },
			uScale: { value: scale },
			uNoiseIntensity: { value: noiseIntensity },
			uColor: { value: new Color(...hexToNormalizedRGB(color)) },
			uRotation: { value: rotation },
			uTime: { value: 0 }
		}),
		[speed, scale, noiseIntensity, color, rotation]
	);

	if (error || contextLost) {
		return (
			<div style={{
				width: '100%',
				height: '100%',
				background: `linear-gradient(135deg, ${color} 0%, #000000 100%)`,
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 0
			}} />
		);
	}

	if (!isMounted) return null;

	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	// ✅ Disable on mobile for better performance
	if (isMobile) {
		return (
			<div style={{
				width: '100%',
				height: '100%',
				background: `linear-gradient(135deg, ${color} 0%, #000000 100%)`,
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 0
			}} />
		);
	}

	return (
		<Canvas
			ref={canvasRef}
			dpr={isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2)}
			frameloop="always"
			gl={{ 
				alpha: true, 
				antialias: false,
				powerPreference: 'high-performance',
				preserveDrawingBuffer: false,
				failIfMajorPerformanceCaveat: false,
				stencil: false,
				depth: false
			}}
			style={{ 
				width: '100%', 
				height: '100%', 
				display: 'block',
				position: 'absolute',
				top: 0,
				left: 0,
				visibility: 'visible',
				opacity: 1,
				zIndex: 0,
				touchAction: 'none',
				pointerEvents: 'none'
			}}
			onCreated={(state) => {
				console.log('Canvas created successfully');
				const canvas = state.gl.domElement;
				canvasRef.current = canvas;
				
				// Handle context loss
				canvas.addEventListener('webglcontextlost', (e) => {
					e.preventDefault();
					console.warn('WebGL context lost');
					setContextLost(true);
				});
				
				canvas.addEventListener('webglcontextrestored', () => {
					console.log('WebGL context restored');
					setContextLost(false);
				});
			}}
			onError={(error) => {
				console.error('Canvas error:', error);
				setError(true);
			}}
		>
			<SilkPlane ref={meshRef} uniforms={uniforms} />
		</Canvas>
	);
};

export default Silk;
