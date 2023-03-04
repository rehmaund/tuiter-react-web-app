const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
        return (<h2 className="wd-text-black">Welcome If Else</h2>);
    } else {
        return (<h2 className="wd-text-black">Please login If Else</h2>);
    }
};
export default ConditionalOutputIfElse;