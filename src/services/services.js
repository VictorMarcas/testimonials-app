export const getUsers = async () => {
    let errors = false;
    let users = [];
    try {
        let response = await fetch('https://api-challenge-talently.vercel.app/api/users');
        let data = await response.json();
        users = data.result;
    } catch (error) {
        errors = error;
    }
    
    return [users, errors];
}