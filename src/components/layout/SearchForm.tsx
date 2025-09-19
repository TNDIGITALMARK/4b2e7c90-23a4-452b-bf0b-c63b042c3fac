'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchFormProps {
  className?: string;
}

export function SearchForm({ className }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={`relative ${className || ''}`}>
      <Input
        type="text"
        placeholder="Search breeds, facts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`pl-10 pr-4 py-2 ${className?.includes('w-64') ? 'w-64' : 'w-full'}`}
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}