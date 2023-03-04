const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            { loggedIn && <h2 className="wd-text-black">Welcome Inline</h2>}
            {!loggedIn && <h2 className="wd-text-black">Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;