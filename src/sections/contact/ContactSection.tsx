import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Copy,
  Check,
  Download,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RESUME_URL } from '@/constants/navigation';
import { SOCIAL_LINKS } from '@/constants/socials';
import { fadeIn, staggerContainer } from '@/lib/motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API submission latency
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);

    toast.success('Message Sent Successfully!', {
      description: `Thank you ${data.name}, I will respond to your inquiry at ${data.email} within 24 hours.`,
    });
    reset();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('siddhiraj.dev@gmail.com');
    setCopiedEmail(true);
    toast.success('Email Copied to Clipboard!', {
      description: 'siddhiraj.dev@gmail.com is copied to your clipboard.',
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <AnimatedSection id="contact" className="relative bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 h-96 w-96 bg-primary/10 blur-[180px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <Badge variant="glow" className="px-3.5 py-1 text-xs">
          Get In Touch
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          Let&apos;s Build <span className="gradient-text-accent">Something Great Together</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Available for full-time senior engineering roles, architectural consultations, and ambitious projects.
        </p>
      </div>

      {/* Grid: Left Contact Info Cards & Right Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Social Triggers */}
        <motion.div
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Quick Copy Email Card */}
          <Card glass className="p-6 rounded-2xl space-y-4 border border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Direct Email
                </p>
                <p className="text-base font-heading font-bold text-foreground">
                  siddhiraj.dev@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <Button
                variant="glow"
                size="sm"
                className="w-full"
                onClick={handleCopyEmail}
                leftIcon={copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              >
                {copiedEmail ? 'Copied!' : 'Copy Email Address'}
              </Button>
            </div>
          </Card>

          {/* Location & Availability Card */}
          <Card glass className="p-6 rounded-2xl space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Based in India • Available for Global Remote Roles</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Response Time: &lt; 24 Hours (IST / UTC+5:30)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-emerald-500 font-medium">
                <Sparkles className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Open for Full-Time & Contract Architectures</span>
              </div>
            </div>
          </Card>

          {/* Social Links & Resume Card */}
          <Card glass className="p-6 rounded-2xl space-y-5">
            <div>
              <h3 className="text-sm font-bold font-heading uppercase text-foreground tracking-wider mb-3">
                Connect via Social Networks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon =
                    social.id === 'github'
                      ? Github
                      : social.id === 'linkedin'
                      ? Linkedin
                      : Mail;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card flex items-center space-x-2.5 p-3 rounded-xl hover:border-primary/40 hover:text-primary transition-all text-xs font-semibold"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-border/40">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full" leftIcon={<Download className="h-4 w-4" />}>
                  Download Official Resume
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <Card glass className="p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xl space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-2xl font-heading font-bold text-foreground">
                Send a Message
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Fill out the form below to initiate direct communication.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <motion.div variants={staggerContainer(0.08, 0)} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="John Doe"
                        {...register('name')}
                        className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-medium">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...register('email')}
                        className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-medium">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Project Opportunity / Senior Role Inquiry"
                      {...register('subject')}
                      className={errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-500 font-medium">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Hi Siddhi, I would like to discuss an opportunity..."
                      rows={5}
                      {...register('message')}
                      className={errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="h-4 w-4" />}
                    >
                      Send Message
                    </Button>
                  </div>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
