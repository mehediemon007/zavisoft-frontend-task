export const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center h-64 w-full gap-4">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-gray-500 animate-pulse">Finding related items...</p>
    </div>
);