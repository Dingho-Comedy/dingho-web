"use client";

interface ConfettiOptions {
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  ticks?: number;
  origin?: {
    x?: number;
    y?: number;
  };
  colors?: string[];
  shapes?: ("square" | "circle")[];
  scalar?: number;
  zIndex?: number;
  disableForReducedMotion?: boolean;
}

interface Particle {
  x: number;
  y: number;
  wobble: number;
  wobbleSpeed: number;
  velocity: { x: number; y: number };
  angle2D: number;
  tiltAngle: number;
  color: { front: string; back: string };
  shape: "square" | "circle";
  tick: number;
  totalTicks: number;
  decay: number;
  drift: number;
  random: number;
  tiltSin: number;
  tiltCos: number;
  wobbleX: number;
  wobbleY: number;
  gravity: number;
  ovalScalar: number;
  scalar: number;
}

export function confetti(options: ConfettiOptions = {}): void {
  const defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    origin: { x: 0.5, y: 0.5 },
    colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
    shapes: ["square", "circle"] as ("square" | "circle")[],
    scalar: 1,
    zIndex: 100,
    disableForReducedMotion: false,
  };

  const opts = { ...defaults, ...options };

  if (opts.disableForReducedMotion && window.matchMedia("(prefers-reduced-motion)").matches) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = String(opts.zIndex);
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const particles: Particle[] = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  function createParticle(origin: { x: number; y: number }): Particle {
    const angle = opts.angle! * (Math.PI / 180);
    const spread = opts.spread! * (Math.PI / 180);
    const velocity = opts.startVelocity!;

    const particleAngle = angle + randomInRange(-spread / 2, spread / 2);
    const vx = Math.cos(particleAngle) * velocity;
    const vy = Math.sin(particleAngle) * velocity;

    const color = opts.colors![Math.floor(Math.random() * opts.colors!.length)];
    const shape = opts.shapes![Math.floor(Math.random() * opts.shapes!.length)];

    return {
      x: origin.x * canvas.width,
      y: origin.y * canvas.height,
      wobble: randomInRange(0, 10),
      wobbleSpeed: randomInRange(0.075, 0.125),
      velocity: { x: vx, y: vy },
      angle2D: randomInRange(0, 2 * Math.PI),
      tiltAngle: 0,
      color: { front: color, back: color },
      shape,
      tick: 0,
      totalTicks: opts.ticks!,
      decay: opts.decay!,
      drift: opts.drift!,
      random: Math.random(),
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity!,
      ovalScalar: 0.6,
      scalar: opts.scalar!,
    };
  }

  for (let i = 0; i < opts.particleCount!; i++) {
    particles.push(createParticle({ x: opts.origin!.x ?? 0.5, y: opts.origin!.y ?? 0.5 }));
  }

  function updateParticle(particle: Particle): boolean {
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y + particle.gravity * 3;
    particle.velocity.x += particle.drift;
    particle.velocity.y += particle.gravity;
    particle.velocity.x *= particle.decay;
    particle.velocity.y *= particle.decay;

    particle.wobble += particle.wobbleSpeed;
    particle.wobbleX = particle.x + 10 * particle.scalar * Math.cos(particle.wobble);
    particle.wobbleY = particle.y + 10 * particle.scalar * Math.sin(particle.wobble);

    particle.tiltAngle += 0.1;
    particle.tiltSin = Math.sin(particle.tiltAngle);
    particle.tiltCos = Math.cos(particle.tiltAngle);

    particle.tick++;

    return particle.tick < particle.totalTicks;
  }

  function drawParticle(particle: Particle) {
    const x = particle.wobbleX;
    const y = particle.wobbleY;

    ctx!.save();
    ctx!.translate(x, y);
    ctx!.rotate(particle.tiltAngle);

    const size = 10 * particle.scalar;

    if (particle.shape === "circle") {
      ctx!.beginPath();
      ctx!.arc(0, 0, size / 2, 0, 2 * Math.PI);
      ctx!.fillStyle = particle.color.front;
      ctx!.fill();
    } else {
      ctx!.fillStyle = particle.color.front;
      ctx!.fillRect(-size / 2, -size / 2, size, size);
    }

    ctx!.restore();
  }

  function animate() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      if (updateParticle(particles[i])) {
        drawParticle(particles[i]);
      } else {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      document.body.removeChild(canvas);
      window.removeEventListener('resize', resizeCanvas);
    }
  }

  animate();
}

interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options?: ConfettiOptions;
  children?: React.ReactNode;
}

export function ConfettiButton({
  options,
  children,
  ...props
}: ConfettiButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      ...options,
      origin: { x, y },
    });

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
