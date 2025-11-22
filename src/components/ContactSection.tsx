import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // 👇👇👇 YOUR FORMSPREE URL IS CORRECTLY PLACED HERE 👇👇👇
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/movbvzzg";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success! Formspree accepted the message.
        toast({
          title: 'Message Sent!',
          description: 'Thanks for reaching out. I will get back to you shortly.',
        });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // Formspree returned an error (like spam detection)
        // We throw an error here to jump to the catch block
        throw new Error('Form submission failed based on response status');
      }
    } catch (error) {
      // Network error or other issue
      // 👇 THIS IS THE FIX: Log the error to the console so it is "used"
      console.error("Contact form error:", error);

      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadfaisal.connect@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 306 8017431' },
    { icon: MapPin, label: 'Location', value: 'Rawalpindi, Pakistan' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/muhammadfaisal333' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-faisal333' },
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/imfaisal111?igsh=YXplNWFuMTB6ZTRp' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to create something amazing
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    name="name" // Added name attribute for Formspree
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                    name="email" // Added name attribute for Formspree
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="min-h-32"
                    name="message" // Added name attribute for Formspree
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
          
          <div>
            <Card className="p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}