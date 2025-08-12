import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality outcomes for our clients.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients are at the heart of everything we do. We build lasting relationships based on trust and results.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accuracy and attention to detail are fundamental to our approach in all financial matters.'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'We help businesses achieve sustainable growth through strategic financial planning and guidance.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Founded as a single individual company'},
    { year: '2021', event: 'Expanded to serve mid-size businesses' },
    { year: '2023', event: 'Introduced digital accounting solutions' },
    { year: '2024', event: 'Launched comprehensive online services' },
    { year: '2025', event: 'Serving 500+ satisfied clients' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold gradient-text mb-6">About Nest Professionals</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 5 years, we've been helping businesses and individuals achieve their financial goals 
              through expert accounting services, strategic planning, and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                 The firm was established in the year 2019 with the aim of offering accounting and audit solutions
                 to the general public.Over time the firm has grown its client base to offering solutions to various clients
                 cutting across all sectors eg Petroleum & Energy sector,Retail Sector,Schools etc,hardwares, petrol stations,
                 the government etc.
                </p>
                </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide the general public with the most accessible and real time accounting services 
                in the most simplified  form.
              </p>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most innovative and reliable accounting solution provider in Kenya and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground loading-relaxed">{value.description}</p>
              </CardContent>
            </Card> 
          ))}
        </div>
      </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Key milestones to our growth and development
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-primary to-accent h-full"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white rounded-lg p-6 shadow-lg border border-border">
                            <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                            <div className="text-muted-foreground">{milestone.event}</div>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-white"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our family of satisfied clients and discover why businesses trust us 
              with their most important financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold px-8 py-3 rounded-lg font-semibold">
                Schedule a Meeting
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About