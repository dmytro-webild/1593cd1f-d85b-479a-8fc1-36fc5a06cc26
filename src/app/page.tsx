"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  BarChart3,
  CheckCircle,
  DollarSign,
  FileBarChart,
  Heart,
  HelpCircle,
  Lock,
  Network,
  Shield,
  Sparkles,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="medium"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="DimaAnalHero" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Advanced Analytics for Modern Enterprises"
          description="DimaAnalHero delivers intelligent data analytics and real-time insights. Transform your data into actionable intelligence with our cutting-edge analytics platform built for enterprises that demand precision."
          background="radial-gradient"
          tag="Next-Gen Analytics"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Free Trial", href: "#pricing" },
            { text: "View Demo", href: "#features" },
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Sarah Chen",              handle: "@sarahchen",              testimonial:
                "DimaAnalHero transformed how we analyze market data. The insights are incredibly fast and actionable.",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-business-exec-1773680987667-b6de6db6.png?_wi=1",              imageAlt: "Sarah Chen"},
            {
              name: "Michael Roberts",              handle: "@mroberts_analytics",              testimonial:
                "The real-time dashboard gives us competitive advantage. Best investment we made this year.",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-tech-entrepre-1773680987617-f53f1db1.png?_wi=1",              imageAlt: "Michael Roberts"},
            {
              name: "Emily Watson",              handle: "@emily_watson",              testimonial:
                "Integration was seamless. We started seeing ROI within weeks of deployment.",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-business-anal-1773680988152-9f714485.png?_wi=1",              imageAlt: "Emily Watson"},
          ]}
          testimonialRotationInterval={5000}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/a-modern-sleek-analytics-dashboard-inter-1773680990470-33948a5d.png"
          imageAlt="DimaAnalHero Analytics Dashboard"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Enterprise-Grade Analytics Intelligence"
          description="DimaAnalHero is built on years of data science expertise and enterprise requirements. We combine advanced machine learning with intuitive interfaces to deliver analytics that matter. Our platform processes billions of data points daily, providing insights that drive business decisions."
          tag="Built for Enterprise"
          tagIcon={Shield}
          tagAnimation="slide-up"
          buttons={[{ text: "Learn More", href: "#features" }]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/advanced-analytics-processing-visualizat-1773680988303-48aa8907.png"
          imageAlt="Analytics Intelligence"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Powerful Features for Data Mastery"
          description="Unlock the full potential of your data with DimaAnalHero's comprehensive suite of analytics tools and capabilities."
          tag="Core Capabilities"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              icon: BarChart3,
              title: "Real-Time Analytics",              description:
                "Process and visualize data in real-time with our high-performance streaming infrastructure and live dashboards.",              button: { text: "Explore", href: "#" },
            },
            {
              icon: Zap,
              title: "AI-Powered Insights",              description:
                "Machine learning algorithms automatically detect patterns, anomalies, and opportunities in your data.",              button: { text: "Explore", href: "#" },
            },
            {
              icon: Network,
              title: "Seamless Integration",              description:
                "Connect all your data sources with pre-built integrations for 200+ platforms and custom API connections.",              button: { text: "Explore", href: "#" },
            },
            {
              icon: FileBarChart,
              title: "Custom Reports",              description:
                "Build and automate custom reports that answer your specific business questions and share with stakeholders.",              button: { text: "Explore", href: "#" },
            },
            {
              icon: Lock,
              title: "Enterprise Security",              description:
                "Bank-level encryption, SOC 2 compliance, and dedicated security features for enterprise requirements.",              button: { text: "Explore", href: "#" },
            },
            {
              icon: Users,
              title: "Team Collaboration",              description:
                "Shared workspaces, role-based access, and real-time collaboration features for analytics teams.",              button: { text: "Explore", href: "#" },
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Trusted by Leading Enterprises"
          description="DimaAnalHero powers analytics for companies processing massive volumes of data and making critical business decisions."
          tag="Impact & Scale"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "metric-1",              title: "Data Processed",              subtitle: "petabytes per month",              category: "Scale",              value: "500+",              buttons: [{ text: "View Case Studies", href: "#" }],
            },
            {
              id: "metric-2",              title: "Enterprise Clients",              subtitle: "companies trust us",              category: "Adoption",              value: "2,500+",              buttons: [{ text: "See Who Uses DimaAnalHero", href: "#" }],
            },
            {
              id: "metric-3",              title: "Data Sources",              subtitle: "integrations available",              category: "Integration",              value: "200+",              buttons: [{ text: "Explore Integrations", href: "#" }],
            },
            {
              id: "metric-4",              title: "Query Speed",              subtitle: "milliseconds average",              category: "Performance",              value: "<100ms",              buttons: [{ text: "Performance Benchmarks", href: "#" }],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Hear from enterprise leaders who have transformed their analytics with DimaAnalHero."
          tag="Customer Success"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "testi-1",              name: "David Kim",              handle: "CTO, TechCorp",              testimonial:
                "DimaAnalHero reduced our analytics infrastructure costs by 60% while improving query performance by 10x. The ROI was immediate.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-business-exec-1773680987667-b6de6db6.png?_wi=2",              imageAlt: "David Kim",              icon: Award,
            },
            {
              id: "testi-2",              name: "Jessica Martinez",              handle: "VP Analytics, DataDriven Inc",              testimonial:
                "The AI-powered insights have become core to our decision-making process. We've discovered opportunities we never knew existed.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-tech-entrepre-1773680987617-f53f1db1.png?_wi=2",              imageAlt: "Jessica Martinez",              icon: ThumbsUp,
            },
            {
              id: "testi-3",              name: "Alex Thompson",              handle: "Analytics Lead, CloudFirst",              testimonial:
                "The ease of integration with our existing stack was impressive. Our team was productive within days, not weeks.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-business-anal-1773680988152-9f714485.png?_wi=2",              imageAlt: "Alex Thompson",              icon: CheckCircle,
            },
            {
              id: "testi-4",              name: "Maria Santos",              handle: "Director of BI, GlobalEnterprise",              testimonial:
                "Enterprise support has been exceptional. They understand our complex requirements and deliver solutions that work.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-data-scientis-1773680987819-649e111c.png",              imageAlt: "Maria Santos",              icon: Heart,
            },
            {
              id: "testi-5",              name: "Robert Chen",              handle: "Data Strategy Director, FinServe",              testimonial:
                "Security and compliance features meet our strictest requirements. Finally, analytics we can fully trust.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-a-business-mana-1773680988473-cbb5136a.png",              imageAlt: "Robert Chen",              icon: Lock,
            },
            {
              id: "testi-6",              name: "Laura Bergström",              handle: "CEO, Analytics Solutions Ltd",              testimonial:
                "DimaAnalHero is not just a tool; it's a strategic advantage. Our customers are seeing real value immediately.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/professional-headshot-of-an-it-director--1773680989112-fc29b5f8.png",              imageAlt: "Laura Bergström",              icon: Zap,
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs. All plans include our core analytics capabilities and enterprise support."
          tag="Flexible Plans"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          plans={[
            {
              id: "starter",              title: "Starter",              price: "$299",              period: "/month",              features: [
                "Up to 10GB data processing",                "Real-time dashboards",                "5 data sources",                "Basic AI insights",                "Email support",                "Single user account"],
              button: { text: "Start Free Trial", href: "#" },
            },
            {
              id: "professional",              title: "Professional",              price: "$999",              period: "/month",              features: [
                "Up to 1TB data processing",                "Advanced dashboards",                "50 data sources",                "Advanced AI insights",                "Priority support",                "Up to 10 team members",                "Custom reports",                "API access"],
              button: { text: "Start Free Trial", href: "#" },
            },
            {
              id: "enterprise",              title: "Enterprise",              price: "Custom",              period: "contact sales",              features: [
                "Unlimited data processing",                "Custom dashboards",                "Unlimited data sources",                "Dedicated AI models",                "24/7 premium support",                "Unlimited team members",                "Advanced security",                "SLA guarantee",                "Custom integrations"],
              button: { text: "Schedule Demo", href: "#" },
            },
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about DimaAnalHero's features, pricing, and support."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "faq-1",              title: "How long does it take to set up DimaAnalHero?",              content:
                "Most customers are up and running within 2-4 hours. Our onboarding team guides you through data source connections and dashboard setup. Complex enterprise deployments may take 1-2 weeks depending on your infrastructure."},
            {
              id: "faq-2",              title: "What data sources can DimaAnalHero integrate with?",              content:
                "We support 200+ integrations including databases (PostgreSQL, MySQL, MongoDB), cloud platforms (AWS, GCP, Azure), and SaaS applications. Custom API connections are available for enterprise customers."},
            {
              id: "faq-3",              title: "Is my data secure with DimaAnalHero?",              content:
                "Yes. We use bank-level AES-256 encryption, maintain SOC 2 Type II compliance, and offer dedicated security options for enterprise customers. Data remains in your chosen region and is never used for training models."},
            {
              id: "faq-4",              title: "What kind of support do you offer?",              content:
                "All plans include email support. Professional plans get priority support, and Enterprise customers receive 24/7 phone support plus a dedicated success manager."},
            {
              id: "faq-5",              title: "Can I try DimaAnalHero for free?",              content:
                "Absolutely. All plans come with a 14-day free trial. No credit card required. Enterprise customers can schedule a personalized demo with our sales team."},
            {
              id: "faq-6",              title: "Do you offer custom development or consulting?",              content:
                "Yes. Enterprise customers can access our professional services team for custom development, optimization, and strategic consulting services."},
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wUQvOmvybi7OsenpqBLyZR6m5/abstract-tech-inspired-background-with-s-1773680990078-f516e290.png"
          imageAlt="Footer background"
          logoText="DimaAnalHero"
          copyrightText="© 2024 DimaAnalHero. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Community", href: "#" },
                { label: "Support", href: "#" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Compliance", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
