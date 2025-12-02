import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Award, Coffee, GitBranch, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Stats() {
  const stats = [
    {
      icon: GitBranch,
      value: 50,
      suffix: '+',
      label: 'Projects Completed'
    },
    {
      icon: Users,
      value: 30,
      suffix: '+',
      label: 'Happy Clients'
    },
    {
      icon: Award,
      value: 5,
      suffix: '+',
      label: 'Years Experience'
    },
    {
      icon: Coffee,
      value: 1000,
      suffix: '+',
      label: 'Cups of Coffee'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const rounded = Math.floor(latest);
        (ref.current as any).textContent = rounded + stat.suffix;
      }
    });
    return unsubscribe;
  }, [springValue, stat.suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 }
      }}
      className="text-center text-white"
    >
      <motion.div 
        className="flex justify-center mb-3"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      >
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <stat.icon className="w-6 h-6" />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div ref={ref} className="mb-1">
          0{stat.suffix}
        </div>
        <p className="text-white/80">{stat.label}</p>
      </motion.div>
    </motion.div>
  );
}
