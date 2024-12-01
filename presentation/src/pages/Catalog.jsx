import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PresentationCard from '../components/presentation/PresentationCard';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Catalog = () => {
  const [presentations, setPresentations] = useState([
    { 
      id: 1, 
      title: 'Marketing Strategy Masterclass', 
      price: 20, 
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Marketing',
      downloads: 1240,
      rating: 4.7,
    },
    { 
      id: 2, 
      title: 'Business Plan Professional', 
      price: 25, 
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Business',
      downloads: 920,
      rating: 4.5,
    },
    { 
      id: 3, 
      title: 'Growth Hacking Techniques', 
      price: 18, 
      thumbnail: '/assets/images/default-presentation-thumb.png',
      category: 'Technology',
      downloads: 780,
      rating: 4.6,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['All', 'Marketing', 'Business', 'Technology', 'Education'];

  const filteredPresentations = presentations.filter(presentation => 
    (searchTerm === '' || presentation.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === null || selectedCategory === 'All' || presentation.category === selectedCategory)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Presentation Catalog</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our extensive collection of professional presentation templates
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex items-center space-x-4">
        <div className="flex-grow">
          <Input 
            placeholder="Search presentations..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={20} className="text-gray-400" />}
          />
        </div>
        <div className="flex items-center space-x-2">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              variant={selectedCategory === (category === 'All' ? null : category) ? 'primary' : 'outline'}
              className="px-3 py-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Presentations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPresentations.map((presentation) => (
          <PresentationCard
            key={presentation.id}
            title={presentation.title}
            price={presentation.price}
            thumbnail={presentation.thumbnail}
            category={presentation.category}
            downloads={presentation.downloads}
            rating={presentation.rating}
            onClick={() => alert(`View details for ${presentation.title}`)}
          />
        ))}
      </div>

      {filteredPresentations.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl">No presentations found</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;