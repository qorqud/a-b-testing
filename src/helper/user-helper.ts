import {v4} from "uuid";
import {CookieUtil} from "../util/cookie-util";

export class UserHelper {

    private static readonly USER_COOKIE_KEY = 'user_id';

    public static initializeUser() {
        const userIdFromCookie = this.getUserId();
        if (!userIdFromCookie) {
            this.setUserIdCookie(this.generateUserId());
        }
    }

    public static getUserId() {
        return CookieUtil.getValueFromCookie(UserHelper.USER_COOKIE_KEY);
    }

    private static setUserIdCookie(userId: string) {
        CookieUtil.setCookieValue(UserHelper.USER_COOKIE_KEY, userId)
    }

    private static generateUserId() {
        return v4();
    }

}