import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //handle form submission
    console.log('Form Submitted:', formData);
    //Reset form
    setFormData({
       name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const officeHours = [
    {day: 'Monday - Friday',  hours:  '8:00 AM - 6:00 PM'},
    { day: 'Weekends-', hours: 'Closed' },
    
  ];

  return (
    <div className="min-h-screen pt-20">
      {/*Hero Section */}
      {/*<section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold gradient-text mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to take control of your finances? Get in touch with our expert team 
              for a free consultation and discover how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>*/}

          <section
                  className="py-20 bg-cover bg-center relative"
                  style={{
                    backgroundImage: "url('/src/assets/images/contact image.jpg')", // <-- Replace this with your image path
                  }}
                >
                  {/* Optional overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/30"></div>

                  <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                      <p className="text-xl leading-relaxed">
                        Ready to take control of your finances? Get in touch with our expert team 
                        for a free consultation and discover how we can help your business thrive.
                      </p>
                    </div>
                  </div>
            </section>












      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Our Office</h3>
                      <p className="text-muted-foreground">
                        Koko Savannah Building<br />
                        Along Club Road<br/>
                        Rm.103<br />
                        Nakuru-Kenya
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-2">
                        <a href="tel:+254 714 992 094" className="hover:text-accent transition-colors">
                          +254 714 992 094
                        </a>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Free consultation available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:nestprofessionals@gmail.com" className="hover:text-accent transition-colors">
                          nestprofessionals@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{schedule.day}</span>
                            <span className="text-foreground font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold gradient-text mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Send us a message and we'll get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Please describe your needs or questions in detail..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-hero">
                      <Send className="mr-2 w-5 h-5" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of the business district
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Map integration would be implemented here<br />
                    with your preferred mapping service
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: 'How much do your services cost?',
                answer: 'Our pricing varies depending on the complexity and scope of services needed. We offer free consultations to discuss your specific needs and provide accurate pricing.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from sole proprietors to large corporations. Our services are scalable to meet your specific needs.'
              },
              {
                question: 'How quickly can you complete my tax return?',
                answer: 'Most individual tax returns can be completed within 3-5 business days, while business returns may take 5-10 business days depending on complexity.'
              },
              {
                question: 'Do you offer virtual consultations?',
                answer: 'Yes, we offer both in-person and virtual consultations via video conference to accommodate your schedule and preferences.'
              }
            ].map((faq, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact