import { useRef, useEffect, useState } from "react";
import styles from "../../styles/components/square.module.scss";

export default function S001() {
  
  const rendererRef = useRef(null);
  const capturerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const renderer = rendererRef.current;
    const rendererContext = renderer.getContext('2d');
    const rendererParent = renderer.parentElement;
    const capturer = capturerRef.current;
    const capturerContext = capturer.getContext('2d');
    const button = buttonRef.current;

    let clickX = [];
    let clickY = [];
    let clickDrag = [];
    let paint;

    const addClick = (x, y, dragging) => {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    };

    const redrawCaptured = () => {
      capturerContext.clearRect(0, 0, capturerContext.canvas.width, capturerContext.canvas.height);
  
      capturerContext.lineJoin = 'round';
      capturerContext.lineWidth = 4;
  
      clickX.forEach((click, i) => {
        capturerContext.beginPath();
        if (clickDrag[i]) {
          capturerContext.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
          capturerContext.moveTo(clickX[i] - 1, clickY[i]);
        }
        capturerContext.lineTo(clickX[i], clickY[i]);
        capturerContext.closePath();
        capturerContext.strokeStyle = 'black';
        capturerContext.stroke();
      });
    };

    capturer.addEventListener('mousedown', (e) => {

      const rect = capturer.getBoundingClientRect();
      const mouseX = e.pageX - rect.left;
      const mouseY = e.pageY - rect.top;
      // debugger
      paint = true;
      addClick(mouseX, mouseY);
      redrawCaptured();
    });
  
    capturer.addEventListener('touchstart', (e) => {
      e.preventDefault;
      const rect = capturer.getBoundingClientRect();
      const mouseX = e.pageX - rect.left;
      const mouseY = e.pageY - rect.top;
  
      paint = true;
      addClick(mouseX, mouseY);
      redrawCaptured();
    });

    capturer.addEventListener('mousemove', (e) => {
      if (paint) {
        const rect = capturer.getBoundingClientRect();
        const mouseX = e.pageX - rect.left;
        const mouseY = e.pageY - rect.top;
        addClick(mouseX, mouseY, true);
        redrawCaptured();
      }
    });

    capturer.addEventListener('mouseup', () => {
      paint = false;
    });
  
    capturer.addEventListener('mouseleave', () => {
      paint = false;
    });
  
    const capturedStore = [];

    const storeCapture = () => {
      capturerContext.clearRect(0, 0, capturerContext.canvas.width, capturerContext.canvas.height);
      const curState = {
        clickX: clickX,
        clickY: clickY,
        clickDrag: clickDrag
      }
      clickX = [];
      clickY = [];
      clickDrag = [];
      capturedStore.push(curState)
      render()
    }

    button.addEventListener('click', () => storeCapture())

    const randNumBt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const range = (start, end) => {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    rendererContext.canvas.width = rendererParent.clientWidth;
    rendererContext.canvas.height = rendererParent.clientWidth;

    window.addEventListener('resize', () => {
      rendererContext.canvas.width = rendererParent.clientWidth;
      rendererContext.canvas.height = rendererParent.clientWidth;
    });

    const render = () => {
      rendererContext.clearRect(0, 0, rendererContext.canvas.width, rendererContext.canvas.height);
  
      rendererContext.lineJoin = 'round';
      rendererContext.lineWidth = 1;
  
      capturedStore.forEach(({ clickX, clickY, clickDrag }) => {
        const randNumArr = range(randNumBt(50, 100), randNumBt(150, 300))
  
        randNumArr.forEach((num) => {
          const newClickX = []
          const newClickY = []
  
          const randNum1 = randNumBt(-10, 75)
          const randNum2 = randNumBt(-10, 75)
  
          const smRandNum1 = randNumBt(1, 3)
          const smRandNum2 = randNumBt(1, 3)
  
          clickX.forEach((click) => {
             newClickX.push((click + (randNum1*num/smRandNum1))/3)
          })
  
          clickY.forEach((click) => {
            newClickY.push((click + (randNum2*num/smRandNum2))/3)
          })
  
          newClickX.forEach((click, i) => {
            rendererContext.beginPath();
            if (clickDrag[i]) {
              rendererContext.moveTo(newClickX[i - 1], newClickY[i - 1]);
            } else {
              rendererContext.moveTo(newClickX[i] - 1, newClickY[i]);
            }
            rendererContext.lineTo(newClickX[i], newClickY[i]);
            rendererContext.closePath();
            rendererContext.strokeStyle = 'black';
            rendererContext.stroke();
          });
        })
      })
    }
  }, []);

  return (
    <article className={styles.squareContainer}>
      <canvas ref={rendererRef} className={styles.s001Renderer} width="1px" height="1px" />
      <canvas ref={capturerRef} className={styles.s001Capturer} width="80px" height="80px" />
      <button ref={buttonRef} className={styles.s001button} title="Add to Canvas">+</button>
    </article>
  );
}