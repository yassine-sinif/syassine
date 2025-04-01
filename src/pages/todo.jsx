import React, { useState, useRef, useEffect } from 'react';
import { FaTrash, FaEdit, FaClock, FaStar, FaCheck, FaSort, FaFilter, FaEraser } from 'react-icons/fa';

export default function Todo() {
  // Load todos from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [showDateIndex, setShowDateIndex] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  const [theme, setTheme] = useState('dark'); 
  const inputRef = useRef();

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addingTodo = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    
    setTodos([...todos, {
      completed: false,
      text,
      date: new Date().toLocaleString(),
      modifiedDate: null,
      important: false
    }]);
    inputRef.current.value = "";
  };

  const toggleCompleted = (index) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const toggleImportant = (index) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, important: !todo.important } : todo
    ));
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const modifyTodo = (index) => {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, showInput: true };
      }
      return todo;
    }));
  };

  const saveChanges = (index, newText) => {
    if (!newText.trim()) return;
    
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          text: newText,
          modifiedDate: new Date().toLocaleString(),
          showInput: false
        };
      }
      return todo;
    }));
  };

  const toggleDate = (index) => {
    setShowDateIndex(showDateIndex === index ? null : index);
  };

  const sortByImportance = () => {
    const sortedTodos = [...todos].sort((a, b) => b.important - a.important);
    setTodos(sortedTodos);
  };

  const toggleCompletedFilter = () => {
    setShowCompleted(!showCompleted);
  };

  const clearAllTodos = () => {
    if (window.confirm('Are you sure you want to clear all todos?')) {
      setTodos([]);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addingTodo();
    }
  };

  const filteredTodos = showCompleted ? todos.filter(todo => todo.completed) : todos;
  
  // lcolors odkshi 
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const inputBg = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
  const borderColor = theme === 'dark' ? 'border-indigo-500' : 'border-indigo-400';




  // fo9 bohdo  --- lt7t bohdo 


  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-6 transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto p-8 rounded-xl shadow-2xl ${cardBg} border border-indigo-300 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Ahsn karni fl3alam </h1>
          <button 
            onClick={toggleTheme} 
            className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <input 
              ref={inputRef} 
              className={`p-3 w-full rounded-lg ${inputBg} ${textColor} border ${borderColor} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-inner`} 
              placeholder="What needs to be done?" 
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={addingTodo} 
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FaCheck /> Add
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button 
              onClick={sortByImportance} 
              className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1"
            >
              <FaSort /> Important
            </button>
            <button 
              onClick={toggleCompletedFilter} 
              className={`px-3 py-2 ${showCompleted ? 'bg-green-600' : 'bg-green-500'} text-white rounded-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1`}
            >
              <FaFilter /> {showCompleted ? 'All' : 'Completed'}
            </button>
            <button 
              onClick={clearAllTodos} 
              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1"
            >
              <FaEraser /> Clear All
            </button>
            <div className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center">
              {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
            </div>
          </div>
        </div>
        
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">ash ktshof  ktb lk shi haja asahbi</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredTodos.map(({ text, completed, date, modifiedDate, showInput, important }, index) => (
              <li 
                key={index} 
                className={`p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 ${important ? 'border-yellow-400' : borderColor} ${cardBg} shadow-md hover:shadow-lg transition-all duration-200 ${completed ? 'opacity-70' : ''}`}
              >            
                <div className="flex items-center gap-3 w-full sm:w-auto mb-3 sm:mb-0">
                  <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={() => toggleCompleted(index)} 
                    className="w-5 h-5 rounded-full accent-indigo-600 cursor-pointer"
                  />
                  
                  {showInput ? (
                    <input 
                      className={`p-2 ${inputBg} rounded-lg ${textColor} w-full border ${borderColor}`} 
                      defaultValue={text} 
                      onBlur={(e) => saveChanges(index, e.target.value)} 
                      onKeyPress={(e) => e.key === 'Enter' && saveChanges(index, e.target.value)} 
                      autoFocus 
                    />
                  ) : (
                    <div className="flex-grow">
                      <span 
                        className={`cursor-pointer text-lg ${completed ? 'line-through text-gray-400' : ''}`}
                      >
                        {showDateIndex === index ? (
                          <span className="text-indigo-400 text-sm">
                            {modifiedDate ? `Modified: ${modifiedDate}` : `Created: ${date}`}
                          </span>
                        ) : text}
                      </span>
                      {completed && <span className="ml-2 text-green-500">✓</span>}
                      {important && <span className="ml-2 text-yellow-400">★</span>}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-end">
                  <button 
                    onClick={() => toggleImportant(index)} 
                    className={`p-2 rounded-lg ${important ? 'bg-yellow-400 text-black' : 'bg-gray-600 text-white'} hover:opacity-90 transition-all`}
                    title="Mark as important"
                  >
                    <FaStar size={16} />
                  </button>
                  <button 
                    onClick={() => toggleDate(index)} 
                    className="p-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-all"
                    title="Show date"
                  >
                    <FaClock size={16} />
                  </button>
                  <button 
                    onClick={() => modifyTodo(index)} 
                    className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all"
                    title="Edit task"
                  >
                    <FaEdit size={16} />
                  </button>
                  <button 
                    onClick={() => deleteTodo(index)} 
                    className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
                    title="Delete task"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}