export function failedLogin(testName:string, error:any) {
    let text:string = "Test " + testName + " failed login: " + error.message;
    console.log(text);
    fail(text);
}

export function failedTestWithError(testName:string, error:any) {
    let text:string = "Test " + testName + " failed: " + error.message;
    console.log(text);
    fail(text);
}