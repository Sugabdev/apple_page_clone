export function CarouselDots({ data, currentIndex, goTo, color }) {
    return (
        <section className="flex items-center justify-center gap-x-4 mb-4">
            {data.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`size-2 rounded-full transition-all ${ color === "white"
                        ? index === currentIndex ? "bg-black" : "bg-gray-400" 
                        : color === "black" && index === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                />
            ))}
        </section>
    )
}