import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { useState } from 'react';

export function Projects() {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Built a scalable e-commerce solution processing 10K+ daily transactions with real-time inventory sync, secure payment processing, and comprehensive admin analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Team Collaboration Suite',
      description: 'Real-time project management platform with task tracking, team messaging, video calls, and file sharing. Serves 5,000+ active users across 100+ organizations.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?w=600&h=400&fit=crop',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Analytics Platform',
      description: 'AI-powered analytics dashboard aggregating data from multiple social platforms. Features include sentiment analysis, automated reporting, and ROI tracking.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Python', 'Django', 'Redis', 'TensorFlow'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
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
            A selection of projects demonstrating my technical expertise and problem-solving capabilities
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), {
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
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating badge */}
          <motion.div
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              View Project
            </span>
          </motion.div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <motion.h3 
            className="mb-2"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-slate-600 mb-4 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, i: number) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <Badge variant="outline">{tag}</Badge>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 relative overflow-hidden group/btn"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
