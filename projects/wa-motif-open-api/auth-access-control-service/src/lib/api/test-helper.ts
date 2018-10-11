/*
export function failLogin(testName:string, error:any) {
    let text:string = "Test " + testName + " failed login: " + error.message;
    console.log(text);
    fail(text);
}
*/

export function failLogin(error:any) {
    let text:string = "Test login failed: " + error.message;
    console.log(text);
    fail(text);
}

export function failTestWithError(testName:string, error:any) {
    let text:string = "Test " + testName + " failed: " + error.message;
    console.log(text);
    fail(text);
}
