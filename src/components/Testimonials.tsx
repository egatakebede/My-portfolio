import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechStartup Inc.',
      content: 'EGATA KEBEDE delivered exceptional work on our platform. His attention to detail and technical expertise exceeded our expectations. The project was completed ahead of schedule.',
      avatar: 'SM',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Co.',
      content: 'Working with EGATA KEBEDE was a pleasure. He brought creative solutions to complex problems and maintained excellent communication throughout the project.',
      avatar: 'MC',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, Innovation Labs',
      content: 'EGATA KEBEDE is a talented developer with deep knowledge of modern web technologies. His code quality and problem-solving skills are outstanding.',
      avatar: 'ER',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 15,
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
            What Clients Say
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
            Testimonials from clients I've had the pleasure to work with
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all relative overflow-hidden group">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />

                {/* Quote icon with animation */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-10 h-10 text-blue-600/20 absolute top-4 right-4" />
                </motion.div>
                
                <div className="relative z-10">
                  {/* Animated stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  <motion.p 
                    className="text-slate-600 mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    "{testimonial.content}"
                  </motion.p>

                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <motion.p
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.name}
                      </motion.p>
                      <p className="text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
