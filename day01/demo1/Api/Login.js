import { http, apis } from "../unlits/http";
/**封装登录接口 */
export const getLogin = (data) => {
	return http({
		url: apis("/sys/login"),
		method: "POST",
		data,
	});
};