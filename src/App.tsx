/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Instagram, Heart, Calendar, User, MessageSquare, Star, ChevronLeft, ChevronRight, CheckCircle, Mail, MapPin, Clock, Info, ShoppingBag, Sparkles, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    communication: "email",
    occasion: "",
    date: "",
    allergies: "",
    dessertType: "",
    quantity: "",
    designStyle: "",
    flavorDetails: "",
    additionalDetails: "",
    source: "",
    disclaimer: false
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [formStep, setFormStep] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNext = () => {
    if (formStep === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill in all required fields (Name, Email, Phone).");
        return;
      }
    } else if (formStep === 2) {
      if (!formData.date || !formData.allergies) {
        alert("Please fill in all required fields (Date, Allergies).");
        return;
      }
    }
    setFormStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setFormStep(prev => prev - 1);
  };

  const reviews = [
    {
      text: "Zakilo made my daughter's first birthday so special. The cake wasn't just beautiful; it tasted like it was made with so much love. It felt like home.",
      author: "Sarah M., North York"
    },
    {
      text: "I've never had a chocolate cake this moist. You can tell it's real ingredients, not that factory stuff. Zakilo is our family's new tradition.",
      author: "David L., Downtown Toronto"
    },
    {
      text: "The attention to detail is incredible. From the first inquiry to the delivery, everything felt so personal. Meaning really doesn't have to be loud.",
      author: "Elena R., Scarborough"
    }
  ];

  const menuCategories = [
    {
      title: "Brownies",
      items: ["Classic Fudge", "Biscoff Swirl", "Tiramisu", "Dubai Chocolate"]
    },
    {
      title: "Cookies",
      items: ["Brown Butter Choc Chunk", "Red Velvet", "Dubai Chocolate", "Triple Choc NYC-Style"]
    },
    {
      title: "Mini Cheesecakes",
      items: ["Ube", "Classic (Salted Caramel, Zobo Jam)", "Chocolate Delight"]
    },
    {
      title: "Donuts",
      items: ["Ube White Chocolate", "Zobo Jam Filled", "Red Velvet"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep !== 3) return;
    alert("Thank you for your inquiry! I'll get back to you personally very soon. - Omaina");
  };

  return (
    <div className="min-h-screen selection:bg-frosting-pink selection:text-chocolate textured-bg flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-5 md:px-6 py-4 flex justify-between items-center bg-vanilla/80 backdrop-blur-sm border-b border-beige/50">
        <div className="text-2xl md:text-3xl font-handwritten font-bold text-chocolate">Zakilo Bakes</div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-sage transition-colors">The Baker</a>
          <a href="#menu" className="hover:text-sage transition-colors">Menu</a>
          <a href="#catering" className="hover:text-sage transition-colors">Catering</a>
          <a href="#contact" className="hover:text-sage transition-colors">Order</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/zakilobakes"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-2 hover:bg-beige rounded-full transition-colors"
          >
            <Instagram size={20} />
          </a>
          <button
            className="md:hidden p-2 hover:bg-beige rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-chocolate" /> : <Menu size={24} className="text-chocolate" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[68px] left-0 w-full bg-vanilla/95 backdrop-blur-md z-40 border-b border-beige/50 py-6 px-6 flex flex-col gap-6 shadow-soft md:hidden"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-chocolate uppercase tracking-widest hover:text-sage transition-colors">The Baker</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-chocolate uppercase tracking-widest hover:text-sage transition-colors">Menu</a>
            <a href="#catering" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-chocolate uppercase tracking-widest hover:text-sage transition-colors">Catering</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-chocolate uppercase tracking-widest hover:text-sage transition-colors">Order</a>
            <div className="w-full h-px bg-beige/50 my-2"></div>
            <a
              href="https://instagram.com/zakilobakes"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-bold text-chocolate uppercase tracking-widest hover:text-sage transition-colors"
            >
              <Instagram size={20} /> Instagram
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-24 md:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 mt-8 md:mt-0"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl mb-6 leading-tight">
              <span className="text-sage italic">Baked with Heart</span> <br />
              in Toronto.
            </h1>

            {/* Mobile Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative block lg:hidden w-full mb-8 mt-2"
            >
              <div className="absolute -top-6 -right-2 w-24 h-24 bg-frosting-pink rounded-full -z-10 blur-2xl opacity-50"></div>
              <div className="rounded-[2rem] overflow-hidden shadow-soft border-4 border-white relative z-0">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
                  alt="Close up of cake texture"
                  className="w-full h-[280px] sm:h-[350px] object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 bg-white p-4 rounded-2xl shadow-soft border border-beige max-w-[150px] z-10">
                <div className="flex gap-1 mb-1 5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-chocolate text-chocolate" />)}
                </div>
                <p className="text-[10px] font-bold italic">"The best chocolate cake in the city, hands down."</p>
              </div>
            </motion.div>
            <p className="text-lg md:text-xl text-chocolate/80 mb-10 max-w-lg leading-relaxed font-medium">
              Celebrate your special moments with treats that taste as real as they look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto text-center px-8 md:px-10 py-5 bg-chocolate text-vanilla rounded-2xl font-bold text-lg shadow-soft hover:bg-chocolate/90 transition-all"
              >
                Order Your Cake
              </motion.a>
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto text-center px-8 md:px-10 py-5 bg-white text-chocolate border border-beige rounded-2xl font-bold text-lg shadow-soft hover:bg-beige/20 transition-all"
              >
                View Menu
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-10 -right-4 md:-right-10 w-32 h-32 bg-frosting-pink rounded-full -z-10 blur-3xl opacity-50"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-soft border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200"
                alt="Close up of cake texture"
                className="w-full h-[350px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-soft border border-beige max-w-[170px] md:max-w-[200px]">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-chocolate text-chocolate" />)}
              </div>
              <p className="text-[10px] md:text-xs font-bold italic">"The best chocolate cake in the city, hands down."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Baker */}
      <section id="about" className="py-16 md:py-24 px-5 md:px-6 bg-beige/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
          <div className="order-2 md:order-1 pt-4 md:pt-0">
            <div className="rounded-[2rem] overflow-hidden shadow-soft rotate-[-2deg] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                alt="Omaina Ozako decorating a cake"
                className="w-full h-[350px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <span className="text-sage font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Meet Omaina Ozako</span>
            <h2 className="text-4xl md:text-6xl mb-6 md:mb-8">The baker behind <br className="hidden md:block" /> the apron</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-chocolate/80 text-left">
              <p>
                Hi there, 👋🏾
              </p>
              <p>
                My name is Omaina, I am the baker behind Zakilo Bakes. The name is a tribute to my dad as he is forever my inspiration. He taught me what it means to work with passion and so I thought it fitting to name the business after him.
              </p>
              <p>
                Baking is my therapy, it is where I go when I need an outlet. It has also become a way for me to show my love to those around me.
              </p>
              <p>
                Welcome to my slice of the internet where I thoughtfully curate desserts for moments that matter. When you order from me, you're not just getting a sweet cupcake treat—you're getting a piece of my heart.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-frosting-pink flex items-center justify-center">
                <Heart className="text-chocolate fill-chocolate" size={20} />
              </div>
              <span className="font-handwritten text-2xl">Sincerely, Omaina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-7xl mb-4">Dessert Menu</h2>
            <p className="text-base md:text-lg text-chocolate/60 max-w-2xl mx-auto italic">
              Gluten-free and vegan options available ✨ Items priced per dozen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {menuCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-soft border border-beige"
              >
                <h3 className="text-2xl mb-6 border-b border-beige pb-2 text-sage">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-chocolate/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-frosting-pink"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-frosting-pink/10 p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-frosting-pink/20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl mb-4">Cupcake Menu</h3>
                <p className="text-chocolate/70 mb-6">Mix and match cupcake and frosting flavors for a unique creation.</p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-beige pb-2">
                    <span className="font-bold">Standard</span>
                    <span className="italic">$60 / dozen</span>
                  </div>
                  <div className="flex justify-between border-b border-beige pb-2">
                    <span className="font-bold">Premium</span>
                    <span className="italic">$65 / dozen</span>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest mb-3 opacity-50">Flavors</h4>
                    <p className="text-sm leading-relaxed">Vanilla, Chocolate, Funfetti, Cookies & Cream, Red Velvet, Salted Caramel</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest mb-3 opacity-50">Frosting</h4>
                    <p className="text-sm leading-relaxed">Classic Vanilla, Chocolate, Espresso, Cookies & Cream, Salted Caramel</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-soft" alt="Cupcakes" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-soft mt-8" alt="Cupcakes" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-16 md:py-24 px-5 md:px-6 bg-chocolate text-vanilla">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-frosting-pink font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Event Services</span>
            <h2 className="text-4xl md:text-7xl mb-4 leading-tight">Dessert Catering Packages</h2>
            <p className="opacity-70 max-w-2xl mx-auto text-sm md:text-base">Choose your dessert experience - from curated minis to fully customized spreads.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/5 p-8 md:p-10 rounded-3xl md:rounded-[3rem] border border-white/10">
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6 text-frosting-pink">Signature Package</h3>
              <p className="mb-8 opacity-80">A curated selection of our most-loved desserts. Perfect for events that want a mix of flavors without the stress.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-sage" /> Starting at $300</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-sage" /> Includes Cake Cups, Mini Cheesecakes & Brownies</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-sage" /> Packaging & Delivery available</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiK6b8av8grsiQQsihhcD7M0oNAvVrOjXnNZDMDVzM9VxIkQ/viewform" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-4 bg-frosting-pink text-chocolate text-center rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-vanilla transition-colors">
                Request Custom Quote
              </a>
            </div>

            <div className="bg-white/5 p-8 md:p-10 rounded-3xl md:rounded-[3rem] border border-white/10">
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6 text-frosting-pink">Custom Package</h3>
              <p className="mb-8 opacity-80">For when you want a dessert spread crafted around your unique vision. Tailored to your theme, flavours and event concept.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-sage" /> Personalized menu & flavor consultation</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-sage" /> Full styling, setup, and display options</li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-sage" /> Custom quote provided based on selections</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiK6b8av8grsiQQsihhcD7M0oNAvVrOjXnNZDMDVzM9VxIkQ/viewform" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-4 bg-frosting-pink text-chocolate text-center rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-vanilla transition-colors">
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-16 md:py-24 px-5 md:px-6">
        <div className="max-w-4xl mx-auto bg-sage text-vanilla rounded-3xl md:rounded-[4rem] p-8 md:p-20 text-center relative overflow-hidden shadow-soft">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-2xl md:blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-2xl md:blur-3xl"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-tight">Sweet Reflections</h2>
            <p className="text-sm md:text-lg opacity-90 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
              Subscribe to get first dibs on seasonal treat boxes, secret menu drops, and baking tips from Omaina's kitchen.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your favorite email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/20 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
                />
                <button
                  type="submit"
                  className="bg-white text-sage px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-vanilla transition-colors shadow-soft"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-handwritten"
              >
                Welcome to the family! ✨ Watch your inbox for something sweet.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* How to Order & Policies */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-beige/20 text-chocolate">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl mb-8 md:mb-10">How to Order</h2>
            <div className="space-y-6 md:space-y-8">
              {[
                { step: "1", title: "Choose your service", desc: "Classic Menu for treat boxes or Dessert Catering for full event spreads." },
                { step: "2", title: "Fill out the form", desc: "Use the inquiry form below to share your vision, date, and flavor preferences." },
                { step: "3", title: "Wait for confirmation", desc: "I'll get back to you within 1-3 business days with availability and pricing." },
                { step: "4", title: "Secure your order", desc: "A 50% non-refundable deposit confirms your date. Final payment due on pickup." }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-chocolate text-vanilla flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-chocolate/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-white p-8 md:p-10 rounded-3xl md:rounded-[3rem] shadow-soft border border-beige">
            <h2 className="text-3xl md:text-4xl mb-6 md:mb-8 flex items-center gap-3">
              <Info className="text-sage w-6 h-6 md:w-8 md:h-8" /> Policies
            </h2>
            <div className="p-4 bg-sage/5 rounded-xl border border-sage/10 mb-8">
              <p className="italic text-sage">To make your dessert experience smooth and stress-free, please review our ordering policies.</p>
            </div>
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-50">Notice Period</h4>
                <p>Classic Menu: 1 week in advance. Catering: Minimum 3 weeks' notice.</p>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-50">Cancellations</h4>
                <p>Classic: 48 hours notice. Catering: 1 week notice. Deposits are non-refundable.</p>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 opacity-50">Pickup & Delivery</h4>
                <p>Pick-up available in downtown Toronto. Delivery via courier or Uber Package (fees vary).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-chocolate text-vanilla overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageSquare className="mx-auto mb-8 opacity-50" size={40} />
          <div className="relative h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full px-4"
              >
                <p className="text-xl md:text-4xl font-handwritten leading-relaxed mb-6 md:mb-8">
                  "{reviews[currentReview].text}"
                </p>
                <p className="text-sm uppercase tracking-widest font-bold opacity-60">
                  — {reviews[currentReview].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentReview(i)}
                className={`w-3 h-3 rounded-full transition-all ${currentReview === i ? 'bg-frosting-pink w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-16 md:py-24 px-5 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-4xl md:text-7xl mb-4 md:mb-6 leading-tight">Let's bake something <br /><span className="italic text-sage">beautiful.</span></h2>
            <p className="text-lg md:text-xl text-chocolate/70 mb-8 md:mb-10 leading-relaxed">
              Whether it's a milestone birthday or a "just because" treat, I'd love to be a part of your story. Fill out the form and I'll get back to you personally.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-beige rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-chocolate" />
                </div>
                <span className="font-medium">Downtown Toronto, Ontario</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-beige rounded-xl flex items-center justify-center">
                  <Clock size={18} className="text-chocolate" />
                </div>
                <span className="font-medium">1-3 business day response time</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-beige rounded-xl flex items-center justify-center">
                  <Mail size={18} className="text-chocolate" />
                </div>
                <span className="font-medium">zakilobakes@gmail.com</span>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-60">Follow the baking journey</p>
              <a
                href="https://instagram.com/zakilobakes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-2xl font-handwritten hover:text-sage transition-colors"
              >
                <Instagram size={24} /> @zakilobakes
              </a>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[3rem] shadow-soft border border-beige relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-beige">
              <div
                className="h-full bg-sage transition-all duration-500 ease-out"
                style={{ width: `${(formStep / 3) * 100}%` }}
              ></div>
            </div>

            <h3 className="text-3xl mb-2 mt-2">Order Request Form</h3>
            <p className="text-sm uppercase tracking-widest opacity-50 font-bold mb-6">Step {formStep} of 3</p>

            <div className="mb-8 p-6 bg-frosting-pink/10 rounded-2xl text-sm text-chocolate/80 space-y-3 border border-frosting-pink/20">
              <p>• Please allow <strong>at least 1 week's notice</strong> for all dessert orders.</p>
              <p>• For larger orders (2–4 dozen), allow 2 weeks. For very large orders (4+ dozen), allow 1 month.</p>
              <p>• A deposit is required to confirm your date. Payment via e-transfer.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* STEP 1: Contact Details */}
              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                >
                  <h4 className="text-xl border-b border-beige pb-2 mb-4">Contact Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Customer Name *</label>
                      <input type="text" name="name" value={formData.name} placeholder="First & Last Name" className="input-field" onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Email Address *</label>
                      <input type="email" name="email" value={formData.email} placeholder="your@email.com" className="input-field" onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} placeholder="(123) 456-7890" className="input-field" onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Best way to reach you</label>
                      <select name="communication" value={formData.communication} className="input-field bg-white" onChange={handleInputChange}>
                        <option value="email">Email</option>
                        <option value="text">Text/Phone call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">How did you hear about us?</label>
                    <select name="source" value={formData.source} className="input-field bg-white" onChange={handleInputChange}>
                      <option value="">Select source...</option>
                      <option value="social">Social Media (Instagram, TikTok, Facebook)</option>
                      <option value="friend">Recommended by a friend or colleague</option>
                      <option value="search">Search Engine (Google)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Event Details */}
              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                >
                  <h4 className="text-xl border-b border-beige pb-2 mb-4">Event Details</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Occasion</label>
                      <select name="occasion" value={formData.occasion} className="input-field bg-white" onChange={handleInputChange}>
                        <option value="">Select an occasion...</option>
                        <option value="birthday">Birthday</option>
                        <option value="graduation">Graduation</option>
                        <option value="bridal_shower">Bridal Shower</option>
                        <option value="party">Celebration/Party</option>
                        <option value="wedding">Wedding</option>
                        <option value="prefer_not">Prefer not to answer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Date of Event *</label>
                      <input type="date" name="date" value={formData.date} className="input-field" onChange={handleInputChange} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Allergies / Dietary Restrictions *</label>
                    <input type="text" name="allergies" value={formData.allergies} placeholder="Please specify or write 'None'" className="input-field" onChange={handleInputChange} />
                    <p className="text-[10px] uppercase font-bold tracking-widest mt-2 opacity-50">Note: Kitchen handles nuts, gluten, dairy and eggs.</p>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Dessert Selection */}
              {formStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl border-b border-beige pb-2 mb-4">Dessert Selection</h4>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Dessert Type *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Cupcakes', 'Brownies', 'Mini Cheesecakes', 'Donuts', 'Cookies', 'Tarts'].map(type => (
                        <label key={type} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${formData.dessertType === type ? 'border-sage bg-sage/5' : 'border-beige hover:bg-beige/30'}`}>
                          <input type="radio" name="dessertType" value={type} checked={formData.dessertType === type} className="w-4 h-4 text-chocolate border-beige" onChange={handleInputChange} />
                          <span className="text-sm font-medium">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Quantity</label>
                      <select name="quantity" value={formData.quantity} className="input-field bg-white" onChange={handleInputChange}>
                        <option value="">Select quantity...</option>
                        <option value="0.5">0.5 dozen (6 items)</option>
                        <option value="1">1 dozen (12 items)</option>
                        <option value="1.5">1.5 dozen (18 items)</option>
                        <option value="2">2 dozen (24 items)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Design Style</label>
                      <select name="designStyle" value={formData.designStyle} className="input-field bg-white" onChange={handleInputChange}>
                        <option value="">Select a style...</option>
                        <option value="standard">Standard Flavour-Based Design</option>
                        <option value="color">Color Scheme</option>
                        <option value="themed">Themed Design</option>
                        <option value="logo">Logo / Custom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Flavor & Frosting Details</label>
                    <input type="text" name="flavorDetails" value={formData.flavorDetails} placeholder="e.g. Vanilla cake, Classic Vanilla Frosting" className="input-field" onChange={handleInputChange} />
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Additional Details / Inspiration</label>
                    <textarea name="additionalDetails" value={formData.additionalDetails} rows={3} placeholder="Tell me more about your vision (Please email inspiration pics to zakilobakes@gmail.com after submitting)" className="input-field resize-none" onChange={handleInputChange}></textarea>
                  </div>

                  <div className="flex items-start gap-4 bg-beige/30 p-6 rounded-2xl border border-beige/50 mt-6">
                    <input
                      type="checkbox"
                      name="disclaimer"
                      id="disclaimer"
                      checked={formData.disclaimer}
                      className="mt-1 w-5 h-5 accent-chocolate border-beige rounded focus:ring-sage"
                      onChange={(e) => setFormData(prev => ({ ...prev, disclaimer: e.target.checked }))}
                    />
                    <label htmlFor="disclaimer" className="text-sm leading-relaxed opacity-90 font-medium">
                      <strong>Yes, I understand</strong> that submission of this form does not secure my order. The order is only confirmed once a deposit is paid.
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6 border-t border-beige mt-8">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 py-5 bg-white text-chocolate border border-beige rounded-2xl font-bold text-lg hover:bg-beige/20 transition-all shadow-soft flex items-center justify-center gap-2"
                  >
                    Back
                  </button>
                )}

                {formStep < 3 ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNext();
                    }}
                    className="flex-[2] py-5 bg-sage text-vanilla rounded-2xl font-bold text-lg hover:bg-sage/90 transition-all shadow-soft flex items-center justify-center gap-2"
                  >
                    Next Step <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-[2] py-5 bg-chocolate text-vanilla rounded-2xl font-bold text-lg hover:bg-chocolate/90 transition-all shadow-soft flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">✨</span> Submit Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <footer className="py-12 px-6 border-t border-beige text-center">
        <div className="text-2xl font-handwritten mb-4">Zakilo Bakes</div>
        <p className="text-xs uppercase tracking-widest opacity-40">
          © 2026 Zakilo Bakes Toronto. Baked with heart, shared with love.
        </p>
      </footer>
    </div>
  );
}
