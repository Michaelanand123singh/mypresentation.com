import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Monitor, 
  Book, 
  Activity 
} from 'lucide-react';
import CategoryBadge from '../components/presentation/CategoryBadge';

const Categories = () => {
  const categoriesData = [
    { 
      name: 'Marketing', 
      icon: TrendingUp,
      description: 'Sales strategies, market analysis, and growth techniques',
      presentations: 42
    },
    { 
      name: 'Finance', 
      icon: Briefcase,
      description: 'Investment plans, financial reports, and economic insights',
      presentations: 35
    },
    { 
      name: 'Education', 
      icon: Book,
      description: 'Lecture materials, training modules, and learning resources',
      presentations: 28
    },
    { 
      name: 'Technology', 
      icon: Monitor,
      description: 'Tech trends, product launches, and innovation showcases',
      presentations: 50
    },
    { 
      name: 'Health', 
      icon: Activity,
      description: 'Medical research, wellness strategies, and healthcare insights',
      presentations: 22
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Presentation Categories</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of professionally designed presentation templates
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categoriesData.map((category) => (
          <div 
            key={category.name} 
            className="
              bg-white 
              shadow-md 
              rounded-lg 
              p-6 
              hover:shadow-xl 
              transition-shadow 
              flex 
              flex-col 
              items-center 
              text-center
            "
          >
            <category.icon 
              className="text-blue-600 mb-4" 
              size={50} 
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {category.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {category.description}
            </p>
            <div className="flex items-center space-x-2">
              <CategoryBadge category={category.name} />
              <span className="text-gray-500">
                {category.presentations} Presentations
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;