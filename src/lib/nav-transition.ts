let arrive: (() => void) | null = null;
let viewTransitioning = false;

export function beginViewTransition() {
  viewTransitioning = true;
}

export function endViewTransition() {
  viewTransitioning = false;
}

export function isViewTransitioning() {
  return viewTransitioning;
}

export function waitForNav(ms = 1200) {
  return new Promise<void>((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      arrive = null;
      resolve();
    };
    arrive = finish;
    window.setTimeout(finish, ms);
  });
}

export function signalNav() {
  arrive?.();
}
