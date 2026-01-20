export const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};