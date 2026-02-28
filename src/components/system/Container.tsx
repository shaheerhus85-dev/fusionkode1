
export default function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`w-full max-w-[1400px] mx-auto px-6 md:px-12 ${className}`}>
            {children}
        </div>
    );
}
