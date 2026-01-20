export const HorizontalLoader = ({ message = 'Loading...', className = '' }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Loading bar container */}
      <div className="relative h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        {/* Animated bar - using transform for GPU acceleration */}
        <div 
          className="absolute inset-y-0 left-0 w-1/3 bg-blue-500 rounded-full"
          style={{
            animation: 'slideLoader 1.5s ease-in-out infinite',
            willChange: 'transform'
          }}
        />
      </div>
      
      {/* Loading message */}
      {message && (
        <span className="text-sm text-gray-600 select-none">
          {message}
        </span>
      )}
      
      {/* CSS Animation */}
      <style>{`
        @keyframes slideLoader {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(300%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};