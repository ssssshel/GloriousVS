import HeadLayout from "../Head";

const ErrorScreen = ({error, message}) => {
    return ( 
        <div>
            <HeadLayout section={"Error"}/>
            <p>{error}</p>
            <p>{message}</p>
        </div>
     );
}
 
export default ErrorScreen;