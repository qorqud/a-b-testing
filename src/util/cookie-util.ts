export class CookieUtil {

    static getValueFromCookie(cookieKey: string): string | null {
        const cookie = document.cookie.split('; ').find(cookie => cookie.startsWith(cookieKey + '='));
        return cookie ? cookie.split('=')[1] : null;
    }

    static setCookieValue(cookieKey: string, cookieValue: string) {
        document.cookie = `${cookieKey}=${cookieValue}; path=/`;
    }

}