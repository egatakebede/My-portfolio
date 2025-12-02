import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { useState } from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Redux', 'Motion/Framer'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Jest', 'Linux', 'Nginx'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design & Others',
      skills: ['Figma', 'UI/UX', 'REST APIs', 'WebSocket', 'Microservices', 'Agile'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-slate-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={categoryIndex} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
    >
      <Card className="p-6 h-full hover:shadow-2xl transition-shadow relative overflow-hidden group">
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}
          initial={false}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        <div className="relative z-10">
          <motion.h3 
            className={`mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
            animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {category.title}
          </motion.h3>
          
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill: string, skillIndex: number) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1 + skillIndex * 0.05, 
                  duration: 0.3 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
