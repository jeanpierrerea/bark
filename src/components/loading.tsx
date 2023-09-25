export const LoadingScreen = () => {
    return (

    <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-slate-500"></div>
        <img src="https://www.svgrepo.com/show/401417/dog-face.svg"  className="rounded-full h-24 w-24"/>
    </div>

    );
};

export const LoadingPage = () => {
    return (<div className="absolute top-0 right-0 w-screen h-screen flex justify-center
    items-center">
        <LoadingScreen />
    </div>
    );
};