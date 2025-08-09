import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "../components/ui/button";

const Blog = () => {
  const featuredPost = {
    title: '2024 Tax Planning Strategies for Small Businesses',
    excerpt: 'Discover essential tax planning strategies that can help your small business save money and stay compliant with the latest tax regulations.',
    author: 'Jennifer Martinez',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Tax Planning',
    image: '/placeholder-blog-featured.jpg'
  };

  const blogPosts = [
    {
      title: 'Understanding the New Depreciation Rules for 2024',
      excerpt: 'Learn about the latest changes to depreciation rules and how they might affect your business assets.',
      author: 'Michael Thompson',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Tax Updates'
    },
    {
      title: 'QuickBooks vs Excel: Which is Better for Your Business?',
      excerpt: 'Compare the pros and cons of using QuickBooks versus Excel for your business accounting needs.',
      author: 'Sarah Chen',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      title: 'Cash Flow Management: Best Practices for Success',
      excerpt: 'Essential tips and strategies for maintaining healthy cash flow in your business.',
      author: 'David Rodriguez',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Business Finance'
    },
    {
      title: 'Preparing for Your Annual Audit: A Complete Checklist',
      excerpt: 'Everything you need to know to prepare for your annual audit and ensure a smooth process.',
      author: 'Emily Johnson',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Audit'
    },
    {
      title: 'Retirement Planning for Business Owners',
      excerpt: 'Unique considerations and strategies for business owners planning for retirement.',
      author: 'Jennifer Martinez',
      date: 'March 3, 2024',
      readTime: '6 min read',
      category: 'Financial Planning'
    },
    {
      title: 'Common Bookkeeping Mistakes and How to Avoid Them',
      excerpt: 'Identify and prevent the most common bookkeeping errors that can hurt your business.',
      author: 'Sarah Chen',
      date: 'March 1, 2024',
      readTime: '5 min read',
      category: 'Bookkeeping'
    }
  ];

  const categories = [
    'All Posts',
    'Tax Planning',
    'Business Finance',
    'Bookkeeping',
    'Audit',
    'Technology',
    'Financial Planning'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
  className="py-20 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/src/assets/images/blogimage.jpg')", // <-- Replace this with your image path
  }}
>
  {/* Optional overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-5xl font-bold gradient-text mb-6">
        Insights & Resources
      </h1>
      <p className="text-xl leading-relaxed">
        Stay informed with the latest accounting news, tax updates, and financial strategies 
        to help your business succeed.
      </p>
    </div>
  </div>
</section>



      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-8">Featured Article</h2>
            <Card className="card-hover overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12 flex items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 hover:text-accent transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-primary">{featuredPost.author}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {featuredPost.date}
                          </div>
                        </div>
                      </div>
                      <Button className="btn-hero">
                        <span>Read More</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 min-h-[300px] flex items-center justify-center">
                  <div className="text-6xl text-white/30">📊</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary'
                } `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index ) => (
              <Card key={index} className="card-hover group cursor-pointer">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 h-48 flex items-center justify-center">
                  <div className="text-4xl text-muted-foreground/30">📝</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-primary">{post.author}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/*Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest accounting insights, tax updates, and business tips 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
              />
              <Button className="btn-gold px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog