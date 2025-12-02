import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@alexjohnson.dev',
      link: 'mailto:hello@alexjohnson.dev'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@alexjohnson',
      link: 'https://github.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Alex Johnson',
      link: 'https://linkedin.com'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
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
            Let's Work Together
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
            I'm currently available for freelance projects and full-time opportunities. 
            Let's discuss how I can help bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Start Your Project
            </motion.h3>
            <motion.p 
              className="text-slate-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Whether you need a complete web application, want to discuss a technical challenge, 
              or explore collaboration opportunities, I'm here to help. I typically respond within 24 hours.
            </motion.p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="p-4 hover:shadow-xl transition-all group relative overflow-hidden">
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />

                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 relative z-10"
                      >
                        <motion.div 
                          className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.1 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <info.icon className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <p className="text-slate-500">{info.title}</p>
                          <motion.p 
                            className="group-hover:text-blue-600 transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            {info.value}
                          </motion.p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 relative z-10">
                        <motion.div 
                          className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.1 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <info.icon className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <p className="text-slate-500">{info.title}</p>
                          <p>{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 relative overflow-hidden group">
              {/* Animated gradient border effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block mb-2 text-slate-700">
                    Name
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block mb-2 text-slate-700">
                    Email
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block mb-2 text-slate-700">
                    Message
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 relative overflow-hidden group/btn"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
