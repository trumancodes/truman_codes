import { useRef, useEffect, useState } from 'react';
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
    const Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Body = Matter.Body,
          Bodies = Matter.Bodies,
          Vector = Matter.Vector,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite;
          
    setWindowW(parent.offsetWidth);
    setWindowH(parent.offsetHeight);

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

    let ground = Bodies.rectangle(parent.offsetWidth/2, parent.offsetHeight+26, parent.offsetWidth * 2, 50, { isStatic: true }, {fillStyle: 'transparent'});
    let leftWall = Bodies.rectangle(-26, parent.offsetHeight+26, 50, parent.offsetHeight*3, { isStatic: true }, {fillStyle: 'transparent'});
    let rightWall = Bodies.rectangle(parent.offsetWidth+26, parent.offsetHeight+26, 50, parent.offsetHeight*3, { isStatic: true }, {fillStyle: 'transparent'});
    World.add(engine.world, [ground, leftWall, rightWall]);

    let timeout = false;
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleResize(parent)
        Body.setPosition(ground, Vector.create(parent.offsetWidth/2, parent.offsetHeight+26))
        Body.setPosition(leftWall, Vector.create(-26, parent.offsetHeight+26))
        Body.setPosition(rightWall, Vector.create(parent.offsetWidth+26, parent.offsetHeight+26))
      }
      , 250);
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

    const emojiSpots = [...document.getElementsByClassName('emojiSpot')];
    const usedEmojis = [];

    const randomNumber = (max, min) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
  
    emojiSpots.forEach((emojiSpot) => {
      emojiSpot.addEventListener('mouseover', (e) => {
        let dropSpot = 0

        if (e.clientX <= window.innerWidth / 2) {
          dropSpot = randomNumber(0, (window.innerWidth / 4) - 50);
        } else {
          dropSpot = randomNumber((window.innerWidth - window.innerWidth / 4) + 50, window.innerWidth);
        }

        const emoji = emojiSpot.dataset.emoji

        if (!usedEmojis.includes(emoji)) {
          const emojiBody = Bodies.circle(dropSpot, 0, 50, {
            frictionAir: 0.01,
            restitution: 0.5,
            friction: 0.6,
            render: {
              sprite: {
                texture: `https://emojicdn.elk.sh/${emoji}`,
                xScale: .75,
                yScale: .75
              }
            }
          });
      
          World.add(engine.world, [emojiBody]);
          usedEmojis.push(emoji);

          emojiSpot.style.background = 'none';
        }
      });
    });
  }, [])
  
  return (
    <canvas ref={canvasRef} {...props} width={width} height={height}></canvas>
  );
}