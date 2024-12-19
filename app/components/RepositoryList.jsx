import React, { useState } from 'react';
import { FiSearch, FiRefreshCw, FiPlus } from 'react-icons/fi';

const initialRepositories = [
  { name: "design-system", language: "React", size: "7320 KB", visibility: "Public", updatedAt: "Updated 1 day ago" },
  { name: "codeant-ci-app", language: "Javascript", size: "5871 KB", visibility: "Private", updatedAt: "Updated 2 days ago" },
  { name: "analytics-dashboard", language: "Python", size: "4521 KB", visibility: "Private", updatedAt: "Updated 5 days ago" },
  { name: "mobile-app", language: "Swift", size: "3096 KB", visibility: "Public", updatedAt: "Updated 3 days ago" },
  { name: "e-commerce-platform", language: "Java", size: "6210 KB", visibility: "Private", updatedAt: "Updated 6 days ago" },
  { name: "blog-website", language: "HTML/CSS", size: "1876 KB", visibility: "Public", updatedAt: "Updated 4 days ago" },
  { name: "social-network", language: "PHP", size: "5432 KB", visibility: "Private", updatedAt: "Updated 7 days ago" },
];

const languageColors = {
  React: "bg-blue-500",
  Javascript: "bg-yellow-400",
  Python: "bg-green-500",
  Swift: "bg-orange-500",
  Java: "bg-red-500",
  "HTML/CSS": "bg-purple-500",
  PHP: "bg-blue-600",
};

const RepositoryList = () => {
  const [repositories, setRepositories] = useState(initialRepositories);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefresh = () => {
    const refreshedRepos = repositories.map(repo => ({
      ...repo,
      updatedAt: "Updated just now"
    }));
    setRepositories(refreshedRepos);
  };

  const handleAddRepository = () => {
    const newRepo = {
      name: `New Repository ${repositories.length + 1}`,
      language: "JavaScript",
      size: "0 KB",
      visibility: "Private",
      updatedAt: "Created just now"
    };
    setRepositories([newRepo, ...repositories]);
  };

  return (
    <div className="flex-1   mx-auto flex flex-col overflow-hidden bg-white border-2 rounded-xl">
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-1 px-4 py-4">Repositories</h1>
        <p className="text-sm text-gray-500 px-4">{filteredRepositories.length} total repositories</p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4 px-4">
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
        <div className="flex gap-2">
          <button 
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md hover:bg-gray-50"
            onClick={handleRefresh}
          >
            <FiRefreshCw size={16} />
            Refresh All
          </button>
          <button 
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-[#1570EF] rounded-md hover:bg-blue-600"
            onClick={handleAddRepository}
          >
            <FiPlus size={16} />
            Add Repository
          </button>
        </div>
      </div>
      <div className=" overflow-y-hidden h-[520px] border-0">
        <div className="border-t">
          {filteredRepositories.map((repo) => (
            
            <div key={repo.name} className="flex border-b p-4 flex-col  hover:bg-gray-100">
              
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{repo.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    repo.visibility === "Public" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {repo.visibility}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className={`h-2 w-2 rounded-full ${languageColors[repo.language]}`} />
                  {repo.language}
                </div>
                <span>{repo.size}</span>
                <span>{repo.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;