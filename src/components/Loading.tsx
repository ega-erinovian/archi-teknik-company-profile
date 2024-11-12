export const Skeleton = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <div className="animate-pulse">
        <div className="h-7 bg-gray-200 rounded-md w-3/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-5 bg-gray-200 rounded-md w-full"></div>
          <div className="h-5 bg-gray-200 rounded-md w-5/6"></div>
          <div className="h-5 bg-gray-200 rounded-md w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

// app/loading.tsx
export default function Loading() {
  return <Skeleton />;
}
