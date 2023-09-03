import React, { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

export default function EmojiCanvas(props) {
  const [width, setWindowW] = useState('');
  const [height, setWindowH] = useState('');

  const handleResize = (parent) => {
    setWindowW(parent.offsetWidth);
    setWindowH(parent.offsetHeight);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;

    setWindowW(parent.offsetWidth);
    setWindowH(parent.offsetHeight);

    let timeout = false;
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleResize(parent), 250);
    });

    const Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Bodies = Matter.Bodies,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite;

    const engine = Engine.create();
    const context = canvas.getContext('2d');

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        wireframes: false,
        background: 'transparent'
      }
    });

    Engine.run(engine);
    Render.run(render);

    const ground = Bodies.rectangle(parent.offsetWidth/2, parent.offsetHeight+26, parent.offsetWidth, 50, { isStatic: true }, {fillStyle: 'transparent'});
    const leftWall = Bodies.rectangle(-26, parent.offsetHeight+26, 50, parent.offsetHeight*3, { isStatic: true }, {fillStyle: 'transparent'});
    const rightWall = Bodies.rectangle(parent.offsetWidth+26, parent.offsetHeight+26, 50, parent.offsetHeight*3, { isStatic: true }, {fillStyle: 'transparent'});
    World.add(engine.world, [ground, leftWall, rightWall]);

    const emojis = ['👩‍🔧', '👑', '💼', '🏖️', '💻', '📈', '🎯', '💡', '🎵', '🎨', '🖥️', '🗝️', '🌍', '📚', '🎮', '☀️', '📋', '🖼️', '🎶', '🌱', '🧱'];
    
    emojis.forEach(emoji => {
      const emojiBody = Bodies.circle(200, 0, 40, {
        frictionAir: 0.01,
        restitution: 0.5,
        friction: 0.6,
        render: {
          sprite: {
            texture: `https://emojicdn.elk.sh/${emoji}`,
            xScale: 1,
            yScale: 1
          }
        }
      });
  
      World.add(engine.world, [emojiBody]);
    });

    const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Composite.add(engine.world, mouseConstraint);

    context.fillStyle = 'hsla(242,100%,70%,1)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [])
  
  return (
    <canvas ref={canvasRef} {...props} width={width} height={height}></canvas>
  );
}