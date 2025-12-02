import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Fullstack Developer',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led migration to microservices architecture',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ]
    },
    {
      company: 'Digital Solutions Co.',
      position: 'Fullstack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing web applications. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Built 15+ production-ready web applications',
        'Improved code quality through comprehensive testing',
        'Mentored 3 junior developers'
      ]
    },
    {
      company: 'StartupX',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces. Worked closely with designers to implement pixel-perfect designs.',
      achievements: [
        'Developed component library used across 5 products',
        'Improved mobile user experience increasing engagement by 40%',
        'Implemented accessibility standards (WCAG 2.1)'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -left-40 top-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Work Experience
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
            My professional journey in building exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <motion.div 
              className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ originY: 0 }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Animated timeline dot */}
                  <motion.div 
                    className="hidden md:flex absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.5,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                  />

                  {/* Pulse effect */}
                  <motion.div
                    className="hidden md:block absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  <motion.div whileHover={{ x: 5, scale: 1.02 }}>
                    <Card className="md:ml-20 p-6 hover:shadow-2xl transition-all relative overflow-hidden group">
                      {/* Gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        whileHover={{ x: ['-100%', '100%'], opacity: [0, 0.1, 0] }}
                        transition={{ duration: 0.6 }}
                      />

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <motion.h3 
                              className="mb-1 text-blue-600"
                              whileHover={{ x: 5 }}
                            >
                              {exp.position}
                            </motion.h3>
                            <div className="flex items-center gap-2 text-slate-600">
                              <Briefcase className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <motion.div 
                            className="flex items-center gap-2 text-slate-500 mt-2 md:mt-0"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </motion.div>
                        </div>

                        <p className="text-slate-600 mb-4">{exp.description}</p>

                        <div className="space-y-2">
                          <p className="text-slate-500">Key Achievements:</p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start gap-2 text-slate-600"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                              >
                                <motion.span 
                                  className="text-blue-600 mt-1"
                                  whileHover={{ scale: 1.5, rotate: 90 }}
                                >
                                  •
                                </motion.span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
