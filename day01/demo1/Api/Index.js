import { http, apis } from "../unlits/http";
/**获取首页用户基本信息 */
export const IndexGet = () => {
	return http({
		url: apis("/sys/user/604f764971f93f3ac8f365c2"),
		method: "get",
	});
};
