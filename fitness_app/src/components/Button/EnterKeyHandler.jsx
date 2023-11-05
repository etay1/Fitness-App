
function EnterKeyHandler({ onSubmit, children }) {

    const handleEnterPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            onSubmit();
        }

    }
    return (
        <div onKeyDown ={handleEnterPress}>
            {children}
        </div>
    )
}
export default EnterKeyHandler;
