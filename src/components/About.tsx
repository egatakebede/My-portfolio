import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Lightbulb, Rocket } from 'lucide-react';

import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Turning complex problems into elegant, user-friendly solutions'
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always exploring new technologies and best practices'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
        style={{ y }}
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3"
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  src="https://images.unsplash.com/photo-1566915896913-549d796d2166?w=300&h=200&fit=crop"
                  alt="Developer workspace"
                  className="rounded-xl object-cover shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop"
                  alt="Coding setup"
                  className="rounded-xl object-cover shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop"
                  alt="Development tools"
                  className="rounded-xl object-cover shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 flex items-center justify-center text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ opacity }}
          >
            <motion.h3 
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Building Digital Excellence Through Code
            </motion.h3>
            
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-700 leading-relaxed">
                With over 5 years of professional experience, I specialize in architecting and developing 
                enterprise-grade web applications that drive measurable business results. My expertise spans 
                the full development lifecycle, from initial concept and UX design to deployment and optimization.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group"
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="mb-1 group-hover:text-blue-600 transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
