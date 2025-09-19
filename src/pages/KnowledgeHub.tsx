import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Search, 
  BookOpen, 
  Leaf, 
  Droplets, 
  Heart, 
  Sun,
  Moon,
  Flower,
  Clock,
  User,
  Star,
  ArrowRight
} from 'lucide-react';

export const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpen },
    { id: 'panchakarma', name: 'Panchakarma', icon: Droplets },
    { id: 'diet', name: 'Diet & Nutrition', icon: Leaf },
    { id: 'lifestyle', name: 'Lifestyle', icon: Sun },
    { id: 'herbs', name: 'Herbs & Remedies', icon: Flower }
  ];

  const articles = [
    {
      id: 1,
      title: 'Benefits of Virechana Therapy',
      description: 'Discover how this Panchakarma therapy cleanses the body and mind through therapeutic purgation.',
      category: 'panchakarma',
      readTime: '8 min read',
      author: 'Dr. Priya Sharma',
      rating: 4.8,
      image: '🌿',
      content: `Virechana is one of the five Panchakarma therapies that focuses on eliminating excess Pitta dosha from the body through controlled purgation. This ancient Ayurvedic practice has been used for thousands of years to treat various conditions.

**What is Virechana?**
Virechana involves the use of specific herbs and medicines to induce controlled bowel movements, effectively removing toxins and excess heat from the body.

**Benefits:**
• Improves digestion and metabolism
• Reduces inflammation in the body
• Balances Pitta dosha
• Enhances mental clarity
• Supports weight management

**Preparation:**
Before undergoing Virechana, proper preparation (Purvakarma) is essential:
1. Oleation therapy (Snehana)
2. Fomentation therapy (Swedana)
3. Dietary modifications

**Who Should Consider Virechana?**
This therapy is particularly beneficial for individuals with:
- Hyperacidity and gastritis
- Skin disorders
- Liver conditions
- Chronic headaches
- Inflammatory conditions

**Post-Treatment Care:**
After Virechana, following a specific diet and lifestyle regimen is crucial for optimal results. Light, easily digestible foods are recommended for the first few days.

Always consult with a qualified Ayurvedic practitioner before undergoing any Panchakarma therapy.`
    },
    {
      id: 2,
      title: 'Post-Therapy Diet Guidelines',
      description: 'Essential dietary recommendations to maximize the benefits of your Ayurvedic treatments.',
      category: 'diet',
      readTime: '6 min read',
      author: 'Dr. Rajesh Gupta',
      rating: 4.9,
      image: '🥗',
      content: `Proper nutrition following Ayurvedic therapies is crucial for maintaining the therapeutic benefits and supporting your body's healing process.

**General Principles:**
The post-therapy diet should be light, warm, and easily digestible to support your agni (digestive fire) without overwhelming the system.

**Foods to Include:**
• Kitchari (rice and lentil preparation)
• Warm herbal teas
• Fresh vegetables (cooked)
• Ghee in moderation
• Fresh fruits (room temperature)

**Foods to Avoid:**
• Cold or frozen foods
• Heavy, oily, or fried foods
• Processed foods
• Excessive spices
• Alcohol and caffeine

**Meal Timing:**
- Eat your largest meal at midday when digestive fire is strongest
- Have light dinner before sunset
- Maintain regular meal times

**Hydration:**
Drink warm water throughout the day. Herbal teas like ginger, tulsi, or fennel are particularly beneficial.

**Duration:**
Follow these guidelines for at least 3-7 days post-therapy, or as advised by your practitioner.`
    },
    {
      id: 3,
      title: 'Daily Routines for Wellness (Dinacharya)',
      description: 'Learn the ancient practice of daily routines that promote health and longevity.',
      category: 'lifestyle',
      readTime: '10 min read',
      author: 'Dr. Meera Patel',
      rating: 4.7,
      image: '☀️',
      content: `Dinacharya, or daily routine, is a cornerstone of Ayurvedic lifestyle that helps maintain balance and promote optimal health.

**Morning Routine (6:00 AM - 10:00 AM):**
1. **Wake up early** - Ideally before sunrise
2. **Gratitude practice** - Start with positive thoughts
3. **Oral hygiene** - Brush teeth and scrape tongue
4. **Oil pulling** - Swish oil for 5-10 minutes
5. **Abhyanga** - Self-massage with warm oil
6. **Exercise** - Yoga, walking, or light exercise
7. **Meditation** - 10-20 minutes of mindfulness
8. **Healthy breakfast** - Warm, nourishing foods

**Midday Routine (10:00 AM - 6:00 PM):**
- Main meal at noon when digestive fire is strongest
- Work with focus and take regular breaks
- Stay hydrated with warm water

**Evening Routine (6:00 PM - 10:00 PM):**
- Light dinner before sunset
- Gentle evening walk
- Relaxing activities (reading, gentle music)
- Digital detox 2 hours before bed

**Night Routine (10:00 PM onwards):**
- Prepare for sleep by 10 PM
- Create a peaceful sleep environment
- Practice deep breathing or meditation

**Benefits of Dinacharya:**
• Improved digestion and metabolism
• Better sleep quality
• Enhanced mental clarity
• Increased energy levels
• Stronger immunity
• Emotional balance

Remember, consistency is key. Start with small changes and gradually build your ideal routine.`
    },
    {
      id: 4,
      title: 'Understanding Your Dosha Constitution',
      description: 'A comprehensive guide to identifying and balancing your unique Ayurvedic constitution.',
      category: 'lifestyle',
      readTime: '12 min read',
      author: 'Dr. Priya Sharma',
      rating: 4.9,
      image: '⚖️',
      content: `Understanding your dosha constitution (Prakriti) is fundamental to Ayurvedic healing and wellness.

**The Three Doshas:**

**Vata (Air + Space):**
- Qualities: Light, dry, cold, rough, subtle, mobile
- Physical traits: Thin build, dry skin, prominent joints
- Mental traits: Creative, quick thinking, anxious when imbalanced
- Health issues: Digestive problems, joint pain, anxiety

**Pitta (Fire + Water):**
- Qualities: Hot, sharp, light, oily, liquid, mobile
- Physical traits: Medium build, warm skin, good muscle tone
- Mental traits: Intelligent, focused, irritable when imbalanced
- Health issues: Acid reflux, skin inflammation, anger

**Kapha (Earth + Water):**
- Qualities: Heavy, slow, cold, oily, smooth, stable
- Physical traits: Larger build, soft skin, strong immunity
- Mental traits: Calm, loving, sluggish when imbalanced
- Health issues: Weight gain, congestion, depression

**Identifying Your Constitution:**
Most people have a combination of doshas, with one or two being predominant. A qualified practitioner can help determine your unique constitution.

**Balancing Guidelines:**

**For Vata Imbalance:**
- Warm, moist, grounding foods
- Regular routines
- Oil massages
- Gentle exercise

**For Pitta Imbalance:**
- Cool, sweet, bitter foods
- Avoid excessive heat and spicy foods
- Moderate exercise
- Cooling practices

**For Kapha Imbalance:**
- Light, warm, spicy foods
- Regular vigorous exercise
- Dry brushing
- Stimulating activities

Understanding your constitution helps you make informed choices about diet, lifestyle, and treatments that support your optimal health.`
    },
    {
      id: 5,
      title: 'Therapeutic Benefits of Shirodhara',
      description: 'Explore the profound healing effects of this signature Ayurvedic therapy for mind and body.',
      category: 'panchakarma',
      readTime: '7 min read',
      author: 'Dr. Rajesh Gupta',
      rating: 4.8,
      image: '💧',
      content: `Shirodhara, literally meaning "head flow," is one of the most renowned Ayurvedic therapies known for its profound calming and healing effects.

**What is Shirodhara?**
This therapy involves the continuous pouring of warm medicated oil, milk, buttermilk, or herbal decoctions over the forehead in a steady stream.

**The Process:**
1. Patient lies comfortably on a treatment table
2. Warm oil is poured from a specific height
3. The flow continues for 30-45 minutes
4. The treatment is performed in a serene environment

**Types of Shirodhara:**
- **Taila Dhara**: Using medicated oils
- **Takra Dhara**: Using medicated buttermilk
- **Jala Dhara**: Using herbal decoctions
- **Kshira Dhara**: Using medicated milk

**Health Benefits:**
• Reduces stress and anxiety
• Improves sleep quality
• Relieves headaches and migraines
• Enhances mental clarity
• Balances emotions
• Reduces hypertension
• Strengthens nervous system

**Mental and Emotional Benefits:**
Shirodhara has a unique ability to calm the mind and induce a meditative state. Many patients report feeling deeply relaxed and experiencing improved emotional well-being.

**Who Can Benefit?**
- Individuals with stress-related disorders
- Those suffering from insomnia
- People with anxiety or depression
- Anyone seeking deep relaxation

**Preparation and Aftercare:**
Proper preparation and post-treatment care are essential for maximum benefits. Avoid exposure to cold environments and maintain a calm atmosphere after treatment.

**Contraindications:**
While generally safe, Shirodhara should be avoided during pregnancy, fever, or certain skin conditions. Always consult with a qualified practitioner.

The beauty of Shirodhara lies not just in its therapeutic benefits but in the profound sense of peace and renewal it brings to both body and mind.`
    },
    {
      id: 6,
      title: 'Ayurvedic Herbs for Modern Wellness',
      description: 'Discover powerful herbs that can support your health in today\'s busy lifestyle.',
      category: 'herbs',
      readTime: '9 min read',
      author: 'Dr. Meera Patel',
      rating: 4.6,
      image: '🌺',
      content: `Modern life presents unique challenges to our health and well-being. Fortunately, ancient Ayurvedic herbs offer natural solutions for contemporary wellness needs.

**Top Ayurvedic Herbs for Modern Living:**

**1. Ashwagandha (Withania somnifera)**
- Benefits: Stress reduction, improved energy, better sleep
- Uses: Anxiety, fatigue, immune support
- Dosage: 300-600mg daily (consult practitioner)

**2. Brahmi (Bacopa monnieri)**
- Benefits: Enhanced memory, mental clarity, cognitive function
- Uses: Study aid, age-related cognitive decline
- Dosage: 300-600mg daily

**3. Turmeric (Curcuma longa)**
- Benefits: Anti-inflammatory, antioxidant, joint health
- Uses: Arthritis, digestive health, skin conditions
- Dosage: 500-1000mg daily

**4. Triphala**
- Benefits: Digestive health, detoxification, regularity
- Uses: Constipation, digestive issues, cleansing
- Dosage: 1-2 grams before bed

**5. Tulsi (Ocimum sanctum)**
- Benefits: Respiratory health, stress relief, immune support
- Uses: Colds, coughs, stress management
- Dosage: 2-3 cups of tea daily

**How to Incorporate Herbs Safely:**
1. Consult with a qualified Ayurvedic practitioner
2. Start with small doses
3. Monitor your body's response
4. Choose high-quality, organic herbs
5. Be consistent with usage

**Modern Applications:**
- **For Tech Workers**: Brahmi for mental clarity, Ashwagandha for stress
- **For Athletes**: Turmeric for inflammation, Triphala for recovery
- **For Travelers**: Tulsi for immunity, Ginger for digestion

**Quality Matters:**
Always source herbs from reputable suppliers who provide third-party testing and organic certification.

**Integration with Modern Medicine:**
While Ayurvedic herbs are generally safe, inform your healthcare provider about any supplements you're taking, especially if you're on medications.

Remember, herbs work best as part of a holistic lifestyle that includes proper diet, exercise, and stress management.`
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen therapy-gradient p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Ayurveda Knowledge Hub</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the wisdom of Ayurveda with our comprehensive library of articles, 
            guides, and resources for holistic wellness.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`gap-2 ${
                  selectedCategory === category.id 
                    ? 'primary-gradient text-primary-foreground' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="healing-card h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-3">
                  <div className="text-4xl text-center">{article.image}</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="capitalize">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-muted-foreground">{article.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full gap-2 primary-gradient">
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="text-center mb-4">
                          <div className="text-6xl mb-4">{article.image}</div>
                          <DialogTitle className="text-2xl mb-2">{article.title}</DialogTitle>
                          <DialogDescription className="text-base">
                            By {article.author} • {article.readTime}
                          </DialogDescription>
                        </div>
                      </DialogHeader>
                      <div className="prose prose-sm max-w-none">
                        {article.content.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h3 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
                                {paragraph.slice(2, -2)}
                              </h3>
                            );
                          }
                          if (paragraph.startsWith('•') || paragraph.startsWith('-')) {
                            const items = paragraph.split('\n');
                            return (
                              <ul key={index} className="list-disc pl-6 space-y-1 mb-4">
                                {items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-muted-foreground">
                                    {item.replace(/^[•-]\s*/, '')}
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          if (paragraph.match(/^\d+\./)) {
                            const items = paragraph.split('\n');
                            return (
                              <ol key={index} className="list-decimal pl-6 space-y-1 mb-4">
                                {items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-muted-foreground">
                                    {item.replace(/^\d+\.\s*/, '')}
                                  </li>
                                ))}
                              </ol>
                            );
                          }
                          return (
                            <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-medium text-muted-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or category filter to find relevant content.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};