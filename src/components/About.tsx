import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Lightbulb, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzYyNzcwMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="relative rounded-2xl w-full h-auto object-cover shadow-xl"
              />
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
            
            <motion.p 
              className="text-slate-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              With over 5 years of professional experience, I specialize in architecting and developing 
              enterprise-grade web applications that drive measurable business results. My expertise spans 
              the full development lifecycle, from initial concept and UX design to deployment and optimization.
            </motion.p>
            
            <motion.p 
              className="text-slate-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm passionate about clean code, performance optimization, and creating intuitive user experiences. 
              My approach combines technical excellence with business acumen, ensuring solutions that are both 
              technically sound and commercially viable.
            </motion.p>

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
