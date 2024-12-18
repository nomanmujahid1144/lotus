export const TextTyping = () => {
    return (
        <div className="inline">
            <div className="inline-flex items-center">
                <div className="inline-block bg-green w-auto px-px">
                    <span
                        id='text-typing-animation'
                        className="font-bold 2xl:text-5xl xl:text-325 lg:text-5xl md:text-4xl text-3xl 2xl:leading-54 xl:leading-62 lg:leading-54 md:leading-42 leading-9 cursor-pointer inline-flex w-max"
                    ></span>
                    <span className="font-thin relative -top-1 animate-blink">
                        |
                    </span>
                </div>
            </div>
        </div>
    );
};
