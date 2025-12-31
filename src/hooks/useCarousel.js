import { useEffect, useState, useRef } from "react";

export function useCarousel({
  sliderRef,
  viewportRef,
  itemsLength,
  stepDuration = 800,
  pauseDuration = 3500,
  easing = "cubic-bezier(0.4, 0.0, 0.2, 1)"
}) {
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apiRef = useRef({
    step: 0,
    blockWidth: 0,
    centerOffset: 0,
    currentX: 0,
    slider: null
  });

  useEffect(() => {
    const slider = sliderRef.current;
    const viewport = viewportRef.current;
    if (!slider || !viewport) return;

    const cards = slider.querySelectorAll("[data-gallery-card]");
    if (cards.length < 2) return;

    const sliderRect = slider.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();

    // ─────────────────────────────────────────────
    // STEP REAL (incluye gap)
    // ─────────────────────────────────────────────
    const rect1 = cards[0].getBoundingClientRect();
    const rect2 = cards[1].getBoundingClientRect();
    const step = rect2.left - rect1.left;

    // ─────────────────────────────────────────────
    // CENTRADO EXACTO
    // ─────────────────────────────────────────────
    const cardCenter = rect1.left - sliderRect.left + rect1.width / 2;
    const viewportCenter = viewportRect.width / 2;
    const centerOffset = viewportCenter - cardCenter;

    const blockWidth = step * itemsLength;

    // posición inicial: comienzo del segundo bloque
    let currentX = centerOffset - blockWidth;
    slider.style.transform = `translateX(${currentX}px)`;

    apiRef.current = {
      step,
      blockWidth,
      centerOffset,
      currentX,
      slider
    };

    let animation = null;
    let cancelled = false;

    const animateStep = () => {
      if (cancelled) return;

      const nextX = currentX - step;

      animation = slider.animate(
        [
          { transform: `translateX(${currentX}px)` },
          { transform: `translateX(${nextX}px)` }
        ],
        {
          duration: stepDuration,
          easing,
          fill: "forwards"
        }
      );

      animation.onfinish = () => {
        if (cancelled) return;

        currentX = nextX;
        apiRef.current.currentX = currentX;

        // índice lógico
        currentIndexRef.current = (currentIndexRef.current + 1) % itemsLength;
        setCurrentIndex(currentIndexRef.current);

        //loop infinito
        if (currentX <= centerOffset - blockWidth * 2) {
          currentX += blockWidth;
          slider.style.transform = `translateX(${currentX}px)`;
          apiRef.current.currentX = currentX;
        }

        setTimeout(animateStep, pauseDuration);
      };
    };

    animateStep();

    return () => {
      cancelled = true;
      animation?.cancel();
    };
  }, [
    sliderRef,
    viewportRef,
    itemsLength,
    stepDuration,
    pauseDuration,
    easing
  ]);

  // ─────────────────────────────────────────────
  // API PÚBLICA → DOTS
  // ─────────────────────────────────────────────
  const goTo = (index) => {
    const api = apiRef.current;
    if (!api.slider) return;

    const { step, blockWidth, centerOffset, slider } = api;

    const targetX =
      centerOffset - blockWidth - step * index;

    slider.getAnimations().forEach((a) => a.cancel());

    slider.animate(
      [
        { transform: `translateX(${api.currentX}px)` },
        { transform: `translateX(${targetX}px)` }
      ],
      {
        duration: stepDuration,
        easing,
        fill: "forwards"
      }
    ).onfinish = () => {
      api.currentX = targetX;
      currentIndexRef.current = index;
      setCurrentIndex(index);
    };
  };

  return {
    currentIndex,
    goTo
  };


}
